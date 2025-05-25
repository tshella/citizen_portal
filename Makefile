# Makefile for Citizen Portal Project

# Environment variables
ENV_FILE := .env
include $(ENV_FILE)
export $(shell sed 's/=.*//' $(ENV_FILE))

# Project variables
PROJECT_NAME := citizen-portal
BACKEND_DIR := backend
FRONTEND_DIR := frontend
DOCKER_COMPOSE := docker-compose -f docker-compose.yml
DOCKER_COMPOSE_PROD := docker-compose -f docker-compose.yml -f docker-compose.prod.yml

# Docker images
BACKEND_IMAGE := $(PROJECT_NAME)-backend
FRONTEND_IMAGE := $(PROJECT_NAME)-frontend

.PHONY: help
help: ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) }' $(MAKEFILE_LIST)

##@ Development

dev: ## Start development environment
	$(DOCKER_COMPOSE) up -d postgres
	@echo "Starting backend in dev mode..."
	cd $(BACKEND_DIR) && ./gradlew bootRun
	@echo "Starting frontend in dev mode..."
	cd $(FRONTEND_DIR) && npm start

dev-down: ## Stop development environment
	$(DOCKER_COMPOSE) down

backend-tests: ## Run backend tests
	cd $(BACKEND_DIR) && ./gradlew test

frontend-tests: ## Run frontend tests
	cd $(FRONTEND_DIR) && npm test

##@ Building

build-backend: ## Build backend Docker image
	$(DOCKER_COMPOSE) build backend

build-frontend: ## Build frontend Docker image
	$(DOCKER_COMPOSE) build frontend

build: build-backend build-frontend ## Build all Docker images

##@ Docker Compose

up: ## Start all services in detached mode
	$(DOCKER_COMPOSE) up -d

up-prod: ## Start production environment
	$(DOCKER_COMPOSE_PROD) up -d

down: ## Stop all services
	$(DOCKER_COMPOSE) down

logs: ## View container logs
	$(DOCKER_COMPOSE) logs -f

ps: ## List running containers
	$(DOCKER_COMPOSE) ps

##@ Database

db-migrate: ## Run database migrations
	cd $(BACKEND_DIR) && ./gradlew liquibaseUpdate

db-reset: ## Reset the database (DANGER: destroys data)
	$(DOCKER_COMPOSE) down -v
	$(DOCKER_COMPOSE) up -d postgres
	sleep 10  # Wait for PostgreSQL to start
	$(MAKE) db-migrate

##@ Production

deploy: build up-prod ## Build and deploy production environment

##@ Cleanup

clean: ## Remove all build artifacts
	cd $(BACKEND_DIR) && ./gradlew clean
	cd $(FRONTEND_DIR) && rm -rf dist node_modules

prune: ## Prune Docker system
	docker system prune -f

##@ Utilities

check-env: ## Check environment variables
	@echo "Current environment:"
	@echo "POSTGRES_USER: $(POSTGRES_USER)"
	@echo "POSTGRES_DB: $(POSTGRES_DB)"

generate-certs: ## Generate SSL certificates
	@mkdir -p ssl
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
		-keyout ssl/nginx-selfsigned.key \
		-out ssl/nginx-selfsigned.crt \
		-subj "/CN=localhost"