FROM node:14-alpine
WORKDIR /server
ENV PATH /server/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "run", "start:dev"]
