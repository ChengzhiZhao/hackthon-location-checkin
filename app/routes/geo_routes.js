const geoCalculator=require('./calculate_distance.js')
const request=require('request')

module.exports = function(app, data) {
    app.post('/geo', (req, res) => {       
        location1=req.body.data.locations[0]
        location2=req.body.data.locations[1]
        dis=geoCalculator(location1,location2)
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ distance: dis }));
    
    });

    app.get('/notify/:organizer/:attendee',(req,res)=>{
        const organizer = req.params.organizer;
        const attendee =  req.params.attendee;
        const token=process.env.TOKEN;
        request.post('https://slack.com/api/chat.postMessage').form({'token':token,'channel':'@'+organizer,'text':attendee+' is Arriving Now!'})
        res.sendStatus(200)
    }); 

};