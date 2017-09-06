#**New Horizon**



curl -H "Content-Type: application/json" -X POST -d '{ "title": "Kross Vento 7", "category": "road", "size": "M" }' localhost:3000/api/bikes

curl -H "Content-Type: application/json" -X POST -d '{ "title": "peugeout", "category": "mountain", "size": "XL" }' localhost:3000/api/bikes

curl localhost:3000/api/bikes

demonio -> mongod --dbpath /Users/catabuadescoll/mongo/db

// IMPORT BIKES JSON
mongoimport -d newHorizon -c bikes --jsonArray --file server/data/bikes.json

mongoimport -h ds123614.mlab.com:23614 -d newhorizon -c bikes -u admin -p admin --jsonArray --file server/data/bikes.json

### Add booking

```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b00edce3678ea4896bd4c3", "startDate": "1505042092000", "endDate": "1505906092000" }'
```


ObjectId("59b00edce3678ea4896bd4c3")