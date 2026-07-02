# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files first for caching
COPY sipcalc-pro/package*.json ./sipcalc-pro/
WORKDIR /app/sipcalc-pro
RUN npm ci

# Copy the rest of the files and build
WORKDIR /app
COPY sipcalc-pro/ ./sipcalc-pro/
WORKDIR /app/sipcalc-pro
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/sipcalc-pro/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
