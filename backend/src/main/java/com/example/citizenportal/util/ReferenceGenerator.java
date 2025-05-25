package com.example.citizenportal.util

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

class ReferenceGenerator {
    static String generateApplicationRef(Long id) {
        String datePart = LocalDateTime.now().format(DateTimeFormatter.ofPattern('yyyyMMdd'))
        "APP-${datePart}-${id.toString().padLeft(6, '0')}"
    }
}