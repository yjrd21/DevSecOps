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

### Frontend (React App)  
```bash
cd currency-converter
npm install
npm run dev
```
Runs the React + TypeScript frontend on the local development server.

### Backend (Node.js + Express API)
```bash
cd currency-converter/backend
npm install
npx nodemon server.js
```
Starts the backend server that fetches currency data from the ExchangeRate API.

### Test Cases (Reusable Components)
```bash
cd currency-converter
npm run test
```
Executes the test suite for reusable React components.





## Acknowledgements  
This app is built upon feedback provided by technical interviewers. Without their generous inputs, this project would not have grown.  


