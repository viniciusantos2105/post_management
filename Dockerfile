FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

ENV DB_HOST=db
ENV DB_PORT=3307 \
ENV DB_USERNAME=user
ENV DB_PASSWORD=password

CMD bash -c "\
  until echo 'SELECT 1' | mysql -h\"$DB_HOST\" -u\"$DB_USERNAME\" -p\"$DB_PASSWORD\" &> /dev/null; \
  do \
    echo 'MySQL is unavailable - sleeping'; \
    sleep 1; \
  done && \
  echo 'MySQL is up - sleeping for 10 seconds before starting application' && \
  sleep 10 && \
  node ./dist/index.js"