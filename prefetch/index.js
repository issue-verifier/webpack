async function a() {
  import(
    /* webpackChunkName: "prefetch", webpackPrefetch: true */
    './prefetch'
  );
  const b = import(
    /* webpackChunkName: "preload", webpackPreload: true */
    './preload'
  );
  b();
}

a();