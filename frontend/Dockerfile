FROM node:22-alpine3.22 

# Set the working directory
WORKDIR /app 
COPY package.json package-lock.json ./
COPY frontend/package.json frontend/


RUN npm ci --workspace frontend --include-workspace-root=false

COPY frontend/ frontend/

# Build once: serve with vite preview in production mode
WORKDIR /app/frontend
RUN npm run build
EXPOSE 5173


# Default commands for Vite preview and network settings in 
CMD ["npm", "run", "preview", "--", "--host", "--port", "5173"]
