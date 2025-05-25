package com.example.citizenportal.dto.response;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ApplicationResponse {
    private Long id;
    private String username;
    private String serviceName;
    private String status;
    private LocalDateTime submissionDate;
}