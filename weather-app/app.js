const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const inputCity = process.argv[2];

if (!inputCity) {
    console.log('Please provide an address');
} else {
    geocode(inputCity, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error);
        } 
    
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return console.log(error);
            } 
    
            console.log(location);
            console.log(data);
        });
    });
}