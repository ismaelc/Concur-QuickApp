var config = {};

// Register for a Concur access token at http://developer.concur.com/
config.concur = {};
//config.concur.accessToken = "wqlxR7kKWpdsW3T5vf27c3TkAN4=";
config.concur.accessToken = process.env.CONCURTOKEN;

// Generate Google key as instructed in this page - https://developers.google.com/maps/documentation/geocoding/
config.google = {};
//config.concur.apiKey = "AIzaSyBUJxsb25_UK9cXIAWdNdTVtjlG4vtU0to";
config.concur.apiKey = process.env.GOOGLETOKEN;

module.exports = config;