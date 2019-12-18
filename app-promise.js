const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode.js');
//node app.js --address='...' this is for making some help for config
const weather = require('./weather/weather.js');

const argv = yargs.options({
    a:{
        demand: true,
        alias: 'address',
        describe: 'address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

 //npm axios
 var encodedAddress = encodeURIComponent(argv.address);
 var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=LwnH7VAo0TcNwQyIddwCHaZ0r6TEPcRs&location=${encodedAddress}`;
 
 axios.get(geocodeUrl).then((response)=>{
    // if(response.data.info.statusCode !== '0'){
    //     throw new Error('unable to find that address');
    // }
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/31ba8383025b61e6a62aa753039dee45/${lat},${lng}`;
    console.log(`address = ${argv.address} `);
    return axios.get(weatherUrl);
 }).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels likse ${apparentTemp}`);
 }).catch((e)=>{
     if(e.code === 'ENOTFOUND'){
        console.log('unable to connect to API servers');
 }else{
     console.log(e.message);
 }
}); //make HTTP request then do sth (resolve or reject) you can return any other promise by axios to chain up anthoer request