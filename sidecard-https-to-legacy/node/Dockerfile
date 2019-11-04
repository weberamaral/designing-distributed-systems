FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
ENV PORT 8080
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["npm", "start"]