const geolib=require('geolib')

module.exports=function(location1,location2){
    return geolib.getDistance(
        location1,
        location2,
        10,2
    );
     
}
