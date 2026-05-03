FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set bin-links true
RUN npm install --include=dev --legacy-peer-deps

RUN ls -la
RUN ls -la node_modules || true
RUN find node_modules -maxdepth 3 -name vite -type f || true
RUN npm list vite || true

COPY . .

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]