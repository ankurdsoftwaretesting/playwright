FROM mcr.microsoft.com/playwright:focal

WORKDIR /usr/src/app

USER root

COPY ./Playwright-jest-runner .

RUN npm install

RUN npm install playwright

CMD ["bash", "-c", "npm run test -- --runInBand"]

