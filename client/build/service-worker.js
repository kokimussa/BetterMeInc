"use strict";var precacheConfig=[["/index.html","77cb8709c4a624cbff32f34f351df972"],["/static/css/main.a85d8a23.css","c708ea746c9b6728d07ee4d7c90984d0"],["/static/js/main.4137f0f2.js","a3d7cf05727558702f6544934e576479"],["/static/media/boardwalk.111cd63d.jpeg","111cd63d5514848f668c46c849afb092"],["/static/media/boat-on-lake.53dc263e.jpeg","53dc263e832504c02e7e526054696abf"],["/static/media/brocolli.3ca08705.jpeg","3ca08705b9c47f809d18d35afafe1cf8"],["/static/media/carrots.d086ab0a.jpeg","d086ab0abd7cdc70238262f8b6e61bfd"],["/static/media/color-cloud.97c420e8.jpeg","97c420e8bac88222672c544ea17ab7c2"],["/static/media/couple-jumping.123e7725.jpeg","123e772579ae8485f131dd03f35d9beb"],["/static/media/female-laugh.37de7ffe.jpeg","37de7ffe7ff3afceebbc48fb94153964"],["/static/media/flower.27822afe.jpeg","27822afe8f03d2c11a9a893beb7216c5"],["/static/media/fruit-yogurt.9820349b.jpeg","9820349b260ade37704a5dcbd68ff287"],["/static/media/grapefruit.dab3a7bc.jpeg","dab3a7bcd2d262481a4db5c473340d45"],["/static/media/greentomatoes.f643a8e2.jpeg","f643a8e285356dd93e0fefff447d43a1"],["/static/media/health-drink-shots.1fa5aac1.jpeg","1fa5aac17d6795d1a28bc317c0fe0520"],["/static/media/lady-closed-eyes.eaa3584f.jpeg","eaa3584f555f9acceeac03b4873bd13d"],["/static/media/lady-dancer.885e4265.jpeg","885e426572402d2b3b5002d36b70715e"],["/static/media/lady-hammock.42d193ba.jpeg","42d193ba1e1b97a2f0db059d7951688a"],["/static/media/lady-longhair.d4540c1d.jpeg","d4540c1ddcff4f7b70419267533635f3"],["/static/media/lady-shoe-weight.cd0d4f90.jpeg","cd0d4f90281fd0fe35a1ac4191a56241"],["/static/media/lady-skateboard.0cd703d8.jpeg","0cd703d8218bd3c8930cfd3d8131db1e"],["/static/media/lady-water.a0f8581b.jpeg","a0f8581b8f79f32efe0115237783a310"],["/static/media/lemons.6c053a33.jpeg","6c053a33d3a38770702eb8c1ecb4639c"],["/static/media/man-bball.313877b8.jpeg","313877b8472a99652a85409fac12a105"],["/static/media/man-form.0a09aa42.jpeg","0a09aa4282ed6339bb40717b39cb44fe"],["/static/media/man-in-forest.11664ab5.jpeg","11664ab5d65eb575307e5a9649dc2e6e"],["/static/media/man-on-mountain.a2d44427.jpeg","a2d4442752ddedc381888b017ceac243"],["/static/media/man-on-track.fe9e6ac1.jpeg","fe9e6ac1962bf634777492c281228233"],["/static/media/man-surf.1d67221b.jpeg","1d67221b8fbbd429893feb0f0944280d"],["/static/media/man-surfboard.e9fe7df6.jpeg","e9fe7df6c57e5538d9cdf51bbee87bb2"],["/static/media/men-on-track.186e2ceb.jpeg","186e2ceb4a295ab7c0ed79934cd4db6a"],["/static/media/pho.61cd0317.jpeg","61cd03177e89ab2916d9b4c560e29df9"],["/static/media/pineapple.59cfe46f.jpeg","59cfe46fd74d0624cf2f7d4b64ba9d59"],["/static/media/pose-athletic-female.53ddb81d.jpeg","53ddb81d8264578b84ba378b6fea5a28"],["/static/media/rocks.a1508f39.jpeg","a1508f399712af617f47c0def75235a0"],["/static/media/sand-mountain.8af2966e.jpeg","8af2966e18746d48f9a31e26bd3aae31"],["/static/media/shoes-by-lake.0b553d42.jpeg","0b553d42dbb61467778bb4c57d3e366b"],["/static/media/smoothies.eb72fba0.jpeg","eb72fba0ba8ced6093be73720af6be15"],["/static/media/vegetables.1b408b0a.jpeg","1b408b0a9c1d9ddb5e05a88fe9ed2a27"],["/static/media/waterfall-male.9ba8b4c7.jpeg","9ba8b4c736b56818b3683ed17a215124"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});