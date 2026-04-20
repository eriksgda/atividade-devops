# Etapa 1: build da aplicação
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV VITE_BASE=/
RUN npm run build

# Etapa 2: servir com Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]