"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Portfolio-Luisa/index.html","f3bee86882c3ae2d1045f2966df77405"],["/Portfolio-Luisa/static/css/main.90c4e68c.css","cad059b5b6a306260e9f2ece4d72f703"],["/Portfolio-Luisa/static/js/main.66693116.js","ee68664f8a5163b28b935a2e54400a34"],["/Portfolio-Luisa/static/media/Asientos.6dd63393.png","6dd6339388d118c118b8978a960dfe79"],["/Portfolio-Luisa/static/media/Bootstrap.e3e5ac98.png","e3e5ac981ec4d1c0452a0ec34f20e1e9"],["/Portfolio-Luisa/static/media/Foto.c9257438.jpg","c92574382f62c0895065487588170ab8"],["/Portfolio-Luisa/static/media/Header.bb38d8d5.jpg","bb38d8d544d84d009b4b7244c3290146"],["/Portfolio-Luisa/static/media/Invitations.65cc2709.png","65cc27098242c27d53499c14ebde67ea"],["/Portfolio-Luisa/static/media/Koalas.92ca2c5a.png","92ca2c5a1b7471355883ae8b3dc08466"],["/Portfolio-Luisa/static/media/LuisaGonzalesCV.abb449bf.pdf","abb449bfcd42d50c3ceaca052ae4b96b"],["/Portfolio-Luisa/static/media/Maze.363941aa.png","363941aaa9029c305ec1ef2b325089c2"],["/Portfolio-Luisa/static/media/Memory.c3784f0a.png","c3784f0ac174faf6b5ac5a5f1d1e7894"],["/Portfolio-Luisa/static/media/ROCKING.c39742c1.png","c39742c175bf5156e4286ff554a03e1b"],["/Portfolio-Luisa/static/media/Router.3dc56f4d.png","3dc56f4dbe1fcf1b694c536613c8ca68"],["/Portfolio-Luisa/static/media/Scoreboard.ff72ab03.png","ff72ab0369049fba7701394a88fd9ffd"],["/Portfolio-Luisa/static/media/Smile.de671d6e.jpg","de671d6ed90141143d01354319b0082a"],["/Portfolio-Luisa/static/media/Te.d2ead4a3.png","d2ead4a3256ec698b71cf6619971d926"],["/Portfolio-Luisa/static/media/button-bg.f5af6d12.svg","f5af6d12f7cbf690dca22b5ad5936e42"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/Portfolio-Luisa/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});