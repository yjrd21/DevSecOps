# Currency Converter (React + Node) — DevSecOps Sandbox

A small currency converter app used to practice DevSecOps on a real codebase. It implements CI, containerization, SAST, and dependency security, with room to grow into DAST and CD.

# What’s inside
- Frontend: React + TypeScript + Vite + Vitest
- Backend: Node.js + Express (proxies ExchangeRate API)
- Infra: Docker & Docker Compose
- CI (GitHub Actions):
  - compose-ci.yml — builds images, boots the stack, runs basic smoke checks
  - docker-publish.yml — builds multi-arch images and publishes to GHCR (:main and :sha-…)
  - codeql.yml — SAST via GitHub CodeQL
  - dependabot.yml — SCA via Dependabot PRs

# Security & DevOps coverage
- SAST: CodeQL scans on PRs/pushes (and weekly cron).
- SCA: Dependabot keeps dependencies up to date
- Secrets management: Runtime env via Compose; build-time vars via GitHub Secrets (never committed). 
  `.dockerignore` prevents .env* from entering images.
- Containerization: Separate Dockerfiles for frontend & backend; reproducible builds.
- Artifact publishing: Images pushed to GitHub Container Registry (GHCR) for traceability (:sha-…).


# Coming soon 
- CD (staging VM): Pull :sha-… images and docker compose up -d on merge (gated by Environment approvals).
- DAST: OWASP ZAP active scan against the running Compose stack.
- Security monitoring: Ship logs to Splunk; explore SOAR playbooks.
 

## Running  Locally

### Dev mode: Frontend  and Backend 
```bash
cd currency-converter
npm install
npm run dev
# Frontend: http://localhost:5173
# Backend:  http://localhost:5001
```

### Tests (frontend/Vitest)
```bash
cd currency-converter
npm test
```


### Docker 
```bash
docker compose down --rmi all --volumes
docker compose build 
docker compose up 
# Frontend: http://localhost:5173
# Backend:  http://localhost:5001
```



## Acknowledgements  
This app is built upon feedback provided by technical interviewers. Without their generous inputs, this project would not have grown.  


