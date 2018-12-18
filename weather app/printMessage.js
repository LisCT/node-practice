// to print msg to console

// Print out temp details
function printWeather(weather) {

    const message = `Current temperature in ${weather.name} is ${weather.main.temp}F`;
    console.log(message);

}
  

module.exports.message = printWeather;