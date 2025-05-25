package com.example.citizenportal.repository;

import com.example.citizenportal.model.services.GovernmentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<GovernmentService, Long> {
    Page<GovernmentService> findByCategoryId(Long categoryId, Pageable pageable);
}