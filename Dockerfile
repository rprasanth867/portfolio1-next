FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ 'npm', 'run', 'dev' ]