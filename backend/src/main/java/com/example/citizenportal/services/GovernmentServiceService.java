package com.example.citizenportal.services;

import com.example.citizenportal.dto.response.ServiceDTO;
import com.example.citizenportal.model.services.GovernmentService;
import com.example.citizenportal.model.services.ServiceCategory;
import com.example.citizenportal.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GovernmentServiceService {
    private final ServiceRepository serviceRepository;

    public Page<ServiceDTO> getAllServices(Pageable pageable) {
        return serviceRepository.findAll(pageable)
                .map(this::convertToDto);
    }

    public ServiceDTO getServiceById(Long id) {
        return serviceRepository.findById(id)
                .map(this::convertToDto)
                .orElseThrow(() -> new RuntimeException("Service not found"));
    }

    public Page<ServiceDTO> getServicesByCategory(Long categoryId, Pageable pageable) {
        return serviceRepository.findByCategoryId(categoryId, pageable)
                .map(this::convertToDto);
    }

    private ServiceDTO convertToDto(GovernmentService service) {
        ServiceDTO dto = new ServiceDTO();
        dto.setId(service.getId());
        dto.setName(service.getName());
        dto.setDescription(service.getDescription());
        dto.setCategory(service.getCategory().getName());
        dto.setRequiresPayment(service.isRequiresPayment());
        dto.setFeeAmount(service.getFeeAmount());
        return dto;
    }
}