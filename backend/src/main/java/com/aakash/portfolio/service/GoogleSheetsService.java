package com.aakash.portfolio.service;

import com.aakash.portfolio.dto.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Service
public class GoogleSheetsService {

    private static final Logger log = LoggerFactory.getLogger(GoogleSheetsService.class);

    @Value("${google.sheets.webhook.url:}")
    private String googleSheetsWebhookUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public boolean forwardToGoogleSheets(ContactRequest request, String userAgent, String clientIp) {
        if (googleSheetsWebhookUrl == null || googleSheetsWebhookUrl.isBlank()) {
            log.info("📬 Contact Submission Received (No GOOGLE_SHEETS_WEBHOOK_URL set): {}", request);
            return false;
        }

        try {
            Map<String, Object> payload = new HashMap<>();
            payload.put("timestamp", Instant.now().toString());
            payload.put("name", request.name().trim());
            payload.put("email", request.email().trim().toLowerCase());
            payload.put("projectType", request.projectType() != null && !request.projectType().isBlank()
                    ? request.projectType().trim() : "General Inquiry");
            payload.put("message", request.message().trim());
            payload.put("userAgent", userAgent != null ? userAgent : "Unknown");
            payload.put("clientIp", clientIp != null ? clientIp : "Unknown");

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);

            ResponseEntity<String> response = restTemplate.postForEntity(googleSheetsWebhookUrl, entity, String.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                log.info("✅ Forwarded contact submission to Google Sheets for: {}", request.email());
                return true;
            } else {
                log.warn("⚠️ Google Sheets webhook returned HTTP status: {}", response.getStatusCode());
                return false;
            }
        } catch (Exception e) {
            log.error("❌ Error forwarding contact submission to Google Sheets: {}", e.getMessage(), e);
            return false;
        }
    }
}
