const root = './src';
const dist = './pak64.map';

const Builder = require('./builder');
const fs = require('fs-extra');
const builder = new Builder(fs);

const args = process.argv.slice(2);

if (args.length && args.includes('watch')) {
  const chokidar = require('chokidar');

  const watcher = chokidar.watch(root);
  let working = false;
  watcher
    .on('ready', () => {
      console.log('Initial scan complete. Ready for changes');
      watcher.on('all', async (event, path) => {
        if (!working) {
          console.log(event, path)
          working = true;
          const dats = builder.getDat(root, dist);
          await builder.makePak(dats, dist).catch(e => { });
          builder.copyConfigDirectory(root, dist);
          working = false;
        }
      });
    });

} else {
  const dats = builder.getDat(root, dist);
  builder.makePak(dats, dist);
  builder.copyConfigDirectory(root, dist);
}


