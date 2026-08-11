package com.aakash.portfolio.dto;

import java.time.Instant;

public record ContactResponse(
        boolean success,
        String message,
        String timestamp
) {
    public static ContactResponse ok(String message) {
        return new ContactResponse(true, message, Instant.now().toString());
    }

    public static ContactResponse error(String message) {
        return new ContactResponse(false, message, Instant.now().toString());
    }
}
