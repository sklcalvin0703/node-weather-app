const request = require('request');


var getWeather = (lat, lng, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/31ba8383025b61e6a62aa753039dee45/${lat},${lng}`,
        json: true
    }, 
    (error,response,body)=>{
        if (!error && response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature});
        }else{
            callback('unable to fetch weather');
        }
    });
};



module.exports = {
    getWeather
};