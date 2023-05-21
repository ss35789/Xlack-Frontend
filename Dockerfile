FROM node:16-alpine

WORKDIR /Xlack_Frontend

COPY package.json ./

RUN apk update && apk add bash
RUN npm install --save --legacy-peer-deps

COPY ./ ./

RUN npm run build

EXPOSE 3000

CMD ["npm","run","serve"]
