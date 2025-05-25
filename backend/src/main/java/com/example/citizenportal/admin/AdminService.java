package com.example.citizenportal.admin;

import com.example.citizenportal.dto.response.ApplicationResponse;
import com.example.citizenportal.dto.response.UserResponse;
import com.example.citizenportal.exception.ResourceNotFoundException;
import com.example.citizenportal.model.auth.User;
import com.example.citizenportal.model.applications.CitizenApplication;
import com.example.citizenportal.repository.ApplicationRepository;
import com.example.citizenportal.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
public class AdminService {
    private final UserRepository userRepository;
    private final ApplicationRepository applicationRepository;

    public AdminService(UserRepository userRepository, 
                      ApplicationRepository applicationRepository) {
        this.userRepository = userRepository;
        this.applicationRepository = applicationRepository;
    }

    @Transactional(readOnly = true)
    public Page<UserResponse> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable)
                .map(user -> new UserResponse(
                        user.getId(),
                        user.getUsername(),
                        user.getEmail(),
                        user.getRoles().stream()
                                .map(role -> role.getName().name())
                                .collect(Collectors.toSet())));
    }

    @Transactional
    public void updateUserRoles(Long userId, Set<String> roles) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        // Implementation to update roles would go here
    }

    @Transactional(readOnly = true)
    public Page<ApplicationResponse> getAllApplications(Pageable pageable) {
        return applicationRepository.findAll(pageable)
                .map(app -> new ApplicationResponse(
                        app.getId(),
                        app.getUser().getUsername(),
                        app.getService().getName(),
                        app.getStatus(),
                        app.getCreatedAt()));
    }

    @Transactional
    public void updateApplicationStatus(Long applicationId, String status) {
        CitizenApplication application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found"));
        application.setStatus(status);
        applicationRepository.save(application);
    }
}