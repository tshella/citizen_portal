package com.example.citizenportal.services;

import com.example.citizenportal.dto.response.ServiceDTO;
import com.example.citizenportal.model.services.Service;
import com.example.citizenportal.repository.ServiceRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ServiceService {
    private final ServiceRepository serviceRepository;

    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public Page<ServiceDTO> getAllServices(Pageable pageable) {
        return serviceRepository.findAll(pageable)
                .map(this::convertToDto);
    }

    public ServiceDTO getServiceById(Long id) {
        return serviceRepository.findById(id)
                .map(this::convertToDto)
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));
    }

    public Page<ServiceDTO> getServicesByCategory(Long categoryId, Pageable pageable) {
        return serviceRepository.findByCategoryId(categoryId, pageable)
                .map(this::convertToDto);
    }

    private ServiceDTO convertToDto(Service service) {
        return new ServiceDTO(
                service.getId(),
                service.getName(),
                service.getDescription(),
                service.getCategory().getName(),
                service.isRequiresPayment(),
                service.getFeeAmount());
    }
}