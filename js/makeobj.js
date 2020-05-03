const root = './src';
const dist = './dist';

const Builder = require('./builder');
const fs = require('fs-extra');
const builder = new Builder(fs);

const args = process.argv.slice(2);

if (args.length && args.includes('watch')) {
  const chokidar = require('chokidar');

  const watcher = chokidar.watch(root);
  watcher
    .on('ready', () => {
      console.log('Initial scan complete. Ready for changes');
      watcher.on('all', (event, path) => {
        const dats = builder.getDat(root, dist);
        builder.makePak(dats, dist);
        builder.copyConfigDirectory(root, dist);
      });
    });

} else {
  const dats = builder.getDat(root, dist);
  builder.makePak(dats, dist);
  builder.copyConfigDirectory(root, dist);
}


