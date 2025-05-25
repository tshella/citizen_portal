package com.example.citizenportal.dto.response;

import lombok.Data;

@Data
public class ServiceDTO {
    private Long id;
    private String name;
    private String description;
    private String category;
    private boolean requiresPayment;
    private Double feeAmount;
}