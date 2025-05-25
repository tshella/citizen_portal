package com.example.citizenportal.admin;

import com.example.citizenportal.dto.response.UserResponse;
import com.example.citizenportal.model.applications.CitizenApplication;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/users")
    public ResponseEntity<Page<UserResponse>> getAllUsers(Pageable pageable) {
        return ResponseEntity.ok(adminService.getAllUsers(pageable));
    }

    @PutMapping("/users/{userId}/roles")
    public ResponseEntity<Void> updateUserRoles(
            @PathVariable Long userId,
            @RequestBody Set<String> roles) {
        adminService.updateUserRoles(userId, roles);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/applications")
    public ResponseEntity<Page<CitizenApplication>> getAllApplications(Pageable pageable) {
        return ResponseEntity.ok(adminService.getAllApplications(pageable));
    }

    @PutMapping("/applications/{applicationId}/status")
    public ResponseEntity<Void> updateApplicationStatus(
            @PathVariable Long applicationId,
            @RequestParam String status) {
        adminService.updateApplicationStatus(applicationId, status);
        return ResponseEntity.noContent().build();
    }
}