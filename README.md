project rate exchange   
implement with node v13   
how to start project   
1. npm install "OR" yarn   
2. npm start "OR" yarn start

call api exchange with curl   
```
$ curl --header "Content-Type: application/json" --request POST --data '{"fromShortName": "USD", "toShortName": "THB", "amount": 10}' http://localhost:8080/exchange
```

call api get currencies with curl   
```
$ curl  --request GET http://localhost:8080/currencies
```