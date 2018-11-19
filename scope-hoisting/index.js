import a from './a';

(async () => {
  const { default: res } = await import(
    /* webpackChunkName: 'lazy' */ './lazy'
  );

  console.log(a, res);
})();
