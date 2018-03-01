const geoCalculator=require('./calculate_distance.js')


module.exports = function(app, data) {
    app.post('/geo', (req, res) => {       
        location1=req.body.data.locations[0]
        location2=req.body.data.locations[1]
        dis=geoCalculator(location1,location2)
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ distance: dis }));
    
    });

};