FROM mcr.microsoft.com/playwright:focal

USER root

RUN npm install

RUN npm install playwright

RUN npm run test -- --runInBand

