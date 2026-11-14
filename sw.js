'use strict';
const CACHE_VERSION = 'v2-lokalspeicher';
const SCOPE_URL = new URL(self.registration.scope);
const CACHE_PREFIX = 'angelinventar:' + SCOPE_URL.pathname + ':';
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION;
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'].map(path => new URL(path, SCOPE_URL).href);
const SHELL_URLS = new Set(SHELL);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !SHELL_URLS.has(event.request.url)) return;
  event.respondWith(caches.open(CACHE_NAME).then(async cache => {
    try {
      const response = await fetch(event.request, {cache:'no-store'});
      if (!response.ok) throw new Error('App shell unavailable');
      try { await cache.put(event.request.url, response.clone()); } catch (e) { /* Online access still works when the cache is full. */ }
      return response;
    } catch (e) {
      const stored = await cache.match(event.request.url);
      if (stored) return stored;
      throw e;
    }
  }));
});
