🚀 Citizen Service Portal

    Enable residents to access a wide range of government/public services online — from applications to payments to documents.

Author: Manaka Anthony Raphasha

🌐 Frontend – Angular Client

Modern Angular-based interface for seamless citizen-government service interactions.
🛠️ Technical Stack

    Framework: Angular 16

    UI Library: Angular Material 15

    Forms: Reactive Forms

    HTTP: Angular HttpClient

    State Management: RxJS + Service Architecture

    i18n: ngx-translate

    Build: Angular CLI

📂 Project Structure

frontend/
├── src/
│   ├── app/
│   │   ├── core/                # Auth, guards, interceptors
│   │   ├── modules/             # Feature modules
│   │   │   ├── admin/           
│   │   │   ├── applications/    
│   │   │   ├── payments/        
│   │   │   └── services/        
│   │   ├── shared/              # UI components & utilities
│   │   └── styles/              # Global SCSS/CSS
│   ├── assets/                  # Logos, i18n, etc.
│   └── environments/            # Environment configs
├── angular.json
└── package.json

✨ Features

    🛡️ Authentication & Security

        JWT-based sessions

        Refresh tokens

        Role-based route guards

        Password strength validation

        CSRF/XSS protection

        Secure headers and CSP

    📋 Service Catalog

        Filter by category

        View requirements

        Interactive wizards

    📬 Application Dashboard

        Status tracking

        Upload documents

        PDF receipt generation

    💳 Integrated Payments

        Mock payment gateway

        Receipts & transaction logs

    👨‍💻 Admin Console

        User management

        Service configs

        Application oversight

        Analytics dashboards

    📱 Responsive Design

        Mobile-first layouts

        Accessibility (WCAG)

        Print-friendly styles

🧪 Testing

ng test           # Unit Tests
ng e2e            # End-to-End
ng lint           # Linting

▶️ Local Setup

git clone https://github.com/your-repo/citizen-portal.git
cd citizen-portal/frontend
npm install

cp src/environments/environment.sample.ts src/environments/environment.ts
# Edit environment.ts to match your backend API
ng serve

Access at: http://localhost:4200
🐳 Docker Deployment

docker build -t citizen-portal-frontend .
docker run -p 80:80 citizen-portal-frontend

🏛️ Backend – Spring Boot API

Robust backend for secure digital service delivery.

Java
Spring Boot
License
Build
🧰 Stack

    Language: Java 17

    Framework: Spring Boot 3.2

    Database: PostgreSQL 15

    Security: JWT + OAuth2 + BCrypt

    PDF: iText

    Build Tool: Gradle (Groovy DSL)

📁 Project Structure

backend/
├── src/main/java/com/example/citizenportal/
│   ├── admin/               # Admin controllers/services
│   ├── applications/        # Citizen applications logic
│   ├── config/              # Spring configuration
│   ├── controller/          # REST endpoints
│   ├── dto/                 # Request/response models
│   ├── exception/           # Global error handling
│   ├── model/               # JPA entities
│   ├── repository/          # Spring Data JPA interfaces
│   ├── security/            # JWT, OAuth2, password config
│   ├── service/             # Business logic
│   ├── services/            # Public services catalog
│   └── CitizenportalApplication.java
├── src/main/resources/
│   ├── application.yml
│   └── templates/
└── build.gradle

📚 API Endpoints
<details> <summary>🔐 Authentication</summary>
Endpoint	Method	Description
/api/auth/login	POST	Login with credentials
/api/auth/register	POST	Register new citizen
/api/auth/refreshtoken	POST	Get new JWT token
</details> <details> <summary>🧾 Services</summary>
Endpoint	Method	Description
/api/services	GET	List all services
/api/services/{id}	GET	Get service details
/api/services/category/{id}	GET	Services by category
</details> <details> <summary>📄 Applications</summary>
Endpoint	Method	Description
/api/applications	POST	Submit new application
/api/applications/{id}	GET	Get application details
</details> <details> <summary>🛠 Admin</summary>
Endpoint	Method	Description	Role
/api/admin/users	GET	List all users	ROLE_ADMIN
/api/admin/users/{id}/roles	PUT	Assign roles	ROLE_ADMIN
/api/admin/applications	GET	List applications	ROLE_ADMIN
/api/admin/applications/{id}/status	PUT	Update application status	ROLE_ADMIN
</details>
⚙️ Local Development
✅ Prerequisites

    Java 17

    PostgreSQL 15

    Gradle 7.6+

    Docker (optional)

🛠 Setup

git clone https://github.com/your-repo/citizen-portal.git
cd citizen-portal/backend

createdb citizen_portal

cp src/main/resources/application-sample.yml src/main/resources/application-dev.yml
# Edit with your DB config
./gradlew bootRun

Access API at: http://localhost:8080
🚀 Deployment
🐳 Docker

docker build -t citizen-portal-backend .
docker-compose up -d

🔐 Production Config

Set in application-prod.yml or as environment variables:

SPRING_DATASOURCE_URL=jdbc:postgresql://host:port/db
SPRING_DATASOURCE_USERNAME=youruser
SPRING_DATASOURCE_PASSWORD=yourpass
APP_JWT_SECRET=secretkey
APP_JWT_EXPIRATION_MS=86400000
FILE_UPLOAD_DIR=/var/lib/citizenportal/uploads

🧪 Backend Testing

./gradlew test                # Unit tests
./gradlew jacocoTestReport    # Coverage

Postman:

Import docs/postman/collection.json into Postman

🔒 Security Overview

    🔑 JWT + refresh token auth

    🔒 BCrypt password hashing

    ✅ Input validation & sanitation

    🔐 RBAC (admin vs citizen)

    🚫 CSRF/XSS protection

    🧾 Secure file uploads (path, MIME, size)

🤝 Contributing

    Fork the repository

    Create a new branch
    git checkout -b feature/my-feature

    Commit your changes
    git commit -am "Add feature"

    Push your branch
    git push origin feature/my-feature

    Open a Pull Request

🧭 Guidelines

    Follow Angular & Java style guides

    Keep tests above 80% coverage

    Write clear documentation/comments

    Use meaningful commit messages

