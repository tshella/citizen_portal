package com.citizenportal.controller.auth

import org.springframework.web.bind.annotation.*
import org.springframework.http.ResponseEntity
import com.citizenportal.dto.request.LoginRequest
import com.citizenportal.dto.request.RegisterRequest
import com.citizenportal.service.auth.AuthService

@RestController
@RequestMapping("/api/auth")
class AuthController {

    final AuthService authService

    AuthController(AuthService authService) {
        this.authService = authService
    }

    @PostMapping("/login")
    ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        authService.authenticateUser(loginRequest)
    }

    @PostMapping("/register")
    ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        authService.registerUser(registerRequest)
    }
}