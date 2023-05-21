FROM node:16-alpine

WORKDIR /Xlack_Frontend

COPY package*.json ./

RUN npm install -g serve
RUN mkdir ./build
COPY ./build ./build

ENTRYPOINT ["serve", "-s", "build"]

EXPOSE 3000
