***Citizen Service Portal*** 

Enable residents to access a wide range of government/public services online. The platform should allow users to submit applications, track requests, receive updates, pay bills, and download official documents

**Author: Manaka Anthony Raphasha**

Backend System

Table of Contents

    Project Overview

    System Architecture

    API Documentation

    Development Setup

    Deployment

    Testing

    Security

    Troubleshooting

    Contributing

Project Overview

The Citizen Service Portal is a secure, scalable backend system that enables residents to access government services online. The platform allows users to submit applications, track requests, pay bills, and download official documents.

Key Features:

    User authentication and authorization (JWT)

    Service catalog management

    Application submission and tracking

    Document generation (PDF)

    Admin dashboard functionality

    Payment integration (mock implementation)

System Architecture
Technical Stack

    Backend: Java 17 with Spring Boot 3.2

    Database: PostgreSQL 15

    Authentication: JWT with OAuth2 support

    Document Generation: iText PDF

    Build Tool: Gradle (Groovy DSL)

Directory Structure

citizen-portal/
├── backend/
│   ├── src/main/java/com/example/citizenportal/
│   │   ├── admin/               # Admin management
│   │   ├── applications/        # Application processing
│   │   ├── config/              # Configuration classes
│   │   ├── controller/          # API endpoints
│   │   ├── dto/                 # Data transfer objects
│   │   ├── exception/           # Exception handling
│   │   ├── model/               # Database entities
│   │   ├── repository/          # Data access layer
│   │   ├── security/            # Security components
│   │   ├── service/             # Business logic
│   │   ├── services/            # Service catalog
│   │   ├── util/                # Utility classes
│   │   └── CitizenportalApplication.java
│   ├── src/main/resources/      # Configuration files
│   └── build.gradle             # Build configuration

API Documentation
Authentication
Endpoint	Method	Description
/api/auth/login	POST	Authenticate user
/api/auth/register	POST	Register new user
/api/auth/refreshtoken	POST	Refresh JWT token
Services
Endpoint	Method	Description
/api/services	GET	Get all services
/api/services/{id}	GET	Get service by ID
/api/services/category/{categoryId}	GET	Get services by category
Applications
Endpoint	Method	Description
/api/applications	POST	Submit new application
/api/applications/{id}	GET	Get application details
Admin
Endpoint	Method	Description	Permissions
/api/admin/users	GET	List all users	ROLE_ADMIN
/api/admin/users/{userId}/roles	PUT	Update user roles	ROLE_ADMIN
/api/admin/applications	GET	List all applications	ROLE_ADMIN
/api/admin/applications/{applicationId}/status	PUT	Update application status	ROLE_ADMIN
Development Setup
Prerequisites

    Java 17 JDK

    PostgreSQL 15

    Gradle 7.6+

    Docker (optional)

Installation

    Clone the repository:
    bash

git clone https://github.com/your-repo/citizen-portal.git
cd citizen-portal/backend

Configure database:
bash

createdb citizen_portal

Set up environment variables:
bash

    cp src/main/resources/application-sample.yml src/main/resources/application-dev.yml

    Update application-dev.yml with your database credentials.

Running the Application
bash

./gradlew bootRun

The application will be available at http://localhost:8080
Deployment
Docker Setup

    Build the Docker image:
    bash

docker build -t citizen-portal-backend .

Run with Docker Compose:
bash

    docker-compose up -d

Configuration

Production configuration should be set in:

    application-prod.yml

    Environment variables

Required Environment Variables:
yaml

SPRING_DATASOURCE_URL: jdbc:postgresql://host:port/database
SPRING_DATASOURCE_USERNAME: username
SPRING_DATASOURCE_PASSWORD: password
APP_JWT_SECRET: your-secret-key
APP_JWT_EXPIRATION_MS: 86400000
FILE_UPLOAD_DIR: /path/to/uploads

Testing
Running Tests
bash

./gradlew test

Test Coverage

Generate coverage report:
bash

./gradlew jacocoTestReport

API Testing

Import the Postman collection from docs/postman for API testing.
Security
Authentication Flow

    Client submits credentials to /api/auth/login

    Server responds with JWT token and refresh token

    Client includes JWT in Authorization header for subsequent requests

    Token expires after configured time (default: 24 hours)

    Client can refresh token using /api/auth/refreshtoken

Security Features

    Password encryption (BCrypt)

    Role-based access control

    JWT token validation

    CSRF protection

    Input validation

Troubleshooting
Common Issues

    Database connection errors:

        Verify credentials in application-dev.yml

        Ensure PostgreSQL is running

    JWT authentication failures:

        Check token expiration

        Verify secret key matches between server and client

    File upload issues:

        Ensure upload directory exists and is writable

        Check file size limits

Contributing

    Fork the repository

    Create your feature branch (git checkout -b feature/your-feature)

    Commit your changes (git commit -am 'Add some feature')

    Push to the branch (git push origin feature/your-feature)

    Create a new Pull Request

Coding Standards:

    Follow Google Java Style Guide

    Use meaningful variable names

    Include Javadoc for public methods

    Write unit tests for new features