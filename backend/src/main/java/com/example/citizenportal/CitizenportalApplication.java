package com.example.citizenportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CitizenportalApplication {
    public static void main(String[] args) {
        SpringApplication.run(CitizenportalApplication.class, args);
    }
}