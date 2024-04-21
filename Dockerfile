# pull the official base image
FROM node:16.16.0-alpine3.16

#Making Directory
RUN mkdir /usr/lib/react-app
#Declaring env
ENV NODE_ENV development

#Setting up the work directory
WORKDIR /usr/lib/react-app

#Installing dependencies
COPY ./ /usr/lib/react-app

RUN npm install

RUN npm start build

CMD [ "npm", "run", "start" ]