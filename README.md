[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) 
[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)]
[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/)
[![PugJS](https://github.com/MarioTerron/logo-images/blob/master/logos/pug.png)](http://www.pugjs.org/) 
[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)  
[![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/)
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)

# [New Horizon](https://new-horizon-final-project.herokuapp.com/)

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

---

### To instal dependencies:

```
$ npm install 
$ bower install
```
---

### To run the server:

```
$ npm start
```
---

### To run in dev mode:

```
$npm run dev
```
---

## API

The server part has multiple **API endpoints** using several routes:

- `/api` -> Serves the internal data of the users and players.

---

## Built with:

- **Front-end**
    - bower: 1.8.0
    - font-awesome: 4.7.0
    - pug: 2.0.0-rc.3

- **Back-end**
    - body-parser: 1.17.2
    - cookie-session: 1.3.1
    - express: 4.15.4
    - lodash: 4.17.4
    - moment: 2.18.1
    - mongoose: 4.11.9
    - strftime: 0.10.0
    

---

## Author

[Catalina Buades Coll](https://github.com/catabuades)

---

## Demon
mongod --dbpath /Users/catabuadescoll/mongo/db


## Add Bikes
```
curl -H "Content-Type: application/json" -X POST -d '{ "title": "Kross Vento 7", "category": "road", "size": "M" }' localhost:3000/api/bikes

curl -H "Content-Type: application/json" -X POST -d '{ "title": "peugeout", "category": "mountain", "size": "XL" }' localhost:3000/api/bikes

curl localhost:3000/api/bikes
```
### Import Bikes JSON
mongoimport -d newHorizon -c bikes --jsonArray --file server/data/bikes.json

### Import Bikes mLAB
mongoimport -h ds123614.mlab.com:23614 -d newhorizon -c bikes -u admin -p admin --jsonArray --file server/data/bikes.json

## Export JSON
mongoexport -d newHorizon -c books -o server/data/books.json
mongoexport -d newHorizon -c bikes -o server/data/bikes.json

## Add booking
Add booking all bikes
```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b128da35a24e8500e623ea,59b128da35a24e8500e623eb,59b128da35a24e8500e623ec,59b128da35a24e8500e623ed,59b128da35a24e8500e623ee,59b128da35a24e8500e623ef,59b128da35a24e8500e623f0,59b128da35a24e8500e623f1,59b128da35a24e8500e623f2,59b128da35a24e8500e623f3,59b128da35a24e8500e623f4,59b128da35a24e8500e623f5,59b128da35a24e8500e623f6,59b128da35a24e8500e623f7,59b128da35a24e8500e623f8,59b128da35a24e8500e623f9,59b128da35a24e8500e623fa,59b128da35a24e8500e623fb", "startDate": "2017-09-14", "endDate": "2017-09-17" }'
```
Add booking Tritan
```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b128da35a24e8500e623eb", "startDate": "2017-09-07", "endDate": "2017-09-12" }'
```
Add booking mountain bikes Kross MTB Level and Kross MTB Lea
```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b128da35a24e8500e623f5,59b128da35a24e8500e623f6", "startDate": "2017-09-30", "endDate": "2017-10-07" }'
```

### Bike ID's
ObjectId("59b128da35a24e8500e623ea") Trek Emonda
ObjectId("59b128da35a24e8500e623eb") Tritan
7-12/09
ObjectId("59b128da35a24e8500e623ec") Orbea Onix
ObjectId("59b128da35a24e8500e623ed") Kross Vento
ObjectId("59b128da35a24e8500e623ee") Trek Fx S5
ObjectId("59b128da35a24e8500e623ef") Specialized Allez
ObjectId("59b128da35a24e8500e623f0") Scott Speedster
ObjectId("59b128da35a24e8500e623f1") Trek Zektor 3
ObjectId("59b128da35a24e8500e623f2") Kross Pulso 2
ObjectId("59b128da35a24e8500e623f3") Trek 7.3 FX
ObjectId("59b128da35a24e8500e623f4") Scott Sportster
ObjectId("59b128da35a24e8500e623f5") Kross MTB Level
ObjectId("59b128da35a24e8500e623f6") Kross MTB Lea
ObjectId("59b128da35a24e8500e623f7") Raleigh Straight
ObjectId("59b128da35a24e8500e623f8") Specialized Sirrus
ObjectId("59b128da35a24e8500e623f9") Tempo Centro
ObjectId("59b128da35a24e8500e623fa") Tempo Vivo
ObjectId("59b128da35a24e8500e623fb") E-Bike


