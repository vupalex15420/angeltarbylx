'use strict';
const CACHE_VERSION = 'v1';
const SCOPE_URL = new URL(self.registration.scope);
const CACHE_PREFIX = 'angelinventar:' + SCOPE_URL.pathname + ':';
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION;
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'].map(path => new URL(path, SCOPE_URL).href);
const SHELL_URLS = new Set(SHELL);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !SHELL_URLS.has(event.request.url)) return;
  event.respondWith(caches.open(CACHE_NAME).then(async cache => {
    const stored = await cache.match(event.request.url);
    return stored || fetch(event.request);
  }));
});
