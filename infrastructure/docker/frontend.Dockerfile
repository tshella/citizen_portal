# Build stage
FROM node:18-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration=production

# Runtime stage with Nginx
FROM nginx:1.25-alpine

COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]