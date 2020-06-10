const request = require('request');

const weatherstackUrl = 'http://api.weatherstack.com/current?access_key=622d3a805903919444bc89c8870e3e3a&query=37.8267,-122.4233';

request({ url: weatherstackUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        const currentWeather = response.body.current;

        console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} out. It feels like ${currentWeather.feelslike} degrees`);
    }
});

const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGFtYmJiIiwiYSI6ImNrYjhqeHd0eDA0dmEyd3BobzZlbWNqNjMifQ.PS9G5mPvFPkt-k-pefF3qA&limit=1';

request({ url: mapboxUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!');
    } else if (!response.body.features.length) {
        console.log('Unable to find location. Try another search.');
    } else {
        const [ latitude, longitude ] = response.body.features[0].center;

        console.log(`${latitude},${longitude}`);
    }
});