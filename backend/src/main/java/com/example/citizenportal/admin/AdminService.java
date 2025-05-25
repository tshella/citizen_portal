package com.example.citizenportal.admin;

import com.example.citizenportal.dto.response.UserResponse;
import com.example.citizenportal.model.applications.CitizenApplication;
import com.example.citizenportal.model.auth.Role;
import com.example.citizenportal.model.auth.User;
import com.example.citizenportal.repository.ApplicationRepository;
import com.example.citizenportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminService {
    private final UserRepository userRepository;
    private final ApplicationRepository applicationRepository;

    @Transactional(readOnly = true)
    public Page<UserResponse> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable)
                .map(user -> {
                    UserResponse response = new UserResponse();
                    response.setId(user.getId());
                    response.setUsername(user.getUsername());
                    response.setEmail(user.getEmail());
                    response.setRoles(user.getRoles().stream()
                            .map(role -> role.getName().name())
                            .collect(Collectors.toSet()));
                    return response;
                });
    }

    @Transactional
    public void updateUserRoles(Long userId, Set<String> roles) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        // Implementation to update roles would go here
    }

    @Transactional(readOnly = true)
    public Page<CitizenApplication> getAllApplications(Pageable pageable) {
        return applicationRepository.findAll(pageable);
    }

    @Transactional
    public void updateApplicationStatus(Long applicationId, String status) {
        CitizenApplication application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Application not found"));
        application.setStatus(status);
        applicationRepository.save(application);
    }
}