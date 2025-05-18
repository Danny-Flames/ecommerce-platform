# 🛒 E-Commerce Platform with CI/CD using GitHub Actions

This project is a **DevOps Capstone** focused on building and deploying an **e-commerce platform** using **GitHub Actions**, **Docker**, and **AWS**. It includes both a frontend and backend, with a complete CI/CD pipeline.

---

## 📁 Project Structure
ecommerce-platform/
│
├── api/ # Node.js/Express backend API
├── webapp/ # React frontend application
└── .github/
└── workflows/ # GitHub Actions CI/CD pipelines

---

## 🚀 Project Goals

- Build a full-stack e-commerce platform.
- Implement CI/CD using **GitHub Actions**.
- Containerize apps using **Docker**.
- Deploy to **Amazon Web Services (AWS)** using **ECS and ECR**.

---

## 🧱 Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Cloud Provider**: AWS (ECS, ECR, IAM)

---

## ✅ Task Breakdown

### 🔧 Task 1: Project Setup

- Created GitHub repo: `ecommerce-platform`
- Initialized folders: `api/` and `webapp/`

### 🤖 Task 2: GitHub Actions Initialized

- Created `.github/workflows/` folder
- Added CI/CD workflows for both frontend and backend

### 🔙 Task 3: Backend Setup

- Simple **Node.js + Express** API with endpoints:
  - `/products`
  - `/orders`
  - `/login`
- Included **unit tests** using Jest
- Added `Dockerfile` for containerization

### 🎨 Task 4: Frontend Setup

- **React + Vite** app
- Pages:
  - Product listing
  - Login
  - Order placement
- Axios used to connect with backend API
- Dockerized the app with a separate `Dockerfile`

### 🔁 Task 5: GitHub Actions for CI

Workflows do the following:
- Install dependencies
- Run tests
- Build the app
- (Later) Build Docker images

> Files:  
> - `.github/workflows/backend.yml`  
> - `.github/workflows/frontend.yml`

### 🐳 Task 6: Docker Integration

- Backend Dockerfile:
  ```dockerfile
  FROM node:18
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  CMD ["npm", "start"]


## Frontend Dockerfile:

    ```
        FROM node:18 as build
        WORKDIR /app
        COPY . .
        RUN npm install && npm run build

        FROM nginx:alpine
        COPY --from=build /app/dist /usr/share/nginx/html
    ```


## Task 7: Deploy to AWS (ECS/ECR)
1. Created IAM user github-deploy-user
Attached policies:
    - AmazonECS_FullAccess
    - AmazonEC2ContainerRegistryFullAccess

2. Generated Access Keys
Stored them in GitHub Secrets:
    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY

3. Amazon ECR and ECS
(a) Created ECR repositories:
    - ecommerce-backend
    - ecommerce-frontend

(b) ECS setup:
    - Created ECS Cluster
    - Created Task Definitions and Services
    - Used Fargate for serverless compute

## GitHub Secrets Used
Secret Name	                    Purpose
AWS_ACCESS_KEY_ID	        IAM user's access key ID
AWS_SECRET_ACCESS_KEY	    IAM user's secret access key


## GitHub Actions Workflow Summary
frontend.yml / backend.yml steps:
- Checkout code
- Set up Node.js
- Install dependencies
- Run tests
- Build app
- Authenticate with AWS ECR
- Build Docker image
- Push Docker image to ECR
- Deploy to ECS (via AWS CLI or ECS task update)


## Local Development
(a) Backend
cd api
npm install
npm run dev

(b) Frontend
cd webapp
npm install
npm run dev


## Build and Run with Docker
(a) Backend
cd api
docker build -t ecommerce-backend .
docker run -p 5000:5000 ecommerce-backend

(b) Frontend
cd webapp
docker build -t ecommerce-frontend .
docker run -p 3000:80 ecommerce-frontend


## CI/CD Flow Summary
On push to main, GitHub Actions:

- Runs tests
- Builds Docker image
- Pushes to AWS ECR
- Updates ECS service


## Conclusion
This project gives you real-world experience in building, containerizing, and deploying a full-stack application using GitHub Actions CI/CD pipelines and AWS services. 