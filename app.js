const yargs = require('yargs');

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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    //will be executed after the request come back
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results,undefined,2));
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`Its currently ${weatherResults.temparature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});






