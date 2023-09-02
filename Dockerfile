# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Next.js app to the working directory
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose port 5000
EXPOSE 5000

# Start the Next.js app
CMD ["npm", "start"]
