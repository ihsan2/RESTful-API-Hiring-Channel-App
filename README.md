# Simple RESTful API Hiring Channel App
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.  

## Installation
### Clone
```
$ git clone https://github.com/tatasfachrul/simple-REST
$ cd simple-REST
$ npm install
```

### Create Environment Variable
```
$ cp .env.example .env
$ nano .env
```

```
SERVER_PORT = YOUR-PORT
WHITELIST = "YOUR-WHITELIST"

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"

SECRET_KEY = "YOUR-SECRET-KEY"
REQUEST_HEADERS = "YOUR-APP-HEADERS"
```
### Start Development Server
```
$ npm start
```

### License
----

[Beerware](https://en.wikipedia.org/wiki/Beerware "Beerware") © [Tatas](https://github.com/tatasfachrul "Tatas")

