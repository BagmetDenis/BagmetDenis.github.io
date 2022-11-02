'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "be7ff44e95c40d2de25aebdc79a7cf23",
"/": "8f5e8dfd27e6c8021cf2a2db59b33cd2",
"main.dart.js": "7de05dda59ac8a4b80f09be80a840aea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "9e71bbc8325e7b7057a88fc7dcdd9c06",
"assets/NOTICES": "7d6acea68edbabdd8b3a6ad6ac1a47fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4d1875bf9d43c4c551d6e8123ba5abec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons_app/faceYoga.png": "6092e39b578e6dc4725548fb66237701",
"assets/assets/icons_app/zoloto585.png": "9aef4b044064d866625d0bcf282adcad",
"assets/assets/icons_app/truthOrDate.png": "7fa213d7c83a9bffe180e8a72e559a9a",
"assets/assets/icons_app/powerFit.png": "4da729cb8b71d55a1a44fb86f866ca40",
"assets/assets/icons_app/iDontNever.png": "db8635dc62634425d2f9329bfdccb38d",
"assets/assets/screens/PowerFit4.png": "30bfceeeafa728c1303d6db3b46f03eb",
"assets/assets/screens/IDontNever4.png": "4bc626b2d3cebdcf18736ce79676b126",
"assets/assets/screens/IDontNever5.png": "7171aa2a38133a5f0f3b5c3ff0d17fc0",
"assets/assets/screens/PowerFit5.png": "46e71405fbe4d34cc78cb5fd406d464c",
"assets/assets/screens/PowerFit1.png": "f1bddfe5b69df1c3c322661b79bc0c85",
"assets/assets/screens/IDontNever1.png": "e52b3cfdf9286f483e946b60dcc1a3f5",
"assets/assets/screens/IDontNever0.png": "491698bb077cdd8a003be384ebdae14a",
"assets/assets/screens/PowerFit0.png": "1263408cf5821a9273ee0fe097d39da1",
"assets/assets/screens/PowerFit2.png": "2fbedd5415a493aac58adb9f4c3815c8",
"assets/assets/screens/IDontNever2.png": "85b2bab994e406aacef88af46125abcc",
"assets/assets/screens/IDontNever3.png": "8dfd7939c4acc5379b51b56271cc493f",
"assets/assets/screens/PowerFit3.png": "41d7bbecf41b1e4f01a9a7ae24a0addd",
"assets/assets/screens/truthOrDate0.png": "6c284acebff7d5fb2d4d7a1efea985d0",
"assets/assets/screens/truthOrDate1.png": "3e5955f296eda2e4e76f89ff19a439d3",
"assets/assets/screens/FaceYoga4.png": "2314d4518dd9f83d048900134f15872f",
"assets/assets/screens/truthOrDate3.png": "ed0c0b7102da9d528ca1633371daf856",
"assets/assets/screens/truthOrDate2.png": "aad196e7c16a66ec7fa73a10eec43244",
"assets/assets/screens/FaceYoga5.png": "847f3a587f87f84e33947d13d32dcab6",
"assets/assets/screens/FaceYoga1.png": "bf1e91468836f958f94d5e658107536f",
"assets/assets/screens/FaceYoga0.png": "ec588974d21da8a58aeb481fad9ce491",
"assets/assets/screens/FaceYoga2.png": "50ad5621ee8053d3b17bd64e251223e5",
"assets/assets/screens/truthOrDate5.png": "179121e861c22ab68d40f142e3a4d13f",
"assets/assets/screens/truthOrDate4.png": "6b7331d761d9d293b7ab205411f0acd2",
"assets/assets/screens/FaceYoga3.png": "aa8cdded21576150f126cded2421ffdd",
"assets/assets/screens/Zoloto5854.png": "7541274a21478e4f0a05a03146fef648",
"assets/assets/screens/Zoloto5850.png": "cd46d0e7a684c8b3c693f41624f1d6ec",
"assets/assets/screens/Zoloto5851.png": "df06c01f53c071f602d3342f593e99f3",
"assets/assets/screens/Zoloto5853.png": "0a65b7d448012e1c38a2b685d1475b04",
"assets/assets/screens/Zoloto5852.png": "8dc85aa7312765965cc8c6205e4d6798",
"assets/assets/icons/Telegram.png": "4ccb2f133150310d800adb1ecaa53147",
"assets/assets/icons/AppStore.png": "436fa48e30e9ad5ecbec555bc04e64a4",
"BagmetDenis.github.io/version.json": "9b818ca9511483c901bed1545384376c",
"BagmetDenis.github.io/index.html": "8f5e8dfd27e6c8021cf2a2db59b33cd2",
"BagmetDenis.github.io/main.dart.js": "7de05dda59ac8a4b80f09be80a840aea",
"BagmetDenis.github.io/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"BagmetDenis.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"BagmetDenis.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"BagmetDenis.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"BagmetDenis.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"BagmetDenis.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"BagmetDenis.github.io/manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"BagmetDenis.github.io/.git/config": "34c0ccca8b0cfbd4c85786379e730a81",
"BagmetDenis.github.io/.git/objects/3e/6d24a4d3a8b8d9998c21343b318d84d21bb3b0": "d2849072a6e08e0fd76c88eb8893a66c",
"BagmetDenis.github.io/.git/objects/93/50335cf02a2ddd6ed989562bac309585eaadb3": "ae18e35c8ce4c285b9b3a42f443ab563",
"BagmetDenis.github.io/.git/objects/94/002681a3f49817be2f42322a7a260dac4e642f": "8bf096eb6600eb5f3ffc3491e59f7212",
"BagmetDenis.github.io/.git/objects/0e/fc647c178e73756b6a32995fa7a70a8c589028": "9e1bd5e0da69d3cb543e260a0ef23474",
"BagmetDenis.github.io/.git/objects/02/57f0a9084bae3e440beb4ff985c22e91fb7bbe": "5b3e8cc1137265c1114b475a21fb3d2c",
"BagmetDenis.github.io/.git/objects/b4/5d0196aede0a8d6ad5af9647403d80c6911514": "5c26e8d09936b5c578e3816a78a6a76d",
"BagmetDenis.github.io/.git/objects/fe/4b6c80f8fa3327b416ef2aa92d318147c95ea0": "6c35b93f1317c10a4ef952081fdd8841",
"BagmetDenis.github.io/.git/objects/c8/0d7ddf65755d143b5da5a39ba52af47d53b354": "b712ef78070b09f13f731eea5611b86f",
"BagmetDenis.github.io/.git/objects/ec/6005a51e5f1d3db1180fdebe04e2b3c492def4": "c6ff61278b35e1453e1693691a7a2fef",
"BagmetDenis.github.io/.git/objects/pack/pack-1724f0edb8309fee785db03391c6b6cf4ba60e81.idx": "007b8d133d680efdcbb48c8e8ded791f",
"BagmetDenis.github.io/.git/objects/pack/pack-1724f0edb8309fee785db03391c6b6cf4ba60e81.pack": "0cb83293fede96932a58f370a25cb218",
"BagmetDenis.github.io/.git/objects/45/0ddd7d42527b047694a8750b512929d60fbfa3": "e7ab86295d5389e3af4451a2648d93a4",
"BagmetDenis.github.io/.git/objects/7b/e3b538f321aeb1c4f791ee1b56400ba1a7c44e": "f6d9a1fb9f1232b2d8d91d3fb080b1a6",
"BagmetDenis.github.io/.git/objects/81/326243166a3ac770bb527b73efe294abb2d36f": "fda80927c6200fcbd664d7335560049f",
"BagmetDenis.github.io/.git/objects/5d/fd51db05fe2669b572fd95becb667a4d7a1581": "e78bb040f454aff6b6c229b5f9eb6f91",
"BagmetDenis.github.io/.git/objects/30/e981711c2d77d719d684387697d745169337c5": "f706552ee83a6488a183a0d8d3411745",
"BagmetDenis.github.io/.git/objects/dc/eaf1f1f7a524ad15c036c21a7304ec36d75f38": "a7c976e667f97c4f38d0c8fececae239",
"BagmetDenis.github.io/.git/objects/a8/fb4bae22f69e67e262d7002501d513affcba75": "893099d1e7eb48fcabc31da348080627",
"BagmetDenis.github.io/.git/objects/a1/454235ddc0a1cdf5869b38dd185243b0e64fc5": "31beb8abe460cb55af2e0e8c76de2070",
"BagmetDenis.github.io/.git/objects/f6/110c9f5ee23ac6ac4d08ded09fce438ee989dd": "d45218a45b89d5014b52fd94466a5ee7",
"BagmetDenis.github.io/.git/objects/15/6511bb1cd8e8cb78fb54e82e185366252d40ae": "2f54b77e6f497ead17ec8af777072496",
"BagmetDenis.github.io/.git/objects/14/fff2bc9249bdb744444d24776587aa36d4a97e": "0eaba61a196722c55b421730df5d9f36",
"BagmetDenis.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"BagmetDenis.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"BagmetDenis.github.io/.git/logs/HEAD": "66ffe03486f104b977ac43ffbce0c2cd",
"BagmetDenis.github.io/.git/logs/refs/heads/main": "66ffe03486f104b977ac43ffbce0c2cd",
"BagmetDenis.github.io/.git/logs/refs/remotes/origin/HEAD": "4d49d4e81b564f477b8c57ded9ec9cc4",
"BagmetDenis.github.io/.git/logs/refs/remotes/origin/main": "6cefc4435c03cfb5eb539083b511feb5",
"BagmetDenis.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"BagmetDenis.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"BagmetDenis.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"BagmetDenis.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"BagmetDenis.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"BagmetDenis.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"BagmetDenis.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"BagmetDenis.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"BagmetDenis.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"BagmetDenis.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"BagmetDenis.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"BagmetDenis.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"BagmetDenis.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"BagmetDenis.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"BagmetDenis.github.io/.git/refs/heads/main": "df278ac3a5786e87b7f5eb05112521aa",
"BagmetDenis.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"BagmetDenis.github.io/.git/refs/remotes/origin/main": "df278ac3a5786e87b7f5eb05112521aa",
"BagmetDenis.github.io/.git/index": "b17fc4a77036fe4fcab6f5b5c2545bda",
"BagmetDenis.github.io/.git/packed-refs": "1ad4391c5f6f06551041d6e5c1304d83",
"BagmetDenis.github.io/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"BagmetDenis.github.io/.git/FETCH_HEAD": "b6fedf54d570ceda181f81769ce47aaf",
"BagmetDenis.github.io/assets/AssetManifest.json": "7ee0ca1c3a861c260fba41519b2b2fb9",
"BagmetDenis.github.io/assets/NOTICES": "7d6acea68edbabdd8b3a6ad6ac1a47fd",
"BagmetDenis.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"BagmetDenis.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"BagmetDenis.github.io/assets/shaders/ink_sparkle.frag": "4d1875bf9d43c4c551d6e8123ba5abec",
"BagmetDenis.github.io/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"BagmetDenis.github.io/assets/assets/icons_app/faceYoga.png": "6092e39b578e6dc4725548fb66237701",
"BagmetDenis.github.io/assets/assets/icons_app/zoloto585.png": "9aef4b044064d866625d0bcf282adcad",
"BagmetDenis.github.io/assets/assets/icons_app/truthOrDate.png": "7fa213d7c83a9bffe180e8a72e559a9a",
"BagmetDenis.github.io/assets/assets/icons_app/powerFit.png": "4da729cb8b71d55a1a44fb86f866ca40",
"BagmetDenis.github.io/assets/assets/icons_app/iDontNever.png": "db8635dc62634425d2f9329bfdccb38d",
"BagmetDenis.github.io/assets/assets/screens/PowerFit4.png": "32c1ae0822f4160868c267ec8616accd",
"BagmetDenis.github.io/assets/assets/screens/IDontNever4.png": "3e27118c13ec6309a3f56937d505e6b3",
"BagmetDenis.github.io/assets/assets/screens/IDontNever5.png": "fc4c20b61acfd26a53e3060dcfa100a6",
"BagmetDenis.github.io/assets/assets/screens/PowerFit5.png": "fd5d60acf1167f2ff4692f49db8a0242",
"BagmetDenis.github.io/assets/assets/screens/PowerFit1.png": "08092dde9ffc5c21b8b3699b3cdc9521",
"BagmetDenis.github.io/assets/assets/screens/IDontNever1.png": "e2c809aa2a7850862edf6fa27d825bc1",
"BagmetDenis.github.io/assets/assets/screens/IDontNever0.png": "2e3b0dec00f2716554f32011cb66f572",
"BagmetDenis.github.io/assets/assets/screens/PowerFit0.png": "2edddcab10aab53872597f24582ce9a4",
"BagmetDenis.github.io/assets/assets/screens/PowerFit2.png": "4c58c5c01d649ba44ad2e1263da2ad44",
"BagmetDenis.github.io/assets/assets/screens/IDontNever2.png": "44a055c5b4be4dfaa8fe5c771e0eb007",
"BagmetDenis.github.io/assets/assets/screens/IDontNever3.png": "a3903f0a0d87f78643d6ffd11bc62e7c",
"BagmetDenis.github.io/assets/assets/screens/PowerFit3.png": "9ab3edbcdf64a9c6c32fd7d6c0d6ca78",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate0.png": "d03e3d6c2fa389daa40db3dc45c9f083",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate1.png": "cfeea556c031b63b2bc1af4d5e206464",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga4.png": "35068ce2af2d62c824a58e5047a21033",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate3.png": "eb215fb8c1b7f6714d6956081810b09e",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate2.png": "66c72ce00ed4b4ee41ace647d7b5e9e4",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga5.png": "04209042d31b73096631795e98d13b1e",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga1.png": "fa665504f1e34aa7b66b0dd0a2b863b8",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga0.png": "ab1b6d33d78cff5554118df120843035",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga2.png": "4d87a919c02a414b46fa65fa6066036a",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate5.png": "08c88d81a59ceef9872073ddd10cf864",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate4.png": "c8309adb0375814cf44307125037a2b4",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga3.png": "faac9dd0a71d0bcd72b5ac9b263c52dc",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5854.png": "440524bd6a47ffa08931bf26c1e9290e",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5850.png": "967e38bf4d6b1b9addc472b3500b9843",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5851.png": "30121f7b6ad6e2c92463e4a6be1f5cfa",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5853.png": "4b9214bf89b1bb4160910480c7ba549d",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5852.png": "aa86b35daabf574b236db55e66fbfdf4",
"BagmetDenis.github.io/assets/assets/icons/Telegram.png": "4ccb2f133150310d800adb1ecaa53147",
"BagmetDenis.github.io/assets/assets/icons/AppStore.png": "436fa48e30e9ad5ecbec555bc04e64a4",
"BagmetDenis.github.io/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"BagmetDenis.github.io/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"BagmetDenis.github.io/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"BagmetDenis.github.io/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
