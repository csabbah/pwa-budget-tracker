const APP_PREFIX = 'BudgedTracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  './index.html',
  './js/idb.js',
  './js/index.js',
  './css/styles.css',
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    // Use caches.open to find the specific caches by name, then add every file from the FILES_TO_CACHE
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
