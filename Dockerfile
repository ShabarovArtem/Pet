FROM node:22

WORKDIR /app/

COPY package.json ./
COPY tsconfig.json ./
COPY src/ ./src/

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]