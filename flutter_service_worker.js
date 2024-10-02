'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c3724c49fdb71906ee0042fad829a373",
"index.html": "201fff55ab9da686bfab953846e68597",
"/": "201fff55ab9da686bfab953846e68597",
"main.dart.js": "91b1274dc94667799ac42f33376a303b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "d7fa799becb521b2c612f4319a9125c7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6da57046e80a507c1584c9e038a2bf6c",
".git/REBASE_HEAD": "660bc9d953ae82446b665d1a63d2d985",
".git/ORIG_HEAD": "660bc9d953ae82446b665d1a63d2d985",
".git/config": "6908788d3e979cc117a65f0940c834a6",
".git/objects/61/8e09ee49ab73a96279534876367830972f46d5": "8a2952ca4421a7d99e727e176f0cc3fb",
".git/objects/3e/a23ff53f5da61fa11a046c96ac4f785db2cdad": "dfd585542af462df3cb416c6c4af7fc7",
".git/objects/3e/cd0679167288b25db2205c723c4b1a14325fe7": "4c3cce5bf1c9657fa7636e268b09793b",
".git/objects/50/734727df16fb7c7ef0a12d6695b3bfc5468f6b": "d8b3e75838be6a803e5d78be1956ab01",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9e/3bccda2c3813bf6f3483f953e10c9c76ee3cab": "bc06db564a7f103a6ee4fa9d9405750e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/67/ca2982c6f54c22b8bad64111c411122fe4d7bd": "d7c2dd5f9313abef72b7b89afe9e9a3e",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c029ca0eea0fb6b0961b392dee188f6f83eedc": "84a07ca66098d1eb7203622c8ba97d91",
".git/objects/5f/315bb7ec3f8543e59e03ab163b343d0972d3c6": "cf6b05100d87eeba84d5d91884307af1",
".git/objects/33/af729302d17f1e2175c8893e2661653cbbbd09": "9ee20fbf7cdfc120e53d099ad0f269dc",
".git/objects/33/fa59f7566320ed5d74f0b5030ea78f8dc2e996": "7e62d50096f40d3104d9545cbc292de7",
".git/objects/33/7c6858eb6de91ee0364a1d6a69c2f0c211ce3b": "fac38b9d402322aa7c1268af71d2a187",
".git/objects/a4/2f6da86a1ce650f1b0d0c0543266e5ab13e5f5": "62caf8c2dbafb8c765e2227296b5dc1b",
".git/objects/a4/73222840ee978fbb41d1a71ed230f3713391ec": "708a6e2869f8a827c07b0fba4262e6fa",
".git/objects/a4/aa45d62915110e98b5c728511d74bfe7ff838b": "e11c07e87ef0ccd65d24cf773055cb79",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/069953c11746c62256c81ddd6c0b20772bdf8e": "e061d99496c33533a5a28669cb3bb9a6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/656cc3e60067740ccd876b7d8c93340fba52ca": "1be91b6f3ffe2793f0cf021be41eaa1b",
".git/objects/be/f5098e13093802a1fb1b38717d676197fa04c5": "b4576746ab137f15cfdf885fab8a6069",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/9eb06daa488b3ab173251fc89b45d985ab8833": "7cc3d502a7562e7515757a8694f95e6f",
".git/objects/a5/a5abeb0ea8a5e4dba2e329bece158713cf1bed": "14e281927c4d15f3f208cb1a4609b80a",
".git/objects/bd/9ada6fd1b0d7b828588792a355c7c30e7e95c5": "b3bc75d278fadfb1e2c9527f3fdc7f4b",
".git/objects/d1/52933c49b21ff20f592d42c5b950076cc9c0dc": "21ab684ded268ebc04ce4534c98e74cf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/e5/b5177e28990e15a9015f4f6a0e867d046c0142": "ed6a7b424542d49bb98bb0755fd9441e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/1faea65ae414f16f5f0a2ea8c5e681973ea771": "e93aafc6395bdf6c13c3e2001c3806b7",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/3ce481e9fa9200e3f06e401c4d2f79b6e9b2fb": "5c6104a970d948a86aa4845c2f64df0d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3995ef86873cff3f1db3302c6c4c270cf20a1d": "fa5cff89993aff2d0ced079ee3d92a92",
".git/objects/f5/1ac8a5edc67db172418e93d32ecac2d1cfdd87": "ff33b260157d42a013e058078f84eb4e",
".git/objects/cf/da651530b45c9bc47f3de0a7352647855415d9": "b3326894d321c48cbb45743389a1ba88",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/c1cfebe1ec13cc62d5a3fcde0416ed7814a88d": "acc53ee72ee2b15e49b250ae2cfb3753",
".git/objects/e4/2a6883c14e9e114ee423a24924da47aec4cd29": "3aca3990b72bb7b943ec1507b8a53f00",
".git/objects/c8/7f2b88ffdbe5b01d17ab0464a28d194362d3cd": "7ba0458e2e2be90b79197faac55f7295",
".git/objects/c8/cff6d5324ba687ba26444761c60da0441a399b": "ed6a407c32fb037ab1886af441278555",
".git/objects/c8/775a612a7ae616cba26335cc3ca60db4f9a13e": "1eba88ab73285eff39c3547e188547f5",
".git/objects/ed/e4864b22c630b36beed3e9627a7e4c0ff17af6": "29e4cebf91f61d433447b825a9096b38",
".git/objects/ed/7e6de38fb67da7ef949e1e48b78270b6d30e44": "2547d3ebf9142490d651b428aed8c50a",
".git/objects/c1/ed0dbfbc62d8d9ae79bf4409715ed4cdc4463c": "86f483657a10a3e8b14500eda877016e",
".git/objects/c6/a5337a5760efedb888ef2ee79e58e7420ebf58": "62bc88f7464f5e8b31cd02b746f771e9",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/5a6a27c16253f92ff507670677e3ad05114c63": "65e0233b340c3bb0f4e35fb6fff19fbc",
".git/objects/27/84d545399e09d6ff29a412ed2e4caad2a9becd": "9c77c1abe22100a1bb3d94eb21c6d444",
".git/objects/4b/7c9d505b045f9bce4b1d4d312c65d4bf078763": "a3c5e3e855c52a1ed5529b1a87377d19",
".git/objects/11/fe787961837427b886b8f2b76c33b5a73a3f27": "0e7483ebd10985f2f1e61aaf8b4f68c3",
".git/objects/29/12d7869e8df9ce8d0d2373ad5b258b910b5e37": "a9d32163cb35de6ccd0a646861bb0dea",
".git/objects/29/449302581efe328b0bbb54fddfbefde386c341": "63e11b27d0d6bb115be40d4794503066",
".git/objects/29/d7df93286e13db5272f377f736399dd6cbf660": "ab7353edc426d2888707094ef2160f2b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/80/dfe571590a1ff94f18209a26640e3e9c331b88": "c5b5f994133531394b73d8db07a281c9",
".git/objects/17/63a909c8bc420ca83e508e2e81b6056cb1aa04": "798e6e4b72c3b281d0f078ed640a0f8d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/86/f04205e98166eb2981381ab77856617d857cfd": "365077966415cc92439ae2fc2e20b728",
".git/objects/72/f3189190799aa2645b3c95e7ba071141c9da03": "142835b177edb4d696cdf73412bbad51",
".git/objects/44/22b798b46686c75ef2d8af3140a32253f6c309": "7df420a2acc6c606a7a0f5308b6bbd53",
".git/objects/44/c2c5c9c288f3f391a00ceefdb0bccfcdb20cf5": "4a035cd61d71a245fe3c8d9db4d34333",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/36/25384f017c52d5e0579fe0d70be301b3888622": "c58cc00988f1e81fe5f84fb5730bbd3e",
".git/objects/31/5231d1ca013e9b91d40b1d07401e0c3ebb6c6d": "fd04b58b29b994b4bbb6789f90b6e211",
".git/objects/31/e24c7c9b37e3ed4945a01bdc46babbf9435589": "d06ea802fe899b4b8ce91f855788757c",
".git/objects/62/85f20a48686eea3a5d6aadae1f9f34fcc86c9e": "d0deb891c533dfa86e18b07953e99b4a",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/53/f736cf40a471cd7431327a2cc674610123c569": "a153ee9d4a38c7751b674ed21e37f226",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/f5ce5e85fe6f6bcd5ef9df2de61a5c81f04a32": "843d9a65e27fd6859c2a3a4448b47a68",
".git/objects/6d/d7061b780d9adc7be6aea0693231a64b4ae562": "4859798bb7ffbf0d5994f70d0674e4ba",
".git/objects/01/080f0f49c59462b3975cc7f89d76004ba1a651": "362d552a161e381834c851837a505cd4",
".git/objects/39/cf3f0f0c4c673a5bfcf2bcc745237036061655": "cdf90f63ea0c538a472d46eb03127a33",
".git/objects/63/021b7a5995d7ddab05b2d874a392e0e678ca97": "26ea17831e0e2d451b0bae94e9604510",
".git/objects/0a/09d0915b1f1f031e2a8ce403f5b8e1364425ee": "7e57e3a1e2ae70257492a003bcee8064",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/cded9eb5708bd295d97a7f0d6858547f946e9b": "0f4a43bbef14d3ddc6b95ca872cf6b59",
".git/objects/d4/45cfc6375529d4a81b191108f9ce5179736787": "5f3a069a9e70301832cac2efa1d2e26e",
".git/objects/a0/6e3e147d306a87490cc208e368505077f68fc1": "530494b6e03ba57c07a3e50bd3428ce5",
".git/objects/a7/6b2fe3f1ce17e7fcd327d0a5915f6741f1f08b": "6dfa35a2090180116435853515d478f0",
".git/objects/a7/be86c4ad33cbe081a34a724c5e2dd22dd9f8c9": "b286ce8a6c8dc448b7a37ea1bf3d2dd8",
".git/objects/b1/f41244604d4ac28ad2b6aa55bbe2421c639309": "494d33947ed7c1464423b782912e9c91",
".git/objects/dd/b9edc826dfc222cc8a2f67114322e7b2069b22": "33eb0de99086d15aaf9feeedf207111a",
".git/objects/dc/bcad53f7d864548b2fcb7119c90e6d4a30a72d": "ddfd586557fc33959ea75fac7edfb6dd",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/dd16c0154de60f1b640014d064a557b44cc102": "2477f3437b350c71596984055d73807d",
".git/objects/aa/27942de57da4e3f5290d2e673c5235c90ea73b": "d55ea02d6fc4c88ef162b406ec19db0b",
".git/objects/af/d246d624aed75883b067aee211058733d297bc": "5db118fe960e6e7bcedb8983ec2171d9",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/02e6d3cc7be81916872f6ad5c4a48d486828e8": "de92743c4371864e43749517691c58d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a17573f40fb52fcb59a9a9dd989fdb1d1fda55": "b78e97d8bdadf04f0c3572914c75eb68",
".git/objects/ef/2e16b2d57aa5ab3880333b19f43658092c5817": "0827cc2ba0ec15ecc20adc9bb28d4529",
".git/objects/e1/c5c185e224900c1097d332bcbdc0edabd213b9": "cea2746ca8eb8d8e3f67aa891e9a9e1d",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/ff21d6e94a0565832b5ae6a9b6dec3d8e0a217": "e2ce8c65c4a6ff95a25d333bb5f6b3a1",
".git/objects/e6/4cdd1d034b720b4b71ab5f5e15c187075bf967": "26c70bfcb25694da23b91fdcba7003b1",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/a9f2f479cdfed1581d75c895b62b0895e03a4c": "59e42d4ad1002587ae4d00e765736e11",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/80957a731c99b0f71b1c4eeee3f5fb6a99b6d0": "efe6d053ffc936bce7c51cf9a47cf95d",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/0474c26d5b2a988fb7b3a29c729472a2c21359": "f9528ae6d0d8a0537c83f64db568a827",
".git/objects/f8/eb9eb1f44ae3813fa4c43e5af00c34e60803e5": "492b0a950feb48229dc3bd00def44d4d",
".git/objects/f8/563ead71a567593a6632d3b5d5582805d001c2": "c90cd50309c403acc8038693e5421a38",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/35ad6cf39623b6b10728d6c934013e3d2add9a": "aedc10ab39ad31e5818065a9715b57e3",
".git/objects/83/7536a12ace298fc8a965324c6330ac7dedbf33": "10e19ef823065ea880da1612ca5a48ef",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/407ea4475ce24bea87b1466851e0f0820fac94": "d24b676c817a9df8675d85643e569d23",
".git/objects/77/63fc3ab29986cf397d9a8ec2ac5961d153a56e": "1b6622c4162926747393374fe18228c3",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/aeed3c1468c2e0a04aecc0a879f32e9bd7e888": "e15f9fd13a037022f692d12a7ac43a74",
".git/objects/8c/0cf16c3535cd312179f54929a10429cd05b2cb": "2f4a9e224ac028065c9dc63c29629481",
".git/objects/85/bda8dd23a1c3af508a8adf1a127ff50c727646": "0fedfc68317b15d7e93bc9e63d5de36e",
".git/objects/1d/e01f5ff1d10538e242b41243c8b1bb94de38f8": "201a63e9fb45aec29be9190cacecc632",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/f66b7660c1cdee9cf95917e2581f5fca93dec7": "ad6a3b8efe84046a9b0a4d95cc42ac04",
".git/objects/40/2891f4086f292e131449c550dda97f6407083d": "afe3adaaf02ee5510058fd72f0e43fb6",
".git/objects/2e/a2325f8661e7f138e3b2252860f60f0eb12be6": "70404472b8b70810501054ba272d9f36",
".git/objects/7f/f14edd738a6f0313cf943183a5218deb093f7e": "4238f5240671518d9ebac7f3cc639135",
".git/objects/8e/d0e347ba9047e8408f2799b6e88e37d38d0bb0": "da71c4ee41a69c7928c07358ab85b684",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "627c180ce72a684932013b4faf65dfb0",
".git/logs/refs/heads/main": "21001151611148c75e71338d688c6afd",
".git/logs/refs/remotes/origin/main": "5e989012239eb165d6be82ae6bd1dd3c",
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
".git/refs/heads/main": "1ae0578ea23a12a483bd54b7b40fe862",
".git/refs/remotes/origin/main": "1ae0578ea23a12a483bd54b7b40fe862",
".git/index": "a7daa72d1cd086c6c6252b68f02f933e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "2cc2c42133bb8b2ce99e16ce606e2f5b",
".git/FETCH_HEAD": "f393720fc0984ced1cc26578372ada37",
"assets/AssetManifest.json": "aec9ccc619173c274bc74b7f4de98a96",
"assets/NOTICES": "0adf88dc94829ffe28279f25932e3a0a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1de1e6148b4ce8a7e05402a31a882f15",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f047fd7f9b0d7e1fd6ee3ab26766e44e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/background2.jpg": "1e55ea1e72540a85bc74b92f36f04782",
"assets/assets/background3.jpg": "e22490a6f42d0825bd51c6b279f82d28",
"assets/assets/background1.jpg": "25a2258262bc00338da24211360c5fd7",
"assets/assets/angus.jpg": "18008c864c501a7cc048a7495c63bb4f",
"assets/assets/instagram.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/Github.png": "9fba36acc5e9518f8354f0894751dc4a",
"assets/assets/profilepic.jpg": "6224b56d4913b9c4382a4c37b34e8ee3",
"assets/assets/cv1.png": "5de997ca2ece7ff82929996d4ce79f25",
"assets/assets/folder.png": "d60a0e1ee23b83722ae6f16b7897268c",
"assets/assets/LinkedIn.png": "4126fcbc9ef55d94a3820e5c54ed1ac4",
"assets/assets/facebook.png": "7c8d991e8a2be6abd4986c3e00c35aec",
"assets/assets/cv.png": "e56dba771c63efb8973c8332d0a2264d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
