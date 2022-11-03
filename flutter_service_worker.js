'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "167d1ca5553a8e49c452e404df496470",
"/": "be7ff44e95c40d2de25aebdc79a7cf23",
"main.dart.js": "d8b22c37dc4a42fa622696661e6e5705",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "09952392beec51387dacd1241da3573e",
"assets/NOTICES": "7d6acea68edbabdd8b3a6ad6ac1a47fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4d1875bf9d43c4c551d6e8123ba5abec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons_app/PFP.png": "1f5f40bc97294fe00a8a20326398c758",
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
"assets/assets/screens/PFP1.png": "0bd4d2fa48ab2bac597df48a7e562c21",
"assets/assets/screens/IDontNever1.png": "e52b3cfdf9286f483e946b60dcc1a3f5",
"assets/assets/screens/IDontNever0.png": "491698bb077cdd8a003be384ebdae14a",
"assets/assets/screens/PFP0.png": "1d0eb462c8978514b3db0ea2d8f9f954",
"assets/assets/screens/PowerFit0.png": "1263408cf5821a9273ee0fe097d39da1",
"assets/assets/screens/PowerFit2.png": "2fbedd5415a493aac58adb9f4c3815c8",
"assets/assets/screens/PFP2.png": "1a53c17b945cd288c55c9e7bd541297a",
"assets/assets/screens/IDontNever2.png": "85b2bab994e406aacef88af46125abcc",
"assets/assets/screens/IDontNever3.png": "8dfd7939c4acc5379b51b56271cc493f",
"assets/assets/screens/PFP3.png": "8f49f61b9e437bf48f9a18a99efbba63",
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
"BagmetDenis.github.io/index.html": "be7ff44e95c40d2de25aebdc79a7cf23",
"BagmetDenis.github.io/main.dart.js": "7de05dda59ac8a4b80f09be80a840aea",
"BagmetDenis.github.io/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"BagmetDenis.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"BagmetDenis.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"BagmetDenis.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"BagmetDenis.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"BagmetDenis.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"BagmetDenis.github.io/manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"BagmetDenis.github.io/.git/config": "34c0ccca8b0cfbd4c85786379e730a81",
"BagmetDenis.github.io/.git/objects/61/581ec8e2ae5953da8d43baaa630c0a713e2636": "a18f1a70fda84e0a58798b86421bc631",
"BagmetDenis.github.io/.git/objects/66/dc0528a12f08037680c33daa3f14a6243af47c": "d3b41633516b9e58ee9eb5c0dcdff839",
"BagmetDenis.github.io/.git/objects/3e/6d24a4d3a8b8d9998c21343b318d84d21bb3b0": "d2849072a6e08e0fd76c88eb8893a66c",
"BagmetDenis.github.io/.git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
"BagmetDenis.github.io/.git/objects/9b/848fc99dfb532a2ff39e95c08ddff66a2da063": "4f209e7cd097ffabc73be76cb76927c3",
"BagmetDenis.github.io/.git/objects/32/c85a995569cff8bda5783263875a670d814643": "34013a45341df90a52dfa539b43088e0",
"BagmetDenis.github.io/.git/objects/32/38a7232085b6f58fb81320e39384fa4a580632": "6894edfd46ada27641e40591cc4b7019",
"BagmetDenis.github.io/.git/objects/3c/2b7e64c1745558b0b9f1147d46b2d6a4789109": "5ec80ef54d960932dc374455446700ff",
"BagmetDenis.github.io/.git/objects/0b/1ce502e13d5a07daa01c99d1946c56a4d4faa9": "6d15fb5fea804f8b4f93b3512b6b3f00",
"BagmetDenis.github.io/.git/objects/93/50335cf02a2ddd6ed989562bac309585eaadb3": "ae18e35c8ce4c285b9b3a42f443ab563",
"BagmetDenis.github.io/.git/objects/94/002681a3f49817be2f42322a7a260dac4e642f": "8bf096eb6600eb5f3ffc3491e59f7212",
"BagmetDenis.github.io/.git/objects/94/43888fc6e432afd316af549309b4ef01ef98c7": "a89cbf49b1dc9530e6e9664d4409b718",
"BagmetDenis.github.io/.git/objects/0e/fc647c178e73756b6a32995fa7a70a8c589028": "9e1bd5e0da69d3cb543e260a0ef23474",
"BagmetDenis.github.io/.git/objects/02/57f0a9084bae3e440beb4ff985c22e91fb7bbe": "5b3e8cc1137265c1114b475a21fb3d2c",
"BagmetDenis.github.io/.git/objects/a4/871f9faa7a4e880db9cfc46ac8da34352d6f5c": "df7a817ba6e002e7661ca7d2861c76eb",
"BagmetDenis.github.io/.git/objects/a4/690720117e3433328f68b440f7616463aab2ec": "8767a0290fc6065631d6d2ad7586ea20",
"BagmetDenis.github.io/.git/objects/ad/920a5084d589684ce418e2040aff7320f5f2fd": "e95ba65d1254e7c1c55270cb6669908c",
"BagmetDenis.github.io/.git/objects/d7/affb1d3d552a4ed29bd45e96cca4edef3de8fe": "5e9baa746fb43a99fa6c0638970de765",
"BagmetDenis.github.io/.git/objects/df/010b1eb2cb1b82a654140da666c757b70f4aa8": "322b34dc044d2cde3d282e2699a1c033",
"BagmetDenis.github.io/.git/objects/b4/5d0196aede0a8d6ad5af9647403d80c6911514": "5c26e8d09936b5c578e3816a78a6a76d",
"BagmetDenis.github.io/.git/objects/d6/928a905535f47fd352775eb81828b8d3cb38c3": "0d798d93ebeea2764f9d9380d9e58a62",
"BagmetDenis.github.io/.git/objects/ab/c7f38f49e8f04247100b74f6fcf52b7dd034f8": "73366787cf8ff6a19ff1770ca8bb51bc",
"BagmetDenis.github.io/.git/objects/e2/9e9930d144d0028c07ef159d09c717fd17251f": "cbd283c4d9887e171034cd4b4e372461",
"BagmetDenis.github.io/.git/objects/c9/389d6bb45ac5d160b8a83e9f669e14698189e2": "f50d5d8e7f9d99897dea436a00283156",
"BagmetDenis.github.io/.git/objects/fe/4b6c80f8fa3327b416ef2aa92d318147c95ea0": "6c35b93f1317c10a4ef952081fdd8841",
"BagmetDenis.github.io/.git/objects/c8/0d7ddf65755d143b5da5a39ba52af47d53b354": "b712ef78070b09f13f731eea5611b86f",
"BagmetDenis.github.io/.git/objects/fb/56b55def0b8a57d5a5b91ebd549119411d1f21": "f78638d99ebae88962f58edf514cbeea",
"BagmetDenis.github.io/.git/objects/c1/464a27f5e43617352912126168b01a06ea47bc": "45d0e3c37e0510de008a9a2aadd64aee",
"BagmetDenis.github.io/.git/objects/ec/6005a51e5f1d3db1180fdebe04e2b3c492def4": "c6ff61278b35e1453e1693691a7a2fef",
"BagmetDenis.github.io/.git/objects/4e/3264f5ebb352e5046270594e66981bcb62dff7": "12887e91e6d7a5261f57cd041ef10854",
"BagmetDenis.github.io/.git/objects/pack/pack-1724f0edb8309fee785db03391c6b6cf4ba60e81.idx": "007b8d133d680efdcbb48c8e8ded791f",
"BagmetDenis.github.io/.git/objects/pack/pack-1724f0edb8309fee785db03391c6b6cf4ba60e81.pack": "0cb83293fede96932a58f370a25cb218",
"BagmetDenis.github.io/.git/objects/45/0ddd7d42527b047694a8750b512929d60fbfa3": "e7ab86295d5389e3af4451a2648d93a4",
"BagmetDenis.github.io/.git/objects/45/a7ebab377d23a6e9849a5698a9d6a9a64bdcb8": "846d597a1460440744c327d1234b306e",
"BagmetDenis.github.io/.git/objects/87/6268b65032c885f38ae8279582844503de2cc4": "ac01f244fc2d12a29e284e9f21169fa6",
"BagmetDenis.github.io/.git/objects/7b/e3b538f321aeb1c4f791ee1b56400ba1a7c44e": "f6d9a1fb9f1232b2d8d91d3fb080b1a6",
"BagmetDenis.github.io/.git/objects/7b/5a1966b81af628f00884cc59c8793be57b919d": "e3dd868b20a0bc125ac7e07ff54da852",
"BagmetDenis.github.io/.git/objects/81/326243166a3ac770bb527b73efe294abb2d36f": "fda80927c6200fcbd664d7335560049f",
"BagmetDenis.github.io/.git/objects/5d/fd51db05fe2669b572fd95becb667a4d7a1581": "e78bb040f454aff6b6c229b5f9eb6f91",
"BagmetDenis.github.io/.git/objects/65/b35e168e50e34f3a7f12aac9ccfa68e39f4749": "d7e6a0b078ee881b0115c2ec641c9c64",
"BagmetDenis.github.io/.git/objects/30/e981711c2d77d719d684387697d745169337c5": "f706552ee83a6488a183a0d8d3411745",
"BagmetDenis.github.io/.git/objects/30/9b4ba6ef260073d4ac5c3b861ed3e6cda37919": "9a9a6f352e9bb2198ceaa51643543ce4",
"BagmetDenis.github.io/.git/objects/5b/7c5b4c2bb69213c50e445310e04a4889894691": "1d16ce52683a893b2231ac8f048975c5",
"BagmetDenis.github.io/.git/objects/39/3027b7e8e5c35f415ac3f423a00de4918ad355": "5413ef1ea82321b8da7458201a9c7ff1",
"BagmetDenis.github.io/.git/objects/0f/3d8e5d96e4d41e9efb625ad482f6159c0ae893": "6270d03836330c7595b68ef3e82d3152",
"BagmetDenis.github.io/.git/objects/d4/9ba9c65b4f7feea7cd2819bf9cb0c9d258f44b": "f6d8b3fc1c359d54db9b0b22a75d60c6",
"BagmetDenis.github.io/.git/objects/b8/7a01f4d8f4c41cf9cd0f955533ec4064493bfe": "0fd75e2a13eab89c0884b4ef5929c487",
"BagmetDenis.github.io/.git/objects/dc/eaf1f1f7a524ad15c036c21a7304ec36d75f38": "a7c976e667f97c4f38d0c8fececae239",
"BagmetDenis.github.io/.git/objects/a8/fb4bae22f69e67e262d7002501d513affcba75": "893099d1e7eb48fcabc31da348080627",
"BagmetDenis.github.io/.git/objects/a1/454235ddc0a1cdf5869b38dd185243b0e64fc5": "31beb8abe460cb55af2e0e8c76de2070",
"BagmetDenis.github.io/.git/objects/f6/110c9f5ee23ac6ac4d08ded09fce438ee989dd": "d45218a45b89d5014b52fd94466a5ee7",
"BagmetDenis.github.io/.git/objects/f8/7a314229fe383aac27b54298d27c11f66f8512": "5d54ba046a77845e118300a0ee841191",
"BagmetDenis.github.io/.git/objects/ce/e37826b4ff5f306adc702a0f0c661f7eacebdc": "b6fd6cdaff27cde2f74cd589122b6a25",
"BagmetDenis.github.io/.git/objects/46/deca992b94be13e70f6e52e896d5365fbc5b29": "b4ba3bc0ed0f3bffaf57f43f34de4d42",
"BagmetDenis.github.io/.git/objects/4a/d3352fda81d419a87d481a14a45d5c12475585": "29586f52a1f6f0ef5688826607ed4b67",
"BagmetDenis.github.io/.git/objects/15/6511bb1cd8e8cb78fb54e82e185366252d40ae": "2f54b77e6f497ead17ec8af777072496",
"BagmetDenis.github.io/.git/objects/12/01bd71f53523c6639def909231d27119395158": "e049861993bb6f7ec317c1ebc6374cab",
"BagmetDenis.github.io/.git/objects/71/3cdf80add6d8f8dd00020c4dd55846e95046e1": "ac2b7f4e8353c7095c3c6d8a97d8d759",
"BagmetDenis.github.io/.git/objects/71/e50658c5bb4d4a0a315ce19c4cedb2245c4ed7": "ee1c43f23daaa2078f45a269894d9f1e",
"BagmetDenis.github.io/.git/objects/13/509940ab8920b7846a02399b2ac02570ab9a88": "880f6d6a2ed8088c5967c12649a8e5fb",
"BagmetDenis.github.io/.git/objects/14/fff2bc9249bdb744444d24776587aa36d4a97e": "0eaba61a196722c55b421730df5d9f36",
"BagmetDenis.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"BagmetDenis.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"BagmetDenis.github.io/.git/logs/HEAD": "8f259e1ab61c6da1b816832c76a313fd",
"BagmetDenis.github.io/.git/logs/refs/heads/main": "8f259e1ab61c6da1b816832c76a313fd",
"BagmetDenis.github.io/.git/logs/refs/remotes/origin/HEAD": "f5719f74ad8241138dc96ccccbfa9e54",
"BagmetDenis.github.io/.git/logs/refs/remotes/origin/main": "e48cabfb02f2576ae73d19c1d8c7ccf2",
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
"BagmetDenis.github.io/.git/refs/heads/main": "057824151425dba652291af5fa3615e0",
"BagmetDenis.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"BagmetDenis.github.io/.git/refs/remotes/origin/main": "057824151425dba652291af5fa3615e0",
"BagmetDenis.github.io/.git/index": "80e6923c6b41498f98b435157dd80072",
"BagmetDenis.github.io/.git/packed-refs": "1ad4391c5f6f06551041d6e5c1304d83",
"BagmetDenis.github.io/.git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"BagmetDenis.github.io/.git/FETCH_HEAD": "7336fca7081914c8914b34aaa199ccb9",
"BagmetDenis.github.io/assets/AssetManifest.json": "9e71bbc8325e7b7057a88fc7dcdd9c06",
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
"BagmetDenis.github.io/assets/assets/screens/PowerFit4.png": "30bfceeeafa728c1303d6db3b46f03eb",
"BagmetDenis.github.io/assets/assets/screens/IDontNever4.png": "4bc626b2d3cebdcf18736ce79676b126",
"BagmetDenis.github.io/assets/assets/screens/IDontNever5.png": "7171aa2a38133a5f0f3b5c3ff0d17fc0",
"BagmetDenis.github.io/assets/assets/screens/PowerFit5.png": "46e71405fbe4d34cc78cb5fd406d464c",
"BagmetDenis.github.io/assets/assets/screens/PowerFit1.png": "f1bddfe5b69df1c3c322661b79bc0c85",
"BagmetDenis.github.io/assets/assets/screens/IDontNever1.png": "e52b3cfdf9286f483e946b60dcc1a3f5",
"BagmetDenis.github.io/assets/assets/screens/IDontNever0.png": "491698bb077cdd8a003be384ebdae14a",
"BagmetDenis.github.io/assets/assets/screens/PowerFit0.png": "1263408cf5821a9273ee0fe097d39da1",
"BagmetDenis.github.io/assets/assets/screens/PowerFit2.png": "2fbedd5415a493aac58adb9f4c3815c8",
"BagmetDenis.github.io/assets/assets/screens/IDontNever2.png": "85b2bab994e406aacef88af46125abcc",
"BagmetDenis.github.io/assets/assets/screens/IDontNever3.png": "8dfd7939c4acc5379b51b56271cc493f",
"BagmetDenis.github.io/assets/assets/screens/PowerFit3.png": "41d7bbecf41b1e4f01a9a7ae24a0addd",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate0.png": "6c284acebff7d5fb2d4d7a1efea985d0",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate1.png": "3e5955f296eda2e4e76f89ff19a439d3",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga4.png": "2314d4518dd9f83d048900134f15872f",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate3.png": "ed0c0b7102da9d528ca1633371daf856",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate2.png": "aad196e7c16a66ec7fa73a10eec43244",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga5.png": "847f3a587f87f84e33947d13d32dcab6",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga1.png": "bf1e91468836f958f94d5e658107536f",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga0.png": "ec588974d21da8a58aeb481fad9ce491",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga2.png": "50ad5621ee8053d3b17bd64e251223e5",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate5.png": "179121e861c22ab68d40f142e3a4d13f",
"BagmetDenis.github.io/assets/assets/screens/truthOrDate4.png": "6b7331d761d9d293b7ab205411f0acd2",
"BagmetDenis.github.io/assets/assets/screens/FaceYoga3.png": "aa8cdded21576150f126cded2421ffdd",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5854.png": "7541274a21478e4f0a05a03146fef648",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5850.png": "cd46d0e7a684c8b3c693f41624f1d6ec",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5851.png": "df06c01f53c071f602d3342f593e99f3",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5853.png": "0a65b7d448012e1c38a2b685d1475b04",
"BagmetDenis.github.io/assets/assets/screens/Zoloto5852.png": "8dc85aa7312765965cc8c6205e4d6798",
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
