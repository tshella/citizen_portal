package com.example.citizenportal.model.auth;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "roles")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

    public enum ERole {
        ROLE_CITIZEN,
        ROLE_ADMIN,
        ROLE_MODERATOR
    }
}