package com.aakash.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ContactRequest(
        @NotBlank(message = "Name is required")
        String name,

        @NotBlank(message = "Email is required")
        @Email(message = "Valid email format is required")
        String email,

        String projectType,

        @NotBlank(message = "Message content is required")
        String message
) {}
