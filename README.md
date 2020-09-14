
## Express Server

Determine `PORT` outside for convenience.
```javascript
const PORT = process.env.PORT
```


## Transport Layer LB

Do two server:
```bash
PORT=1234 node app.js
PORT=5678 node app.js
```

Apply haproxy  config.
```bash
haproxy -f tcp.cfg
```

Play it!
```bash 
curl localhost
```

## Application Layer LB

Build two servers for each service.
```bash
PORT=1111 node my-first-service.js
PORT=2222 node my-first-service.js

PORT=3333 node my-second-service.js
PORT=4444 node my-second-service.js
```


```bash
haproxy -f http.cfg
```

```bash 
# do it a few time and see the difference
curl localhost:9999/first-service 
curl localhost:9999/second-service 
```
