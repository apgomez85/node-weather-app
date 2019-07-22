const request = require('request');

const forecast = (latitude, longitude, callback) => {
  url = `https://api.darksky.net/forecast/6afee05939104e79d18a8b0f8353cb3f/${latitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined);
    } else if (body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ` It is currently ${body.currently.temperature} degrees. There is a ${
            body.currently.precipProbability
          }% chance of precipitation. Temperatures reaching as low as ${
            body.daily.data[0].temperatureLow
          } and up to ${body.daily.data[0].temperatureHigh} degrees.`
      );
    }
  });
};

module.exports = forecast;
