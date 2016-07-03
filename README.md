# Todo APIs

### Requirements
1. nodejs and npm
2. bower

### How it work
1. npm install
2. bower install
3. npm start

### Methods
1. GET
```curl localhost:8080/api/todos```

2. POST
```curl -H "Content-Type: application/json" -X POST -d '{"text":"do something"}' http://localhost:8080/api/todos```

3. DELETE
```curl -X DELETE localhost:8080/api/todos/:id```
