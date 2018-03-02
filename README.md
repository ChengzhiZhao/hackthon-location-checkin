# hackthon-location-checkin
Hackthon project for location checkin

Test Endpoint for calculating distance
POST /geo
curl -H "Content-Type: application/json" -X POST -d '{"data":{"locations":[{"latitude":"-73.984721","longitude":"40.725980"},{"latitude":"-73.995741","longitude":"40.725980"}]}}' http://localhost:8000/geo
