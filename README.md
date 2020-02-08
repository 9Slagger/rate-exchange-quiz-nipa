project rate exchange   
implement with node v13 and vue.js  
how to start project   
  
open terminal   
```
$ cd rate-exchange-quiz-nipa/backend
```
```
$ npm install "OR" yarn
```
```
$ npm start "OR" yarn start
```
new tab terminal   
```
$ cd rate-exchange-quiz-nipa/frontend
```
```
$ npm install "OR" yarn
```
```
$ npm start "OR" yarn start
```
open browser http://localhost:8080
  
call api get currencies with curl   
```
$ curl --location --request GET 'localhost:8081/currencies'
```
  
call api exchange with curl   
```
$ curl --location --request POST 'localhost:8081/exchange' \
--header 'Content-Type: application/json' \
--data-raw '{
	"fromShortName": "USD",
	"toShortName": "THB",
	"amount": 1
}'
$ curl --location --request POST 'localhost:8081/exchange' \
--header 'Content-Type: application/json' \
--data-raw '{
	"fromShortName": "EUR",
	"toShortName": "JPY",
	"amount": 5
}'
```
