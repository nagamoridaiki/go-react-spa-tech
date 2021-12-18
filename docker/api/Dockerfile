FROM golang:1.14

ENV GO111MODULE=on

WORKDIR /go/src/api

COPY goapp/go.mod goapp/go.sum ./
RUN go mod download

COPY goapp/ .
RUN go build .

RUN go get github.com/pilu/fresh

EXPOSE 8080

CMD ["fresh"]
