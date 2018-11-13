// const str = require('./a');
// import str from './a';

// console.log('start, z');

'aa'
if (module.hot) {
  module.hot.accept(function(err) {
    if (err) {
      console.error(err);
    }

    const str = require('./a');

    // console.log(str);
  });
}