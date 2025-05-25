package com.example.citizenportal.model.services;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "government_services")
public class GovernmentService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private ServiceCategory category;

    private boolean requiresPayment;
    private Double feeAmount;
}