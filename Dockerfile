FROM mongo:4.1

WORKDIR C:/Users/user/Desktop/connectDBapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
