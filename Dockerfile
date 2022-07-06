FROM node:18.4.0-alpine3.15

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]