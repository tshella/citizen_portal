package com.example.citizenportal.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ApplicationRequest {
    @NotNull
    private Long serviceId;
    
    @NotNull
    private String applicationData;
}