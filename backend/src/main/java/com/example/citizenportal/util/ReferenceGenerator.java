package com.example.citizenportal.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ReferenceGenerator {

    public static String generateApplicationReference(Long applicationId) {
        String datePart = LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE);
        return String.format("APP-%s-%06d", datePart, applicationId);
    }

    public static String generatePaymentReference(Long paymentId) {
        String datePart = LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE);
        return String.format("PAY-%s-%06d", datePart, paymentId);
    }
}