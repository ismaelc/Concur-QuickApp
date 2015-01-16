# Concur Next Segment

Simple demo app that returns a Concur user's next upcoming segment in a trip/itinerary

![ConcurNextSegment](https://jfqcza.bn1301.livefilestore.com/y2pdXmTRjld1fu3GUSp--9OjpEpihErn3F3Xw2mcW3aFqJPQvfWMW6VcPOzmB__ErAjni5EwHjDs-iMh_ZXnPNrUS5MZFn0TmDFt7kdAeQZfiXjIBH_Kh454EvHyGsY4ZGMj8iQ4sQxcUQ8YZWIhs3U3Q/ConcurNextSegmentScreen.PNG?psid=1)

The app stores this upcoming segment object into the browser's [localStorage](http://www.html5rocks.com/en/features/storage) (security be damned). Another web app can then pick up this segment from localStorage and roll out a quick integration demo. For example - show [BestBuy Express stores](https://developer.bestbuy.com/documentation/stores-api) inside the airport that the user will be landing in. 

## Configuration

Modify [config.js](https://github.com/ismaelc/ConcurNextSegment/blob/master/config.js) and plug in a Concur access token (native flow) and Google Geocoding API key.  Please refer to the following links to generate these access tokens:

- [Concur access token](https://github.com/ismaelc/ConcurHackathon#token)
- [Google Geocoding API key](https://developers.google.com/maps/documentation/geocoding/)

For the app to return an upcoming segment, you need to have future trips inside Concur.  To see how to push trip/itineraries to Concur through the API, refer to this [page](https://github.com/ismaelc/ConcurHackathon#dummy) 

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
