package com.example.citizenportal.model.services;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "service_categories")
public class ServiceCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;
}