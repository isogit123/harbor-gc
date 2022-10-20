FROM node:16.18.0-alpine
ENV NODE_ENV production
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
WORKDIR /home/node/app
RUN apk add --no-cache chromium
COPY . .
RUN npm install
USER node
ENTRYPOINT ["node", "index.js"]