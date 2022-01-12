FROM mcr.microsoft.com/playwright:focal

WORKDIR /usr/src/app

USER root

COPY ./playwright-e2e/Playwright-jest-runner .

RUN npm install

RUN npm install playwright

RUN npm run test -- --runInBand

