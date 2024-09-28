FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm i -g serve

EXPOSE 9876

CMD ["serve", "-s", "dist"]