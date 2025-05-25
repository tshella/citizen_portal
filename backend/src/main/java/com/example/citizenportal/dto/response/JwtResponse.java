package com.example.citizenportal.dto.response;

import lombok.Data;

import java.util.List;

@Data
public class JwtResponse {
    private String token;
    private Long id;
    private String username;
    private String email;
    private List<String> roles;
}