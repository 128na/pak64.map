var fs = require('fs-extra');


// configディレクトリをコピーする
const from = './src/config';
const to = './dist/config';

fs.copySync(from, to);
