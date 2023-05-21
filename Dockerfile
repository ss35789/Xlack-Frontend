FROM node:12-alpine

WORKDIR /Xlack_Frontend

COPY package*.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]

EXPOSE 3000
