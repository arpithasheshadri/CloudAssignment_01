# CloudAssignment_01
### Database Health Check API with /healthz endpoint

Required Commands:

1. ```npm i```
2. ```node index.js```
3. curl commands:

   i) ```curl -vvvv http://localhost:4000/healthz -X GET```

   ii) ```curl -vvvv http://localhost:4000/healthz -X POST```

   iii) ```curl -vvvv http://localhost:4000/healthz -X GET -d {"k1":"v1"}```

   iv) ```curl -vvvv "http://localhost:4000/healthz?param=val" -X GET```

4. Command to start/stop postgresql - ```brew services start postgresql``` and ```brew services stop postgresql```
   
