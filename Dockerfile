FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
