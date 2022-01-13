FROM mcr.microsoft.com/playwright:focal

WORKDIR /usr/src/app

USER root

COPY ./Playwright-jest-runner .

RUN npm install

RUN npm install playwright

RUN npm run test -- --runInBand

CMD ["/bin/bash", "npm", "run", "test", "--", " ", "--runInBand"]
