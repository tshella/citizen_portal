package com.example.citizenportal.repository;

import com.example.citizenportal.model.applications.CitizenApplication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<CitizenApplication, Long> {
    Page<CitizenApplication> findByUserId(Long userId, Pageable pageable);
}