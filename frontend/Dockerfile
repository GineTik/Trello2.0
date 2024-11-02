# Stage 1: Install dependencies and build the Next.js application
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Production image
FROM node:18 AS runner

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
 
# Set environment to production
ENV NODE_ENV=production

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]