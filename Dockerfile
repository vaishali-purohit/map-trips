FROM node:16.10.0-alpine3.14 AS development

ENV NODE_ENV development

# Only include the files that are necessary for the application, always double check
# the .dockerignore file prior to running docker build
WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

# Trigger the run commands
RUN yarn install
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]
