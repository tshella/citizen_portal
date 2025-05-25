package com.example.citizenportal.repository;

import com.example.citizenportal.model.auth.Role;
import com.example.citizenportal.model.auth.Role.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(ERole name);
}