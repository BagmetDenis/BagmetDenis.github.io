'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "26fbf8e2d04818c9f3a0463614bddadf",
"/": "26fbf8e2d04818c9f3a0463614bddadf",
"main.dart.js": "aa2f25d08fe8818dbb5b59d762ef1bff",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "adb8b23884632bfee915980e1e76f14d",
".git/objects/61/e5f2554ae94c12b3a34be0de4c070956eb93c5": "24a4ed0f77f723ebfc64ec349d98e47c",
".git/objects/0c/cfefa73aee169db2523b0d275d43c694593d3f": "c132c73ab943215f5f4f9e481dd00dc5",
".git/objects/66/f59357aa86b71ca345529b6f353e157b770377": "fdc739c9ea209cc31805c97d4d289007",
".git/objects/68/b51aa57de31ada7d05f7d1aecbcd1da930774c": "d9119e4b5221b4934a76ee807f27d7ce",
".git/objects/03/d230dcdadce16bd709d700bba7a2b18d9ed0a5": "0a9b187c52df3b56755840fadf5905ec",
".git/objects/32/5273ecac63e31cf8d027f870ac55be30b0f9a7": "82924d98921045a6c3a6149b3849074d",
".git/objects/69/32fdc7377537f3c741bc349886ec51bbf01b59": "e9e685e3fd610d0c6b5f9be35773478f",
".git/objects/3c/15060a136bc0cd2d8071d5e45248fe4a9cfc3a": "c71d2a42c8a52eab20818e942e386d8a",
".git/objects/51/a836f7389beb4c73ec09fbdc227b9bf87e295a": "54570249517ea55dd9156ee697baf9b4",
".git/objects/58/fc649f76dd22ddb97c304684bc8b4bd05c279d": "2062ac76d32d1a6f4f05780273b262bf",
".git/objects/b5/f7a1a81908544cdcc472e1744ce202e0d0a40a": "0127abaed286d83622109b9066eaeec8",
".git/objects/d9/3c22523c5c594a58896d8d17988ea09c1957e7": "5c0d916410c75eb601c9772e694bebe3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/65282b8909122557beaa8faf53c2ce85f4d956": "34bf058fe054e739156740d62ea3efb8",
".git/objects/e5/4970eacc41fc22b1d4baa55a113c2d2623b2cb": "2338de8983258819e28a0f2ee57bed08",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b8185194f10660ebfb9f7bb73f0103153747ef": "2da47889376cce0b460be8b7fd9928c5",
".git/objects/ca/638b9c1d9a053e57429affd3ef3ed624bb81e3": "390f819d91c7fbdd8bbc38d0894cf562",
".git/objects/e4/4e666a1f5587679dcb7509f93acd935bce3592": "f7fd086c1504df9a23cab5e9d7d25965",
".git/objects/c8/fd6904cdea74a011a4fefe414a567412aa1e74": "156a38b6d5c086b8a85e3ec148175ce6",
".git/objects/4e/bb84c8695ec4efd2860d21173c1ff4a75fc4cc": "3353c9a21d6b17f78b66d6aa494f3c28",
".git/objects/27/3618cfcbf5e986904cfcfcac87b69484f72a01": "472f12e1bcaef3b2805de0b49745367b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/e079692c328eaaf33f8f32f00da5d272eb2bcc": "e2477b9b1aa8221be247a78da95e180b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1f/8d3251e3d7c2b0f8974f7cbd5a1b571ef805ae": "8224cca8663111e9bb728c3625589f24",
".git/objects/73/ca873067360c9e8c61ad7e6b0ef131d3f83209": "84174ae6ef7e85073eb78abd37537892",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/635693e17755eac8ca773e7711f96b562efa1c": "be5334bf17d705bffe26044b69a8eb6e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/5785f229e7720e4e787df89ec4cca2ee8fd464": "744243887e1c2f02b689ab58da34b6dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/6503f39c9addb4854eb13bb03a8fed9a96a535": "30a74bdc0077cf5a148ad99a5bb7d2ed",
".git/objects/00/4b2e4e532d4f93dfbc1212761d45e03a9280fc": "bcaeac30e58975aefc91848b37d0bdfe",
".git/objects/36/732433b6c6e363c5f097eb69d75e3fc2e384b5": "a281796dfe478334fc9c614bc68b2278",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/01/226f02312a0c1521361fe95043392df69da826": "6bb55a2fccfb941eb826742088a5a66a",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/019130ade489d60934a3359cb525141942ad73": "09929d18cac35f560a6b80299af23f34",
".git/objects/d4/5b66f6a8204c601d4db20821be2a2223a93025": "842191f6cd18b9ad651104d581ffcfe8",
".git/objects/b6/0b1afef9f177a438f80bb247d8353f096c5560": "9b98c2c9c37bc56c1b142495f6fb3134",
".git/objects/a9/80cc4a3c02747627db68845482042b1905c7cf": "cb4c36d326ea867a9f5ecbd9ceb5062e",
".git/objects/af/7c0c8284e2dcabdab4d6b47056bc9641dfb6f5": "ba771418504e8e542199485cc724b024",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/66381da9cfe34a98037d3aeb275d5720f3e52f": "91ef6c42032d05624c7aacffc14cd6bb",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/1711f7282c46e6abed69158a0790a0b1886b75": "15273cf9c515bccbeaa6bcd0c8c80f40",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/fa/3f5605ad183c37f948a42dbf46fd6c76695b3f": "41c21d300fe55ba7a65c4ff2b27b14cb",
".git/objects/ff/35c91c7a7c49ff5200c565f485c0fdb74da31f": "3b656be0a82be39b74ad2536e19ccfc4",
".git/objects/f1/fb8426579fd0b0ccd89685e4ccbe329c15746b": "983df1e70c1480bf529e4cdea518f9e6",
".git/objects/e7/b3b079c974cc6f9f0636064e4b5cc8dd171554": "0a6f812de0f23b187a29a3c057b5c84f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/54ecf4c4f2456a4a8d149d0d09abc874710120": "2e0815034458c272f0df5cd657862a19",
".git/objects/48/0026a43ac5684a6c09224de3e36934a02fa6ea": "76a239e7ea8f488e9fdae76538c1b4d3",
".git/objects/48/64e85d878c75f7e64ecfa21e9154d79b382ba9": "24430a30a790a25df33bbd8ccafb1e77",
".git/objects/15/a3d6969434df9eeeb409ff0c0ca9c0ce8a945e": "52d4dc3c951a2897cb0084789602101e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/39b28cf7d2a3fdeb87021cef52992476930771": "899ab129e739d7876327210e738b848d",
".git/objects/7f/520c01f89b548fbd68e0032c3a685639045307": "2dfa546179c9ff1a45f6342cdba9fe07",
".git/objects/22/bca65a17c34571383c1f429e04879d9a1394d7": "c39a1a4a0d6c9ad83939e19a3cc6a116",
".git/objects/25/ac916cf1ee20e2d3794b84fbe402fa1dfc78f3": "6975f4a5d1dacf13ec98ce8159377879",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0c95da942484d2648ef4fd8641e87c9e",
".git/logs/refs/heads/main": "bdc3301b8872c4d2ce97f28286ebce31",
".git/logs/refs/remotes/origin/HEAD": "fbdfbf0b33623b40dbf9348f5a81ef32",
".git/logs/refs/remotes/origin/main": "0c0220ee11478b37449198333b88258e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d1207250813115f24464f9ea9a8021b5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d1207250813115f24464f9ea9a8021b5",
".git/index": "b833aff6edd34addee98f8e8e7df96d1",
".git/COMMIT_EDITMSG": "39552f2fe066b5a9c7cbc89e9bb3c93d",
".git/FETCH_HEAD": "f90bd37c9c3aff3140b3f9b64cacff9f",
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
"%D0%90%D1%80%D1%85%D0%B8%D0%B2.zip": "e3d884e18941d6123ae72b7a5d001bfb",
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
