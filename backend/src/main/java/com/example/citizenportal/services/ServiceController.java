package com.example.citizenportal.services;

import com.example.citizenportal.dto.response.ServiceDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/services")
public class ServiceController {
    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @GetMapping
    public ResponseEntity<Page<ServiceDTO>> getAllServices(Pageable pageable) {
        return ResponseEntity.ok(serviceService.getAllServices(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceDTO> getServiceById(@PathVariable Long id) {
        return ResponseEntity.ok(serviceService.getServiceById(id));
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<Page<ServiceDTO>> getServicesByCategory(
            @PathVariable Long categoryId,
            Pageable pageable) {
        return ResponseEntity.ok(serviceService.getServicesByCategory(categoryId, pageable));
    }
}