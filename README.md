<h1 align="center">Simple RESTful API Hiring Channel App</h1>
<p align="center">
  <img width="250" src="./public/node.png"/>
  <img width="250" src="./public/express.png"/>
</p>

## Table of Contents

- [Built With](#built-with)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Create Environment Variable](#create-environment-variable)
- [Contact](#contact)
- [Contributors](#contributors)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.13.3.0-green.svg?style=rounded-square)](https://nodejs.org/)

## Introduction

<b>Hiring Channel App</b> is a feature that allows Engineers and Company/Employers to do communicate for looking/hiring jobs. This project for handle backend only. Built using ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Requirements

1. npm
2. <a href="https://www.getpostman.com/">Postman</a>
3. Web Server (ex. localhost)

## Usage for development

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#create-environment-variable)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name db_hiring_channel_app, and Import file [db_hiring_channel_app.sql](db_hiring_channel_app.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3000/engineers)
8. You can see all the end point in routes folder

## Create Environment Variable

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

## Contact

If you want to contact me you can reach me at <nihsan727@gmail.com>.

Copyright © 2020 by Nur Ihsan

## Contributors

<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/ihsan2">
          <img width="100" src="./public/ihsan.jpg" alt="Nur Ihsan"><br/>
          <sub><b>Nur Ihsan</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>
