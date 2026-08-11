package com.aakash.portfolio.controller;

import com.aakash.portfolio.dto.ContactRequest;
import com.aakash.portfolio.dto.ContactResponse;
import com.aakash.portfolio.service.GoogleSheetsService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Map;

@RestController
public class ContactController {

    private final GoogleSheetsService googleSheetsService;

    public ContactController(GoogleSheetsService googleSheetsService) {
        this.googleSheetsService = googleSheetsService;
    }

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> rootInfo() {
        return ResponseEntity.ok(Map.of(
                "name", "Aakash Portfolio Spring Boot Backend API",
                "framework", "Spring Boot 3.2 (Java 17)",
                "status", "online",
                "timestamp", Instant.now().toString(),
                "endpoints", Map.of(
                        "health", "GET /api/health",
                        "contact", "POST /api/contact"
                )
        ));
    }

    @PostMapping("/api/contact")
    public ResponseEntity<ContactResponse> submitContact(
            @Valid @RequestBody ContactRequest request,
            HttpServletRequest servletRequest
    ) {
        String userAgent = servletRequest.getHeader("User-Agent");
        String clientIp = servletRequest.getHeader("X-Forwarded-For");
        if (clientIp == null || clientIp.isBlank()) {
            clientIp = servletRequest.getRemoteAddr();
        }

        googleSheetsService.forwardToGoogleSheets(request, userAgent, clientIp);

        return ResponseEntity.ok(ContactResponse.ok(
                "Thank you, " + request.name() + "! Your message has been received successfully."
        ));
    }
}
