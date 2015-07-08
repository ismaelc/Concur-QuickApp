# Concur QuickApp

Concur API stub that adds latitude and longitude to itinerary segments

![ConcurNextSegment](https://jfqcza.bl3302.livefilestore.com/y2pTWB12rIqsaxaVIvQ2QSjGkP9djaBxj10cVNodhIwtcuGIc05inCh8V1xIZdfeYNwFrqPBPwnoOXnUY7Cg4mh44YmTfLbr0ulVoHQRNcH6lkWHfWI85e3OM62b95AvEVK8K3FhALvKSUnLJ91pU8xXK9mn_UxJAdFsaqEOGKEuNo/Capture%202.PNG?psid=1)

Check out a **live demo** [here](https://radiant-springs-1767.herokuapp.com/).  Try adding `/segments` or `/segment` to the URL.

## Deploying to Heroku

Click the button below to deploy to your Heroku account.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

If the deployment was successful, you should see the following:

![SuccessfromDeployToHerokuButton](https://jfqcza.bn1301.livefilestore.com/y2pxAHF-BNqpcXsjZmqRKtVuJy6APi4cRv_4T-raom8OMfaDFjlfVH_2tWrt-DzyegguzQia1hml_CETLQVpW-bP6873mdM78_MHiyhvk-J-2a5yyGX-VUa3kFnOWzDhSDtY59Wa3f2iYTSx4KB93xU8LkMIpWZZ5Nd1fM0b7FZIew/HerokuDeploySuccess.PNG?psid=1)

## Configuration
1. Get your Concur and Google __access tokens__:
 - [Concur access token (use Native Flow)](http://concurapi.readme.io/v1.0/docs/what-do-i-need-the-access-token-for)
 - [Google Geocoding API key](https://developers.google.com/maps/documentation/geocoding/)

2. Make sure you have __trips/itinerary in Concur__.  Refer to this [link](http://concurapi.readme.io/v1.0/docs/post-itinerary) to learn more.
3. After getting your tokens, you have two options:
 - __Option 1: No messing with the config files__ 
    1. After successfully [Deploying to Heroku](#deploying-to-heroku), click "Manage App".
      - ![ManageApp](https://jfqcza.bn1301.livefilestore.com/y2peTMpyxE8ekqd3ACS0M8q7_zvYznV4Of5j1ACwnCrGVFiKYdyScj1sd8Jk7AeMjpr188OUfCErRTRe4CaHazi8tFPjOgDKjO0POGoUL75ZH3cBaLk4rkpJlgvfvSl9gL4xfVeCLGUeB1HlBuT40Qn_rBn-YVJHQPlVSf1rPevuRw/HerokuDeploySuccessManage.png?psid=1)
    2. Click "Settings" -> "Reveal Config Vars" and add in your tokens as `CONCURTOKEN` and `GOOGLETOKEN`. Click Save.
      - ![Tokens](https://jfqcza.bn1301.livefilestore.com/y3pod2W2-uMSqX_Z-Qt0fa6zMdGwvSyCjlupOrnGbUO36qFLSuHHH66prM8F7g2wskcA5Od9uzW3V281K2WkvN1ySYpXhSS0gMvLmd8hU50fjE7sj7l3V1WZTJ2bGPCbKWaitEuCwVEMZ5watkHuXHMlvO5L8xWcG07mnlGgXRu_xE/HerokuConfig.PNG?psid=1)
    3. On the upper right hand side of the page, click the ellipsis (...) icon and "Open App"
 - __Option 2: Mess with the [config.js](https://github.com/ismaelc/ConcurNextSegment/blob/master/config.js) files__

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