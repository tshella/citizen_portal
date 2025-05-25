package com.example.citizenportal.dto.response;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ApplicationResponse {
    private Long id;
    private String serviceName;
    private LocalDateTime submissionDate;
    private String status;
    private String referenceNumber;
}