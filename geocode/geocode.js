const request = require('request');



var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
//make request
request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=LwnH7VAo0TcNwQyIddwCHaZ0r6TEPcRs&location=${encodedAddress}`,
    json: true
}, (error, response, body)=>{
    if(error){
        callback('unable to connect google servers');
    }else if (body.statuscode === 'ZERO_RESULTS'){
        callback('Unable to find that address');
    }else if(body.info.statuscode == 0){
        callback(undefined, {
            address: body.results[0].locations[0].street,
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng
        });
    //console.log(JSON.stringify(response,undefined,2)); //third arguemnt -> format the JSON, object to JSON string which ready to be sent to a server
    }

});
};


module.exports = {
    geocodeAddress
};
