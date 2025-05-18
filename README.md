# E-Commerce Platform with CI/CD using GitHub Actions and AWS

## Overview

This project is a full-stack e-commerce platform featuring a Node.js/Express backend and a React frontend. The primary objective is to automate the CI/CD pipeline using GitHub Actions and deploy to AWS. It also includes Docker containerization and follows a professional software development workflow.

## Project Structure

```
📦ecommerce-platform
 ┣ 📂api           # Backend Node.js/Express application
 ┣ 📂webapp        # Frontend React application
 ┣ 📂.github/workflows # GitHub Actions workflows
 ┗ 📜README.md
```

---

## ✅ Features Implemented

### Backend (API)

* Developed with Node.js and Express
* Handles user accounts, product listings, and order management
* Includes unit tests with Jest
* Linting implemented using ESLint

### Frontend (Webapp)

* Developed with React
* Displays product listings
* Supports user login and order placement

### CI/CD Pipeline (GitHub Actions)

* Runs on pull request and push to `main` branch
* Installs dependencies
* Lints code with ESLint
* Runs unit tests
* Builds the project
* Builds Docker images for both backend and frontend
* Pushes Docker images to AWS ECR
* Deploys containers to AWS ECS using Fargate

### AWS Deployment

* Docker images are hosted on Amazon ECR
* Applications are deployed to Amazon ECS (Fargate)
* GitHub Secrets used to securely store AWS credentials and configuration

### Git Workflow

* Follows **feature branch workflow**:

  * All new features/fixes are developed on separate branches (e.g., `feature/login`, `fix/cart-bug`)
  * Pull requests are opened and reviewed before merging to `main`

---

## 📦 Tech Stack

* **Backend**: Node.js, Express, Jest, ESLint
* **Frontend**: React, Axios, ESLint
* **CI/CD**: GitHub Actions
* **Containerization**: Docker
* **Cloud**: AWS ECS, AWS ECR

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform
```

### 2. Backend Setup

```bash
cd api
npm install
npm run lint
npm run test
npm start
```

### 3. Frontend Setup

```bash
cd webapp
npm install
npm run lint
npm start
```

---

## 🚀 Deployment Setup

### Docker

Dockerfiles for both `api` and `webapp` are provided.

### GitHub Actions

CI/CD workflows are located in `.github/workflows/`:

* `api.yml` for backend
* `webapp.yml` for frontend

Each workflow performs:

* Code linting using ESLint
* Unit testing
* Docker build
* Push to AWS ECR
* Deploy to AWS ECS

### AWS Configuration

1. **Create an IAM user** with programmatic access (via CLI)
2. **Generate and save Access Key ID & Secret**
3. **Create ECR repositories** for both apps
4. **Set up ECS clusters and services** using Fargate
5. **Add GitHub Secrets**:

   * `AWS_ACCESS_KEY_ID`
   * `AWS_SECRET_ACCESS_KEY`
   * `AWS_REGION`
   * `ECR_REPOSITORY_URI`
   * Other environment-specific variables

---

## 🛠 Troubleshooting

| Issue                         | Solution                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| GitHub Actions not triggering | Ensure workflow files are in `.github/workflows/` and have proper syntax              |
| Missing AWS credentials       | Make sure `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are added in GitHub Secrets |
| Deployment fails              | Check ECS logs via AWS Console for runtime errors                                     |
| Docker build errors           | Verify Dockerfile syntax and base images                                              |

---

## 🧪 Code Quality & Linting

* ESLint is configured for both frontend and backend to maintain consistent coding styles.
* Run `npm run lint` in both directories.

---

## 📄 Future Improvement Areas

* Add end-to-end testing using Cypress or Playwright
* Integrate security checks (e.g., Dependabot, Snyk)
* Add monitoring and logging tools (e.g., CloudWatch, Sentry)
* Implement CD for static site via AWS S3 (optional)

---

## 📌 Feedback Summary Addressed

| Issue from Review                                  | Resolution                                                                                                        |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Lack of automated linting                          | Added ESLint to both frontend and backend with GitHub Actions integration                                         |
| Missing feature branch workflow                    | Now using feature branches for development and merging to `main` via pull requests                                |
| Deployment not matching instructor (ECS vs S3/EC2) | ECS used for advanced container orchestration; added note to optionally support S3 for static frontend deployment |
| Missing troubleshooting section                    | Added a dedicated troubleshooting guide in README                                                                 |

---

## 📘 License

This project is licensed under the MIT License.

---

## 👏 Acknowledgements

Thanks to the course instructors and reviewers for valuable feedback and guidance throughout the capstone project.
