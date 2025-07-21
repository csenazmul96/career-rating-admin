# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

#COPY .env .env

# Build the Next.js app
RUN npm run build

# Expose the port
EXPOSE 3000

CMD ["npm", "run" ,"start"]