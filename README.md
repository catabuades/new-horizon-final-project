#**New Horizon**



curl -H "Content-Type: application/json" -X POST -d '{ "title": "Kross Vento 7", "category": "road", "size": "M" }' localhost:3000/api/bikes

curl -H "Content-Type: application/json" -X POST -d '{ "title": "peugeout", "category": "mountain", "size": "XL" }' localhost:3000/api/bikes

curl localhost:3000/api/bikes

demonio -> mongod --dbpath /Users/catabuadescoll/mongo/db

// IMPORT BIKES JSON
mongoimport -d newHorizon -c bikes --jsonArray --file server/data/bikes.json

mongoexport -d newHorizon -c books -o server/data/books.json

mongoimport -h ds123614.mlab.com:23614 -d newhorizon -c bikes -u admin -p admin --jsonArray --file server/data/bikes.json

### Add booking
Para importar-los todos
```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b128da35a24e8500e623ea,59b128da35a24e8500e623eb,59b128da35a24e8500e623ec,59b128da35a24e8500e623ed,59b128da35a24e8500e623ee,59b128da35a24e8500e623ef,59b128da35a24e8500e623f0,59b128da35a24e8500e623f1,59b128da35a24e8500e623f2,59b128da35a24e8500e623f3,59b128da35a24e8500e623f4,59b128da35a24e8500e623f5,59b128da35a24e8500e623f6,59b128da35a24e8500e623f7,59b128da35a24e8500e623f8,59b128da35a24e8500e623f9,59b128da35a24e8500e623fa,59b128da35a24e8500e623fb", "startDate": "2017-09-14", "endDate": "2017-09-17" }'
```

```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b128da35a24e8500e623eb", "startDate": "2017-09-07", "endDate": "2017-09-12" }'
```


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


59b128da35a24e8500e623ea,59b128da35a24e8500e623eb,59b128da35a24e8500e623ec,59b128da35a24e8500e623ed,59b128da35a24e8500e623ee,59b128da35a24e8500e623ef,59b128da35a24e8500e623f0,59b128da35a24e8500e623f1,59b128da35a24e8500e623f2,59b128da35a24e8500e623f3,59b128da35a24e8500e623f4,59b128da35a24e8500e623f5,59b128da35a24e8500e623f6,59b128da35a24e8500e623f7,59b128da35a24e8500e623f8,59b128da35a24e8500e623f9,59b128da35a24e8500e623fa,59b128da35a24e8500e623fb


