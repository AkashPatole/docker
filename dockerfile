FROM node:18
WORKDIR /app
COPY pakage.json /app
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 9000