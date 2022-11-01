'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "1e3e9588cc4c4a9c65a19b62399d64c2",
"/": "1e3e9588cc4c4a9c65a19b62399d64c2",
"main.dart.js": "81343da213df716b980569ea093a1674",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "406fb6b61602cff25cdf7583481f1042",
"assets/NOTICES": "cc1869617d5463d4149cb8b4a9c0fb6f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4d1875bf9d43c4c551d6e8123ba5abec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/screens/PowerFit4.png": "32c1ae0822f4160868c267ec8616accd",
"assets/assets/screens/IDontNever4.png": "3e27118c13ec6309a3f56937d505e6b3",
"assets/assets/screens/IDontNever5.png": "fc4c20b61acfd26a53e3060dcfa100a6",
"assets/assets/screens/PowerFit5.png": "fd5d60acf1167f2ff4692f49db8a0242",
"assets/assets/screens/PowerFit1.png": "08092dde9ffc5c21b8b3699b3cdc9521",
"assets/assets/screens/IDontNever1.png": "e2c809aa2a7850862edf6fa27d825bc1",
"assets/assets/screens/IDontNever0.png": "2e3b0dec00f2716554f32011cb66f572",
"assets/assets/screens/PowerFit0.png": "2edddcab10aab53872597f24582ce9a4",
"assets/assets/screens/PowerFit2.png": "4c58c5c01d649ba44ad2e1263da2ad44",
"assets/assets/screens/IDontNever2.png": "44a055c5b4be4dfaa8fe5c771e0eb007",
"assets/assets/screens/IDontNever3.png": "a3903f0a0d87f78643d6ffd11bc62e7c",
"assets/assets/screens/PowerFit3.png": "9ab3edbcdf64a9c6c32fd7d6c0d6ca78",
"assets/assets/screens/truthOrDate0.png": "d03e3d6c2fa389daa40db3dc45c9f083",
"assets/assets/screens/truthOrDate1.png": "cfeea556c031b63b2bc1af4d5e206464",
"assets/assets/screens/FaceYoga4.png": "35068ce2af2d62c824a58e5047a21033",
"assets/assets/screens/truthOrDate3.png": "eb215fb8c1b7f6714d6956081810b09e",
"assets/assets/screens/truthOrDate2.png": "66c72ce00ed4b4ee41ace647d7b5e9e4",
"assets/assets/screens/FaceYoga5.png": "04209042d31b73096631795e98d13b1e",
"assets/assets/screens/FaceYoga1.png": "fa665504f1e34aa7b66b0dd0a2b863b8",
"assets/assets/screens/FaceYoga0.png": "ab1b6d33d78cff5554118df120843035",
"assets/assets/screens/FaceYoga2.png": "4d87a919c02a414b46fa65fa6066036a",
"assets/assets/screens/truthOrDate5.png": "08c88d81a59ceef9872073ddd10cf864",
"assets/assets/screens/truthOrDate4.png": "c8309adb0375814cf44307125037a2b4",
"assets/assets/screens/FaceYoga3.png": "faac9dd0a71d0bcd72b5ac9b263c52dc",
"assets/assets/screens/Zoloto5854.png": "440524bd6a47ffa08931bf26c1e9290e",
"assets/assets/screens/Zoloto5850.png": "967e38bf4d6b1b9addc472b3500b9843",
"assets/assets/screens/Zoloto5851.png": "30121f7b6ad6e2c92463e4a6be1f5cfa",
"assets/assets/screens/Zoloto5853.png": "4b9214bf89b1bb4160910480c7ba549d",
"assets/assets/screens/Zoloto5852.png": "aa86b35daabf574b236db55e66fbfdf4",
"assets/assets/icons/AppStore.png": "436fa48e30e9ad5ecbec555bc04e64a4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
