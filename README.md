project rate exchange   
implement with node v13   
how to start project   
1. npm install "OR" yarn   
2. npm start "OR" yarn start

call api exchange with curl   
```
$ curl --location --request POST 'localhost:8080/exchange' \
--header 'Content-Type: application/json' \
--data-raw '{
	"fromShortName": "USD",
	"toShortName": "THB",
	"amount": 10
}'
$ curl --location --request POST 'localhost:8080/exchange' \
--header 'Content-Type: application/json' \
--data-raw '{
	"fromShortName": "EUR",
	"toShortName": "JPY",
	"amount": 10
}'
```

call api get currencies with curl   
```
$ curl --location --request GET 'localhost:8080/currencies'
```