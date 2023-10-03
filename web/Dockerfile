FROM node:14.17.0-alpine

WORKDIR /vue/app



RUN set -x \
	&& chmod -R 777 /vue/app

COPY ./package-lock.json /vue/app/package-lock.json
COPY ./package.json /vue/app/package.json

RUN npm install

COPY . /vue/app/

EXPOSE 8080

CMD ["npm","run","serve"]