FROM node:16-alpine

# Code folder inside Docker
RUN mkdir /code
WORKDIR /code


# Install deps before mounting volume to improve caching
COPY package*.json ./
RUN npm install

# No need to copy code, we are building a volume later
EXPOSE 1234
