'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/config": "c6184186b634a4c272500ac5515b8b12",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "addeb73e956042741adf0f53b0900dab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4c8cafe7b128c70d7f65492c13c4d5d9",
".git/logs/refs/heads/master": "4c8cafe7b128c70d7f65492c13c4d5d9",
".git/logs/refs/remotes/origin/master": "aacb43609a7030a32794f709df777410",
".git/objects/03/0ebc1f6fd488d59ed4615b09cf1ff026a28e55": "3b5794ee7a9ad7e902c2b3cbf388442b",
".git/objects/03/8e1294e67ce3d58dfe7955278257d5463c9e23": "de1e1ca4015172b688cc86d7ccab7bb6",
".git/objects/04/df6dcb5171f9f16535dff7ca9f124554ce6d10": "0f8c43efda8899a4a3deba72e0664b02",
".git/objects/0d/b416f5ed3061c6b460f638de6e6f691676752a": "afae71ce9e8824ab95927722387c17f1",
".git/objects/0f/ebe7b0c6f622f6e8e4b6a14730432126b55022": "1c9a68bfa048b833901f3079e96a0711",
".git/objects/10/c0a6186802588bd3ec944d8cf423e79d759f7c": "cc9556eede6a1ef9e9d131138f0b6cac",
".git/objects/11/4e6c1968b663086409144e50e7a592bff1d6c2": "a7d7429ad650685ab848adefb9ea14f9",
".git/objects/14/24e6e5533285eccbb033fdc7dc27b1b2959317": "0d8d992a6fe0074f030e4185b9478525",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/31/6e17c94ad880a19103014635c818b97e955e24": "c0bd7cad058f45eac1a7987d6cdee917",
".git/objects/34/3252769eab9ce58597b9a64ecdc4601062187b": "0a39614055a42136c6ca00b7d473dc8c",
".git/objects/36/28e6d7bde0beaac47795ad8fc47592e16858a2": "3f7eec9948ca8535d0c5707a024468f5",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3f/36dc4573c0460a6c86ae516d6d474daf5da623": "72bb51e662045b0739ca24c6a74d421a",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/1cfebddfc3f8674cca596a8e54f15fc8bdeb1e": "9c6d7a72d8f3449cf5779514c760b53a",
".git/objects/51/b0dc342e1db0f756cf02e20002ffdba4acdfaa": "a25ac6c4d710c0345d5db18070457eb5",
".git/objects/58/f1bc9d30696a901eea872409571f2df179b598": "aed91fb4f92565ff72cf0e94ee144670",
".git/objects/5c/19f7f23c55404b70dea7737336dcae12656c43": "b3b6020479eabc19476665ccde6699ab",
".git/objects/5f/b9c2612489d41c2df2aa095815c722fe4237e5": "8ef5afb7576b4bcb9dd2c1b8793fda73",
".git/objects/60/08e15eb0e3bc6c3f2ceb3f7ed31be1c0f69a72": "94feec6771b671435e4bee0b2de05fef",
".git/objects/67/7cde939c56a9bd2d2819a07f4d3464f4f55d4b": "0bf36f8a59201b56eae147ea436bae8a",
".git/objects/68/a392425add7ee3ff7399023e5c2aac12b1fd4b": "0d778dea87d7acb858258e5725213f34",
".git/objects/6c/926bc4446741450792df80a812c29356265a9b": "c2b6d38c7560a2aaa75f89648ae23db3",
".git/objects/6d/48c2ca88b0b56159794336f36a3bb0e54c9f5d": "4708d7a97a27a66fc2c9216b0355eb82",
".git/objects/70/0d94fcc4d3d97871f769f428c2bf35ff408ef6": "25fd48a651170cf30b9eb23a819893aa",
".git/objects/71/654f5dae312161a0e51640830ace8f9145f4cc": "ff61bacdf41811e6464e37ca3c167579",
".git/objects/72/cf0715db5898e60b1e07e6c7b0958b8c7756b6": "455cca40120a629c1861fd7230a3b506",
".git/objects/74/ec243da2ed66edb0dd2e424cab340ea5a7f944": "9ac07237875d1cbffa19e90b606360cc",
".git/objects/78/0565540da628532a625394fce995a3e134ff61": "74e3fb03b1b9a1e4546b829a30dd601a",
".git/objects/78/a83574cd808319aa83cfa5fe86ad3e0301502f": "201a2db54e66c0db664a719b20b0a042",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/170ee26676343db811b13388f5b9683262a2c9": "adcbb40de007aab6c1ada620ea4fa0c8",
".git/objects/7e/c211bb1bb94cc88672e4f6ca6a71f5db0ef572": "0cb9c86f25ecf3301d67d69e469c1a87",
".git/objects/7f/44f4945b9affac4d19a3e9c3bcd7c4f6546a07": "05312c25c7d0a89b8cab9f2b15a8d23b",
".git/objects/82/b5aad931ea56dd812a928c3ac0928e6cbb99e2": "30d01385550a7eebbf902df271dc7474",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/28ebdbec90edf4f514bf4222d6246308db929f": "bc0418f8cf8f0b5d943020ea76165cc4",
".git/objects/8c/ba81430d4c29897713024ddeaf9d424cda7f3e": "41d97c589ce251e87d594d123ea0b951",
".git/objects/92/5e34f8754a883743d5ca57da8eb7f368929be3": "37fb9f72d474b28bf070cb51426e19d8",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/1a13fe8525ba2d3a18d12a2240cc481e603012": "3ea81b1210248a2c6b26b0161f81962e",
".git/objects/a2/44a3b60e9a9f8c54dd341c2aafe63e771c0737": "6fd53c7416165b90f46e987616ea6d2e",
".git/objects/a3/e7c314260f64e39ca2f92ca08f3db5114dc10e": "8751dcfe5cff41ed82ea4c5b8525c3ad",
".git/objects/a6/5fb9e28f1ac4ebfcbc427d7bbd31664364f633": "3e2e2c984557da7cca71aad652edc09b",
".git/objects/a6/97d6782499eedbfb9ab8f6e9742a76bf457bc3": "7ffb1a249ca1ca1d7e51f13c2d7d0877",
".git/objects/a7/82b3654cc4d34cb8061777100db6558499c2b8": "aeb1c0c48025d7446b579b43c20e5981",
".git/objects/aa/d9cb66ff371c3efb7fc4dbffa56ac21150b983": "31e4bc1d5ce004afe3e1bee5c1688706",
".git/objects/b2/0e8284441723242659618414285917a34aaf29": "322c7e28e2ccaa567c3fe3da003890f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/1f22563f430335c51dc0d14ecf238873a1b18d": "9fa0f21253ac93aaa7b00aa84bcf695c",
".git/objects/c6/5573c26711f56adcca9beddc004040fe492509": "b6a4deffb315a37bf83f983b9e5ad548",
".git/objects/cb/ab937d296489a382e419ee3cd1c840fe820b03": "9707ddf50be2b248881ac125add6d24a",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/416445114c2982be9dd31ac5a423a7a689fb3c": "e2196582810e5e8fbeb8d8bf48dc8b2f",
".git/objects/d0/7286cc0bb374b5308110dde9ac88dc617f1812": "f00a047977c61dd2aa3644d9367286c5",
".git/objects/d2/0b348bb82c7d6afef661a9ce0d4ab500d6cc2b": "ca7f6117f604594c930268664f87360b",
".git/objects/d5/7ddbd440cdd73edcb01909262ad49c2626d47d": "d786e963a82a0d3bfa5d8b2ad629afae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5f4747771f1dd0d7765cf25bfadbf213af144e": "beb2f838837e684116956f42990a4202",
".git/objects/d9/46e812ead1c47bbfdaf01629bba4b8b5feb569": "100f0c772b7976f82d154856acdb7ab3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/cdc59f59a190872bb89649d428783431f59e4b": "efb4b15b09046f8fcf944bda15967a16",
".git/objects/e3/9aa5d2f7bb2abe2b4309ff29ce5a8a719de9bc": "c0ea057d36e910833ee3b2f61ebaf203",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/fea3512e2be0ff193d9e5e585d02e039608feb": "9fa4fc07de40ef6c814d5593a127298c",
".git/objects/f1/6791d52c7d5f8c9afbd4ac03454f61ffb0941c": "e83b1e67953fe1b316ba16568679ec4f",
".git/objects/fd/dc8ec4c78aa6425a9f8fadd08877385cf22fe5": "afe7e235641e7b83005c6f77aa733f01",
".git/refs/heads/master": "54de64ceb609dcbe71754783804dabf5",
".git/refs/remotes/origin/master": "54de64ceb609dcbe71754783804dabf5",
"assets/AssetManifest.json": "47404e3df72f3425de2f18b93902c21b",
"assets/FontManifest.json": "df98746e16b550a42e8803f5c58d0f0a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/assets/fonts/Avenir.ttc": "bdf471713ee7dec3e19576abe39ee749",
"assets/lib/assets/fonts/impact.ttf": "8fc622c3a2e2d992ec059cca61e3dfc0",
"assets/lib/assets/fonts/ReplaiCustomIcons.ttf": "d27f604a1d8c0e6387b181fe00bc077d",
"assets/lib/assets/images/icons/caret_right.svg": "3b3bc7b5ef8e41d37f5aad4382b7a85f",
"assets/lib/assets/images/icons/comment.svg": "372dfca01bf5a042b4a74846299bf104",
"assets/lib/assets/images/icons/logout.svg": "9459318c3a6e1dc434f497348a9965ff",
"assets/lib/assets/images/icons/page_placeholder.svg": "dd1947ace056416487c6a9a59021d4ec",
"assets/lib/assets/images/icons/rules.svg": "267600a03d2137befd9186887b4f1d30",
"assets/NOTICES": "476db4ed8594ff205e3e82385e4f2234",
"assets/shaders/ink_sparkle.frag": "6891b4ab467252a12e00cc96145901b9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f18d492a1b2a779be2aa11f43c27dcb",
"/": "5f18d492a1b2a779be2aa11f43c27dcb",
"main.dart.js": "38a43546011f0f3034c9d8697684b5e4",
"manifest.json": "ee997517ceb79746787e139cfddf3c1a",
"splash/img/dark-1x.png": "10dc4b969f4e8028190909c33b45ffe0",
"splash/img/dark-2x.png": "5d2d8cd739fbdbb2d8f692aaf4f34aa1",
"splash/img/dark-3x.png": "dcbb00d22837399cf3a4dd719affa5b3",
"splash/img/dark-4x.png": "22e4f6aa065771bf8448d39a9627b02b",
"splash/img/light-1x.png": "10dc4b969f4e8028190909c33b45ffe0",
"splash/img/light-2x.png": "5d2d8cd739fbdbb2d8f692aaf4f34aa1",
"splash/img/light-3x.png": "dcbb00d22837399cf3a4dd719affa5b3",
"splash/img/light-4x.png": "22e4f6aa065771bf8448d39a9627b02b",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "376afaf212bbe2d5e34893e05b365b8c",
"version.json": "3c6350ff12c68cca61cbc4e13dc8dd4b"
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
