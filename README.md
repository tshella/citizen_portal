# 🚀 Citizen Service Portal

> Enable residents to access a wide range of government/public services online — from applications to payments to documents.

![Java](https://img.shields.io/badge/Java-17-blue.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)
![Build](https://img.shields.io/badge/build-passing-green.svg)

**Author**: _Manaka Anthony Raphasha_

---

## 📌 Table of Contents

- [📖 Project Overview](#project-overview)
- [🏛️ System Architecture](#system-architecture)
- [📚 API Documentation](#api-documentation)
- [⚙️ Development Setup](#development-setup)
- [🚀 Deployment](#deployment)
- [🧪 Testing](#testing)
- [🔒 Security](#security)
- [🛠 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)

---

## 📖 Project Overview

The **Citizen Service Portal** is a secure, scalable backend system that enables residents to digitally access government/public services.

### ✨ Key Features

- 🔐 JWT-based Authentication & Authorization
- 🗂️ Service Catalog Management
- 📝 Application Submission & Tracking
- 📄 PDF Document Generation
- 🛠️ Admin Dashboard
- 💳 Mock Payment Integration

---

## 🏛️ System Architecture

### 🧰 Technical Stack

- **Backend:** Java 17 + Spring Boot 3.2
- **Database:** PostgreSQL 15
- **Auth:** JWT + OAuth2
- **PDFs:** iText
- **Build Tool:** Gradle (Groovy DSL)

### 📁 Directory Structure

```text
citizen-portal/
└── backend/
    ├── src/main/java/com/example/citizenportal/
    │   ├── admin/               # Admin management
    │   ├── applications/        # Application processing
    │   ├── config/              # Configuration classes
    │   ├── controller/          # API endpoints
    │   ├── dto/                 # Data transfer objects
    │   ├── exception/           # Exception handling
    │   ├── model/               # Database entities
    │   ├── repository/          # Data access layer
    │   ├── security/            # Security components
    │   ├── service/             # Business logic
    │   ├── services/            # Service catalog
    │   ├── util/                # Utility classes
    │   └── CitizenportalApplication.java
    ├── src/main/resources/      # Configuration files
    └── build.gradle             # Build configuration

📚 API Documentation
<details> <summary><strong>🔐 Authentication</strong></summary>
Endpoint	Method	Description
/api/auth/login	POST	Authenticate user
/api/auth/register	POST	Register new user
/api/auth/refreshtoken	POST	Refresh JWT token
</details> <details> <summary><strong>🧾 Services</strong></summary>
Endpoint	Method	Description
/api/services	GET	Get all services
/api/services/{id}	GET	Get service by ID
/api/services/category/{categoryId}	GET	Get services by category
</details> <details> <summary><strong>📄 Applications</strong></summary>
Endpoint	Method	Description
/api/applications	POST	Submit new application
/api/applications/{id}	GET	Get application details
</details> <details> <summary><strong>🛠 Admin</strong></summary>
Endpoint	Method	Description	Permissions
/api/admin/users	GET	List all users	ROLE_ADMIN
/api/admin/users/{userId}/roles	PUT	Update user roles	ROLE_ADMIN
/api/admin/applications	GET	List all applications	ROLE_ADMIN
/api/admin/applications/{applicationId}/status	PUT	Update application status	ROLE_ADMIN
</details>
⚙️ Development Setup
✅ Prerequisites

    Java 17+

    PostgreSQL 15

    Gradle 7.6+

    Docker (optional)

🛠 Installation

git clone https://github.com/your-repo/citizen-portal.git
cd citizen-portal/backend

Configure the database:

createdb citizen_portal

Setup environment variables:

cp src/main/resources/application-sample.yml src/main/resources/application-dev.yml
# Edit application-dev.yml with your DB credentials

▶️ Run the app

./gradlew bootRun

App available at: http://localhost:8080
🚀 Deployment
🐳 Docker

Build the image:

docker build -t citizen-portal-backend .

Run with Docker Compose:

docker-compose up -d

🔧 Production Configuration

Set in:

    application-prod.yml

    Environment Variables

SPRING_DATASOURCE_URL: jdbc:postgresql://host:port/database
SPRING_DATASOURCE_USERNAME: username
SPRING_DATASOURCE_PASSWORD: password
APP_JWT_SECRET: your-secret-key
APP_JWT_EXPIRATION_MS: 86400000
FILE_UPLOAD_DIR: /path/to/uploads

🧪 Testing

Run tests:

./gradlew test

Generate test coverage:

./gradlew jacocoTestReport

API Testing with Postman:

    Import docs/postman/collection.json into Postman

🔒 Security
🔁 Authentication Flow

    User logs in → /api/auth/login

    Receives JWT + refresh token

    JWT used in Authorization header

    Refresh with /api/auth/refreshtoken

🛡 Security Features

    BCrypt password hashing

    Role-based access control (RBAC)

    JWT validation

    CSRF protection

    Input sanitization and validation

🛠 Troubleshooting
Problem	Possible Fix
❌ Database errors	Ensure credentials in application-dev.yml are correct and PostgreSQL is running
🔒 JWT errors	Verify token expiration and secret key
📁 Upload issues	Ensure directory exists, writable, and within file limits
🤝 Contributing

    Fork the repo

    Create a new branch:

git checkout -b feature/my-feature

Commit your changes:

git commit -am "Add feature"

Push to GitHub:

    git push origin feature/my-feature

    Open a Pull Request

✏️ Code Guidelines

    Follow Google Java Style Guide

    Use meaningful variable and method names

    Add Javadoc for public APIs

    Include unit tests for new features

