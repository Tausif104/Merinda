FROM ubuntu:18.04
# replace shell with bash so we can source files
# SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Update the repository sources list
RUN apt-get update -y --fix-missing
RUN apt-get install -y

RUN apt-get install -y curl make g++ automake autoconf libtool nasm libjpeg-turbo8-dev zlib1g-dev

# Install NodeJS and packages
ENV NODE_VERSION 16.x
RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | bash
RUN apt-get install nodejs -y
RUN apt-get install -y
RUN npm install -g pnpm

# Transfer project
COPY . /app
WORKDIR /app

# Build project
RUN pnpm install
RUN pnpm codegen:prod
RUN pnpm build:ssr
# RUN pnpm build
# RUN pnpm lint
# RUN pnpm test

EXPOSE 3000
WORKDIR /app

CMD ["node", "dist/blog/server/main.js"]