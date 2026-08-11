package com.aakash.portfolio.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.management.ManagementFactory;
import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class HealthController {

    @Value("${google.sheets.webhook.url:}")
    private String googleSheetsUrl;

    @Value("${spring.application.name:portfolio-backend}")
    private String appName;

    @GetMapping("/api/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> health = new LinkedHashMap<>();
        health.put("status", "UP");
        health.put("service", appName);
        health.put("javaVersion", System.getProperty("java.version"));
        health.put("uptimeMs", ManagementFactory.getRuntimeMXBean().getUptime());
        
        Runtime runtime = Runtime.getRuntime();
        double usedMemoryMB = (runtime.totalMemory() - runtime.freeMemory()) / (1024.0 * 1024.0);
        double maxMemoryMB = runtime.maxMemory() / (1024.0 * 1024.0);
        
        health.put("memoryUsedMB", Math.round(usedMemoryMB * 100.0) / 100.0);
        health.put("memoryMaxMB", Math.round(maxMemoryMB * 100.0) / 100.0);
        health.put("googleSheetsConfigured", Boolean.valueOf(googleSheetsUrl != null && !googleSheetsUrl.isBlank()));
        health.put("timestamp", Instant.now().toString());

        return ResponseEntity.ok(health);
    }
}
