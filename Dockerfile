FROM node:12

WORKDIR /use/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "run", "serve:prod"]
