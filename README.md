# DevSecOps CI/CD Pipeline with Integrated Security and Monitoring

This project demonstrates a complete **DevSecOps pipeline** built with a focus on security, automation, and observability. It includes continuous integration, security scanning, containerization, deployment to AWS, and full monitoring of both the application and the CI/CD pipeline.

---

## Project Highlights

- ✅ **CI/CD Pipeline:** Implemented using Jenkins
- 🐳 **Containerization:** Docker used for building and packaging the application
- 🔐 **Security Integration:**
  - **SonarQube** – Static code analysis and code quality checks
  - **OWASP Dependency-Check** – Detect vulnerable dependencies
  - **Trivy** – Vulnerability scanning of file systems and container images
- ☁️ **Deployment:** Application and Jenkins hosted on **AWS EC2**
- 📈 **Monitoring:**
  - **Prometheus** – Collects metrics from the application and Jenkins
  - **Grafana** – Visualizes system and pipeline metrics for real-time insights

---

## CI/CD Workflow Overview

1. **Code Push to Git**  
2. **Jenkins Triggers Pipeline**  
3. **Code Quality Checks (SonarQube)**  
4. **Dependency Scanning (OWASP)**  
5. **File System and Image Scans (Trivy)**  
6. **Docker Build & Push**  
7. **Deployment to AWS EC2**  
8. **Prometheus + Grafana Monitoring**

---

## Monitoring Setup

- **Prometheus** scrapes metrics from:
  - Application endpoints
  - Jenkins server
- **Grafana** displays:
  - Application health metrics
  - CI/CD pipeline metrics (build time, failures, etc.)

---

## Prerequisites

- Docker & Docker Compose
- Jenkins installed
- AWS EC2 instance with ports open for:
  - Jenkins (8080)
  - SonarQube (9000)
  - Prometheus (9090)
  - Grafana (3000)
- Git & basic shell scripting knowledge

---

## Contributers
- [Zohaib Saqib](https://www.linkedin.com/in/muhammadzohaibsaqib/)
- [Hassan Gatta](https://www.linkedin.com/in/hassaan-gatta-047865257/)
