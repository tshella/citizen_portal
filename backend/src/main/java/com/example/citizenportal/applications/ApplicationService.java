package com.example.citizenportal.applications;

import com.example.citizenportal.dto.request.ApplicationRequest;
import com.example.citizenportal.dto.response.ApplicationResponse;
import com.example.citizenportal.exception.ResourceNotFoundException;
import com.example.citizenportal.exception.UnauthorizedAccessException;
import com.example.citizenportal.model.applications.CitizenApplication;
import com.example.citizenportal.model.auth.User;
import com.example.citizenportal.model.services.GovernmentService;
import com.example.citizenportal.repository.ApplicationRepository;
import com.example.citizenportal.repository.ServiceRepository;
import com.example.citizenportal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ApplicationService {
    private final ApplicationRepository applicationRepository;
    private final UserRepository userRepository;
    private final ServiceRepository serviceRepository;

    public ApplicationResponse createApplication(ApplicationRequest request, String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        
        GovernmentService service = serviceRepository.findById(request.getServiceId())
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));

        CitizenApplication application = new CitizenApplication();
        application.setUser(user);
        application.setService(service);
        application.setApplicationData(request.getApplicationData());
        application.setStatus("SUBMITTED");

        application = applicationRepository.save(application);

        return toApplicationResponse(application);
    }

    public ApplicationResponse getApplication(Long id, String username) {
        CitizenApplication application = applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found"));

        if (!application.getUser().getUsername().equals(username)) {
            throw new UnauthorizedAccessException("You are not authorized to access this application");
        }

        return toApplicationResponse(application);
    }

    private ApplicationResponse toApplicationResponse(CitizenApplication application) {
        ApplicationResponse response = new ApplicationResponse();
        response.setId(application.getId());
        response.setServiceName(application.getService().getName());
        response.setSubmissionDate(application.getCreatedAt());
        response.setStatus(application.getStatus());
        return response;
    }
}