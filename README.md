# Currency Converter App  

This project serves as an introduction to the field of DevSecOps, using a simple React + Node.js currency converter application as the base project to explore secure development practices.  


## Incoming Additions  

- **Application Security**
  - Dependency vulnerability checks using `npm audit`  
  - Automated dependency updates with GitHub Dependabot  
  - Secure secret management with environment variables  

- **Static Application Security Testing (SAST)**
  - GitHub Actions CodeQL integration for automated code scanning  
  - Semgrep scans against OWASP Top 10 rules  

- **Containerization**
  - Dockerizing the application for consistent builds and deployments  
  - Basic network configurations to understand port exposure and isolation  

- **Dynamic Application Security Testing (DAST)**
  - Security testing with OWASP ZAP against the running application  

- **Security Monitoring & Response**
  - SIEM integration with Splunk for log aggregation and monitoring  
  - Exploring SOAR concepts, including automated responses within containerized environments
 


## Highlights  
**Frontend**  
- React with TypeScript  
- React Router for navigation  
- React Hooks for state management  
- Reusable components  
- API calls to backend server  
- Sample test file for reusable components  
- **Key Principle**: Avoid side effects, ensure deterministic outcomes  

**Backend**  
- Basic Node.js + Express API  
- Calls [ExchangeRate API](https://www.exchangerate-api.com) using a private key to fetch currency data  

**Test Cases**  
- Basic reusable component tests using npm test runner  



## Running  

### Dev mode: Frontend (React App)  and Backend(Node.js + Express API )
```bash
cd currency-converter
npm install
npm run dev
```

### Dev mode: Test Cases (Reusable Components)
```bash
cd currency-converter
npm run test
```
Executes the test suite for reusable React components.

### Docker 
docker compose down --rmi all --volumes
docker compose build 
docker compose up 



## OWASP Top 10 Checklist

| OWASP Top 10 (2021) Category               | Notes                                   |
|--------------------------------------------|-----------------------------------------|
| A01: Broken Access Control                 | ❌                                       |
| A02: Cryptographic Failures                | ❌                                       |
| A03: Injection (SQL, XSS, etc.)            | ❌                                       |
| A04: Insecure Design                       | ❌                                       |
| A05: Security Misconfiguration             | ❌                                       |
| A06: Vulnerable and Outdated Components    | 0 vulnerabilities detected in npm audit |
| A07: Identification and Authentication Failures | ❌                                  |
| A08: Software and Data Integrity Failures  | ❌                                       |
| A09: Security Logging and Monitoring Failures | ❌                                   |
| A10: Server-Side Request Forgery (SSRF)    | ❌                                       |


## Acknowledgements  
This app is built upon feedback provided by technical interviewers. Without their generous inputs, this project would not have grown.  


