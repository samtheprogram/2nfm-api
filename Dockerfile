FROM node

RUN git clone https://github.com/samtheprogram/2nfm-api \
    && cd 2nfm-api \
    && npm install

CMD (cd 2nfm-api && npm start)

EXPOSE 9001
