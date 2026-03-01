self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("simpeltoko-v1").then(cache => {
      return cache.addAll([
        "/",
        "/?m=1",  // versi mobile
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCzD78CQTO7mKZOwB75NPRKi4SzfmDMYifleg1PFbQ_e7cgzjt1IAFpXKzwgQVW-rTxHay_YOZ7RImzH9MvIEENgbiRC3DrXG6HFEa02srIMdlsEQjm9mVseaNJnTNi4ax0WNoAtlXc0BNrgHzXLbG0liWPM7-3UmvE8YPHrR47qn_oH7F_eIJgq9bZ9dC/s320/600x600.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

