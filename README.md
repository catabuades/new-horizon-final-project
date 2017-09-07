#**New Horizon**



curl -H "Content-Type: application/json" -X POST -d '{ "title": "Kross Vento 7", "category": "road", "size": "M" }' localhost:3000/api/bikes

curl -H "Content-Type: application/json" -X POST -d '{ "title": "peugeout", "category": "mountain", "size": "XL" }' localhost:3000/api/bikes

curl localhost:3000/api/bikes

demonio -> mongod --dbpath /Users/catabuadescoll/mongo/db

// IMPORT BIKES JSON
mongoimport -d newHorizon -c bikes --jsonArray --file server/data/bikes.json

mongoimport -h ds123614.mlab.com:23614 -d newhorizon -c bikes -u admin -p admin --jsonArray --file server/data/bikes.json

### Add booking
Para importar-los todos
```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b0f98cb4be98dd6e626e3b,59b0f98cb4be98dd6e626e3c,59b0f98cb4be98dd6e626e3d,59b0f98cb4be98dd6e626e3e,59b0f98cb4be98dd6e626e3f,59b0f98cb4be98dd6e626e40,59b0f98cb4be98dd6e626e41,59b0f98cb4be98dd6e626e42,59b0f98cb4be98dd6e626e43,59b0f98cb4be98dd6e626e44,59b0f98cb4be98dd6e626e45,59b0f98cb4be98dd6e626e46,59b0f98cb4be98dd6e626e47,59b0f98cb4be98dd6e626e48,59b0f98cb4be98dd6e626e49,59b0f98cb4be98dd6e626e4a,59b0f98cb4be98dd6e626e4b,59b0f98cb4be98dd6e626e4c", "startDate": "1504252431000", "endDate": "1504338831000" }'
```

```
curl localhost:3000/api/book-bikes -H "Content-Type: application/json"  -X POST -d '{ "bikes": "59b0f98cb4be98dd6e626e3d", "startDate": "1506066831000", "endDate": "1506671631000" }'
```




59b0f98cb4be98dd6e626e3b Kross Vento
59b0f98cb4be98dd6e626e3c Trek Emonda

59b0f98cb4be98dd6e626e3d Orbea Onix
22/09 - 29/09 1506066831000 - 1506671631000

59b0f98cb4be98dd6e626e3e Tritan
59b0f98cb4be98dd6e626e3f Scott Speedster
59b0f98cb4be98dd6e626e40 Trek FX S5
59b0f98cb4be98dd6e626e41 Specialized Allez
59b0f98cb4be98dd6e626e42 Trek Zektor 3

59b0f98cb4be98dd6e626e43 Kross Pulso 2
13/09 - 18/09 1505289231000 - 1505721231000

59b0f98cb4be98dd6e626e44 Trek 7.3 FX
59b0f98cb4be98dd6e626e45 Scott Sportster
59b0f98cb4be98dd6e626e46 Kross MTB Level
59b0f98cb4be98dd6e626e47 Kross MTB Lea
59b0f98cb4be98dd6e626e48 Specialized Sirrus
59b0f98cb4be98dd6e626e49 Raleigh Straight
59b0f98cb4be98dd6e626e4a Tempo Centro
59b0f98cb4be98dd6e626e4b Tempo Vivo
59b0f98cb4be98dd6e626e4c E-Bike

1/09 - 2/09 1504252431000 - 1504338831000

