FROM node:18-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
