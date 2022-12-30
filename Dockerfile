FROM node:16-alpine
WORKDIR /app

COPY package.json yarn.lock /app/
RUN NODE_ENV=development yarn

COPY . /app/

RUN NODE_ENV=production yarn razzle build \
    && NODE_ENV=production yarn

CMD yarn node build/server.js
