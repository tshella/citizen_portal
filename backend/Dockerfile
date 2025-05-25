# Stage 1: Build the application
FROM eclipse-temurin:17-jdk-jammy as builder

WORKDIR /app

# Copy gradle files first to leverage Docker cache
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .

# Download dependencies
RUN ./gradlew dependencies

# Copy source code
COPY src src

# Build the application (skip tests for faster build)
RUN ./gradlew build -x test

# Stage 2: Create the runtime image
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Copy the built artifact from the builder image
COPY --from=builder /app/build/libs/citizenportal-*.jar app.jar

# Create a non-root user and switch to it
RUN groupadd -r spring && useradd -r -g spring spring \
    && chown -R spring:spring /app
USER spring

# Set timezone (optional)
ENV TZ=America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:8080/api/actuator/health || exit 1

# Expose port
EXPOSE 8080

# Entry point with JVM options optimized for containers
ENTRYPOINT ["java", "-jar", \
            "-Djava.security.egd=file:/dev/./urandom", \
            "-Dspring.profiles.active=prod", \
            "-XX:+UseContainerSupport", \
            "-XX:MaxRAMPercentage=75.0", \
            "-XX:+HeapDumpOnOutOfMemoryError", \
            "-XX:HeapDumpPath=/tmp", \
            "app.jar"]