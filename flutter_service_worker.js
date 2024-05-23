'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3264944ed64ac3aa21d5f1379ba556a2",
"assets/AssetManifest.bin.json": "bfee29117b9dc8d2a146d0c907194ad1",
"assets/AssetManifest.json": "78d6807e7ea1c6c9ae4446ba13b26bbc",
"assets/assets/fonts/FiraCode-Bold.ttf": "016bcf67f409675ff98373081ba753dd",
"assets/assets/fonts/FiraCode-Medium.ttf": "1663a5207e331ab6fa967200663e4e10",
"assets/assets/fonts/FiraCode-Regular.ttf": "301dd380625eb548238ae3c39ec9f12b",
"assets/assets/fonts/FiraCode-SemiBold.ttf": "851ef86c3ff275bd077193188f3a004f",
"assets/assets/icons/cancel_ic.png": "fbf1c345083d229839cad2beb6607cba",
"assets/assets/icons/certificate.png": "b44444854bf17d75303255521031ba26",
"assets/assets/icons/cup_ic.png": "cacc8d51481c0aa494c2306f9eda46c7",
"assets/assets/icons/cycling_ic.png": "1e782e413709d95a5ed126669e898851",
"assets/assets/icons/database_ic.webp": "adc2ea1d4bb27817733f9e088cbd4955",
"assets/assets/icons/design1.webp": "a56056750b6a4c5d23f780c35e123f3e",
"assets/assets/icons/dosa_ic.png": "7e08c51881b26859550d2e2f112316cb",
"assets/assets/icons/dots_design.webp": "4f14ae88bf3f748c407db2d7a2d71df1",
"assets/assets/icons/drawer_ic.png": "0e4315a3c66b56f499d23e338362d904",
"assets/assets/icons/email.webp": "f728d429148af4b2769f19d145a97381",
"assets/assets/icons/experience.png": "07def02ae24f0db39774c5490014959e",
"assets/assets/icons/framework_ic.webp": "6ae99be1bad90061eaa746d1ad32ccab",
"assets/assets/icons/github.webp": "8554ea1d19d3c571140c90ed33e43e92",
"assets/assets/icons/language_ic.webp": "8a18d5847fa170afd5b21995c212d431",
"assets/assets/icons/linkedin.webp": "d1842134224d5a10bb4fa835cbc7509e",
"assets/assets/icons/loading_animation.json": "b90bcb6ceb76c0b8d884749a00dc68e4",
"assets/assets/icons/logo.webp": "8b5cc25d5f400729668d293542081f1f",
"assets/assets/icons/movie_ic.png": "c0a7b1c53dcc29b766a51b7e0957aa7f",
"assets/assets/icons/other_ic.webp": "1150e329919f2e288e5a2177c2974452",
"assets/assets/icons/projects.png": "69b91e9fc5a5808c529313e1570f964c",
"assets/assets/icons/quoteIcon.webp": "17ae5160442f5dbdeba36cfd6ddbe341",
"assets/assets/icons/rooftop_ic.png": "1b8a7241ea97ed581586f72cbdb154b8",
"assets/assets/icons/tools_ic.webp": "edb913289514f495449bcdd6713681fb",
"assets/assets/icons/winter_ic.png": "bbe3cd1394312fa1d4fcfe6f7cf76e20",
"assets/assets/images/aboutProfile.webp": "cdca923cf686ab516a9e4561e17c5788",
"assets/assets/images/dreamy_droshky_logo.webp": "3e80f7201d3f6de1b1432f0d49fc2f4b",
"assets/assets/images/ecommerce.webp": "df3c5e2299996588ac1a987e38912281",
"assets/assets/images/Karyon-logo.webp": "a894fbfb5b6cd82398f4130cad2f91a5",
"assets/assets/images/karyon_cartoon.webp": "b9edba51a1af269ea2985dc4eb4c7070",
"assets/assets/images/logo.png": "e1042a29751a94618be47da1bc08c011",
"assets/assets/images/my_image.webp": "f19e38c51c1843c2489b50ff887431f2",
"assets/assets/images/profile_image.webp": "f2d10e52cac2d68700b7df950d562135",
"assets/assets/images/sriseva-logo.webp": "fa9c8ebf88557759e00bc182fcb63b79",
"assets/assets/images/sri_seva_cartoon.webp": "85fc35e35961740f7073fdbfcca5b8dc",
"assets/assets/images/vetanwala_cartoon.webp": "de7a0264b723fd4352556e9dcf8f532d",
"assets/assets/images/vetanwala_logo.webp": "d52f5c500acac67889dc98cb0c6379b1",
"assets/FontManifest.json": "4b9e44ae1052a819b0b3675a4211afa6",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0c76f168534155f79024a3eb9d9e3797",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "970da014995ceab80775cab691d700aa",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "d981e44c9985d91edbf25e93d1b4b24d",
"icons/Icon-512.png": "c067ab654ee58242a74a31449790ac83",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a146798330264a46cb7e3e17f4b7f938",
"/": "a146798330264a46cb7e3e17f4b7f938",
"main.dart.js": "819ba2266bb9c7589e8412fca0580e4b",
"manifest.json": "ac2dfccc143e5f3e8093b61e7681371a",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
