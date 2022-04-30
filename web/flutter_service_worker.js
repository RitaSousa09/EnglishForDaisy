'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"index.html": "447e2fc9ed805ecf2ffa62c5563314e6",
"/": "447e2fc9ed805ecf2ffa62c5563314e6",
"main.dart.js": "05bddf9b23b0205f79e4163436b4d52d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"assets/AssetManifest.json": "09efa045d8629da1567c3bd13fa94140",
"assets/NOTICES": "fd51220986a51c1aab7f603a1226c89b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/fox.jpeg": "6c134718242daf4f0af06496b4734d41",
"assets/assets/turnLeft.png": "2eae0e79053c7797ef59a2cff2eb1d89",
"assets/assets/socks.jpeg": "8e2d9fdaf0f7df9779aacd6c919d18de",
"assets/assets/yogurt.jpeg": "2026ad6b962d286e0612921b59f98af8",
"assets/assets/panties.png": "9ab42e23910a65f343c0afb7a2171230",
"assets/assets/bowtie.jpeg": "2edfa20e06cbdfb8f94dff2926d707cd",
"assets/assets/swim%2520trucks.jpeg": "daab5c71cc354738a8b6c0e879f23116",
"assets/assets/turnRight.png": "b277818de0204621aaddeb8a63184433",
"assets/assets/carrot.png": "70ba651d6a25cd71c494cd090d5ecd32",
"assets/assets/toxedo.jpeg": "bbdb075cc12922c3b2bd312869afd419",
"assets/assets/apple.jpeg": "8e406bb2aea2aff108d43edc81dacc1b",
"assets/assets/bra.jpeg": "0a42de10e028add227938275e8a3a581",
"assets/assets/goPast.png": "fc8baa35b9cea77d841ed7d24adcc7d9",
"assets/assets/bird.png": "e996f06df8e26ef92a3c1db0fcc3ada1",
"assets/assets/strwberry.webp": "d50cdbcce007c7d16304bd36657230d2",
"assets/assets/onion.png": "122df10f7327f60ad62f48ac2ebda521",
"assets/assets/eggplant.jpeg": "f6047496875c783125f8150e92830260",
"assets/assets/panda.jpeg": "3c2a8a918feefec626b64033567a7411",
"assets/assets/mushroom.jpeg": "3b34dc31ae0406c8814b414816b91378",
"assets/assets/apricot.webp": "547cb22c74553ee058a469eed1653de1",
"assets/assets/dog.jpeg": "641a12e2484cb131fa377f6dd5878132",
"assets/assets/suit.jpeg": "7f891e58719a632d491fe2d51509adcb",
"assets/assets/fries.png": "13959e38f35b08d896e26a50f75f31ee",
"assets/assets/pineapple.jpeg": "aba35fb42c1a985651ab22e98923fba9",
"assets/assets/mammoth.jpeg": "d84d437b8ca9c9d98300a9dcde53a815",
"assets/assets/hippo.webp": "4096875dc723d9734aeee5e107756e7b",
"assets/assets/cat.webp": "0389505b26c3ae76833b75bb893fff48",
"assets/assets/sunhat.jpeg": "51a83c6f7032f61088a91495acdded8c",
"assets/assets/cross.png": "5f644ca11b94fac7f67078460ccd9152",
"assets/assets/platypus.jpeg": "904caed68d9db1a2eb5a201b9e3c1323",
"assets/assets/frog.png": "d8ceeb74e769b003954cafd7d62d8cf2",
"assets/assets/fish.webp": "22b9446e543f9384c8a65aa0dcfd48db",
"assets/assets/smokedsalmon.webp": "3ec95ee61c9ca0a29964306fc44c025a",
"assets/assets/pasta.webp": "7b1df4c6271c92dc3e6fa3bc15ca8ef3",
"assets/assets/sweater.png": "213ba0a29e2b0736e26959480ebde002",
"assets/assets/brocolli.jpeg": "88710bceee60a4d51eb689d6983fa626",
"assets/assets/otter.webp": "1d50eaaa8d5973fc64a7679134240c9b",
"assets/assets/sushi.png": "1a87df2ead26f45aaa188eae4bde5942",
"assets/assets/goStraight.png": "65a5b0c9251a3c2be122ece645e4320b",
"assets/assets/giraffe.png": "b299d1cc8d9dacac6fadd6494536c041",
"assets/assets/cabbage.jpeg": "19366ca0eadfbe1d3ed154520cee2978",
"assets/assets/dress.png": "2c62ff222da1e99aa9bdc0c44c5b773c",
"assets/assets/swimsuit.jpeg": "7213a5451a45e57b19e4457f4921c59f",
"assets/assets/tie.jpeg": "e8d48f6dffac34ecec0d6154a9f5c44e",
"assets/assets/roastbeef.jpeg": "b7fee8d6cad57aec079e433096ea5f41",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
