# JMESRange


Express middleware for using JMESPath expression as range headers to filter/transform JSON responses. Who needs GraphQL anyway?

## Function

Once registered, it will intercept outgoing applicaton/json responses, and check for a header like `range: jmesrange <some jmespath expression>`. 

If found, it will apply the jmespath expression to the outgoing object, allowing a client to shape the json response any way it wishes.

## Install

Install the package with npm:

```
$ npm install express-jmesrange
```

## Configure

Create middleware:

```
var app = express();
...
app.use(require('express-jmesrange'));
```


## Usage Example 

Taken from the example app.js, running on localhost:3000:

Curl the raw /data endpoint:

```
~/projects/jmesrange-express$ curl -i http://localhost:3000/data ; echo
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 145
ETag: W/"91-WKA9iMSbOx/Beoi0W4K6yDgXTY8"
Date: Fri, 26 Jun 2020 15:41:06 GMT
Connection: keep-alive

{"locations":[{"name":"Seattle","state":"WA"},{"name":"New York","state":"NY"},{"name":"Bellevue","state":"WA"},{"name":"Olympia","state":"WA"}]}

```

Now curl with a `range: jmesrange locations[?state == 'WA'].name` header:

```
~/projects/jmesrange-express$ curl -i -H "range: jmesrange locations[?state == 'WA'].name" http://localhost:3000/data ; echo
HTTP/1.1 206 Partial Content
X-Powered-By: Express
Content-Range: locations[?state == 'WA'].name
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-6zqJs/NfRXnU9r7g0UbvtjixflA"
Date: Fri, 26 Jun 2020 15:46:45 GMT
Connection: keep-alive

["Seattle","Bellevue","Olympia"]
```

The output has been munged by JMESRange!