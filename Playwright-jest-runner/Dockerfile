FROM mcr.microsoft.com/playwright:focal

WORKDIR /usr/src/app

USER root

RUN npm install

RUN npm install playwright

RUN npm run test -- --runInBand

