FROM node:22-alpine3.22 

# Set the working directory
WORKDIR /app 

COPY package.json package-lock.json ./
COPY backend/package.json backend/


RUN npm ci --workspace backend --include-workspace-root=false

COPY backend/ ./
EXPOSE 5001 
CMD [ "node", "server.js" ]
