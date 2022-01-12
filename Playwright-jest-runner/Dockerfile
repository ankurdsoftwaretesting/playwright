FROM mcr.microsoft.com/playwright:focal

COPY Playwright-jest-runner .

RUN npm install

RUN npm install playwright

RUN npm run test -- --runInBand

