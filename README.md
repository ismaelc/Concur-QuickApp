# Concur QuickApp

Allows for quick Concur prototyping by returning segments of a user's itinerary

![ConcurNextSegment](https://jfqcza.bn1301.livefilestore.com/y2pHWRM9R5Nj5PIYUcPZH0ooAYWFIWx_vbqCmz78DpNy_HOe2LIdBVuytwQVuc3wKaqyqPpzw3GmxiLzRF59h16M7ATIxcx-xkB2M15TZ8fnlDlpHBjvra9QZVvDx0o9U5VUFZI3QbwoJk9Ecks1z86Rw/ConcurMe2.PNG?psid=1)

The app stores this upcoming segment object into the browser's [localStorage](http://www.html5rocks.com/en/features/storage) **(Note: Security was not top of mind for this demo app)**. Another web app can then independently pick up this segment from localStorage and roll out a quick integration demo. For example - show [BestBuy Express stores](https://developer.bestbuy.com/documentation/stores-api) inside the airport that the user will be landing in. 

Check out a **live demo** [here](https://radiant-springs-1767.herokuapp.com/).

## Deploying to Heroku

Click the button below to deploy to your Heroku account.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

If the deployment was successful, you should see the following:

![SuccessfromDeployToHerokuButton](https://jfqcza.bn1301.livefilestore.com/y2p0PixTxjETp2VoCU_wV3zgG14z7a6Hpn6RMifgryQTE4c5zA3R4mPgOV5aVEF2oA5pRwZmyCKg05Vz7sKvhziF2ujKLSAd1DNZvfTfTwHeFw1PcMfrYW0HDnkIJ9paQNw7gxHxGg97e7FawQUyO8IFQ/successfuldeploy.PNG?psid=1)

Regardless of whether you deployed to Heroku using the button above or any normal deployment method, you need to configure the project first before running. Otherwise you will get an object error.  See `Configuration` section below.

## Configuration

Modify [config.js](https://github.com/ismaelc/ConcurNextSegment/blob/master/config.js) and plug in a Concur access token (native flow) and Google Geocoding API key.  Please refer to the following links to generate these access tokens:

- [Concur access token](https://github.com/ismaelc/ConcurHackathon#token)
- [Google Geocoding API key](https://developers.google.com/maps/documentation/geocoding/)

For the app to return an upcoming segment, **you need to have future trips inside Concur**.  To see how to push trip/itineraries to Concur through the API, refer to this [page](https://github.com/ismaelc/ConcurHackathon#dummy) 

## Node.js on Heroku references

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

## TODO

- Resolve local date/time
- Add samples (integration with other APIs, maps, etc)
- Create demo account with ready-to-use access tokens + api keys