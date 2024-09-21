# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to install dependencies
# COPY package*.json ./
# COPY package.json /usr/src/app
COPY ./package.json /usr/src/app
COPY ./package-lock.json /usr/src/app
RUN apk add --no-cache git

# Install dependencies
RUN npm install

# copy codebase to docker codebase
# ADD . /usr/src/app

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Define the command to start the backend
CMD ["node", "server.js"]
