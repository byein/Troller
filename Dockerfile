# 1. node 이미지 사용
FROM    node:16

# 2. 패키지 우선 복사
COPY    ./troller/package* /usr/src/app/
WORKDIR /usr/src/app

RUN npm install
RUN npm install -g npm@8.19.2
RUN npm install react@latest -g


# 3. 소스 복사
COPY ./troller /usr/src/app

# 4. WEB 서버 실행 (Listen 포트 정의)
EXPOSE 3000
CMD    npm start

