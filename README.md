# Simple RESTful API Hiring Channel App
![](https://img.shields.io/badge/Dependencies-Express-green.svg)


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/)
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.  

## Installation
### Clone
```
$ git clone https://github.com/ihsan2/RESTful-API-Hiring-Channel-App
$ cd RESTful-API-Hiring-Channel-App
$ npm install
```

### Create Environment Variable
```
$ cp .env.example .env
$ nano .env
```

```
# Set port
PORT= YOUR-PORT
# Set database connection information
DB_HOST='YOUR DB HOST'
DB_USER='YOUR DB USER'
DB_PASS='YOUR DB PASSWORD'
DB_NAME='YOUR DB NAME'
# Set JWT Secret
JWT_SECRET= YOUR-SECRET-KEY
```
### Start Development Server
```
$ npm start
```

