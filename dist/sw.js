importScripts("https://arc.io/arc-sw-core.js");var APP_PREFIX="ApplicationName_",VERSION="version_01",CACHE_NAME=APP_PREFIX+VERSION,URLS=["/","/index.html"];self.addEventListener("fetch",(function(e){console.log("fetch request : "+e.request.url),e.respondWith(caches.match(e.request).then((function(t){return t?(console.log("responding with cache : "+e.request.url),t):(console.log("file is not cached, fetching : "+e.request.url),fetch(e.request))})))})),self.addEventListener("install",(function(e){e.waitUntil(caches.open(CACHE_NAME).then((function(e){return console.log("installing cache : "+CACHE_NAME),e.addAll(URLS)})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){var t=e.filter((function(e){return e.indexOf(APP_PREFIX)}));return t.push(CACHE_NAME),Promise.all(e.map((function(n,c){if(-1===t.indexOf(n))return console.log("deleting cache : "+e[c]),caches.delete(e[c])})))})))}));