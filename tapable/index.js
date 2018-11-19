const { SyncHook, AsyncParallelHook } = require('tapable');

class Compiler extends SyncHook {
  constructor() {
    super();
    this.hooks = { // 実行された時に処理を行う種類を設置
      run: new AsyncParallelHook(['source', 'chunk', 'hash']),
      done: new SyncHook()
    };
    this.hooks.run.tap('run', (source, chunk, hash) => { console.log('[core]: run')});
    this.hooks.done.tap('done', () => { console.log('[core]: done'); });
  }
}

const compiler = new Compiler(), src = 'xxx', chunk = 'abc', hash = 'def';

compiler.hooks.run.tap('fooPlugin', (source, chunk) => { console.log('[userLand]: plugin')});
compiler.hooks.run.tapPromise('barPlugin', async (a, b) => {
  await new Promise((r) => setTimeout(() => r(), 1000));
});
compiler.hooks.done.tap('completion-message', () => { console.log('[userLand]: done'); });

compiler.hooks.run.promise(src, chunk, hash).then(() => { // 引数を設定
  console.log('finish');
  compiler.hooks.done.call(); // done -> completion-message
});
