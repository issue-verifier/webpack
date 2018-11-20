async function a() {
  import(
    /* webpackChunkName: "prefetch", webpackPrefetch: true */
    './prefetch'
  );
  const b = await import(
    /* webpackChunkName: "preload", webpackPreload: true */
    './preload'
  );
  b();
}

a();