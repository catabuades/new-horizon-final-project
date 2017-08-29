curl -H "Content-Type: application/json" -X POST -d '{ "title": "bike", "category": "road", "size": "L" }' localhost:3000/api/bikes

curl -H "Content-Type: application/json" -X POST -d '{ "title": "peugeout", "category": "mountain", "size": "XL" }' localhost:3000/api/bikes

curl localhost:3000/api/bikes