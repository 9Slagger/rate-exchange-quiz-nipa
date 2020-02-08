project rate exchange   
implement with node v13   
how to start project   
  
1. open terminal   
2. cd rate-exchange-quiz-nipa/backend   
3. npm install "OR" yarn   
4. npm start "OR" yarn start   
5. new tab terminal   
6. cd rate-exchange-quiz-nipa/frontend   
7. npm install "OR" yarn   
8. npm start "OR" yarn start   
9. open browser http://localhost:8080
  
call api exchange with curl   
```
$ curl --location --request POST 'localhost:8081/exchange' \
--header 'Content-Type: application/json' \
--data-raw '{
	"fromShortName": "USD",
	"toShortName": "THB",
	"amount": 10
}'
$ curl --location --request POST 'localhost:8081/exchange' \
--header 'Content-Type: application/json' \
--data-raw '{
	"fromShortName": "EUR",
	"toShortName": "JPY",
	"amount": 10
}'
```

call api get currencies with curl   
```
$ curl --location --request GET 'localhost:8081/currencies'
```