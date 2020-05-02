const root = './src/dat';
const dist = './dist';

/* 
  datファイル一覧を取得
  src/dir/foo.dat -> dist/dir.foo.pak
 */
const fs = require('fs');
const dats = fs.readdirSync(root)
  .filter(f => fs.statSync(`${root}/${f}`).isDirectory())
  .map(d => fs.readdirSync(`${root}/${d}`)
    .filter(f => fs.statSync(`${root}/${d}/${f}`).isFile() && /.*\.dat$/.test(f))
    .map(f => {
      return {
        in: `${root}/${d}/${f}`,
        out: `${dist}/${d}.${f.replace('.dat', '.pak')}`
      };
    })
  )
  .flat();


// distディレクトリをクリアして作成
if (fs.existsSync(dist) && fs.statSync(dist).isDirectory()) {
  fs.rmdirSync(dist, { recursive: true });
}
fs.mkdirSync(dist);

// pak化
const { exec } = require('child_process');
const successMsg = msg => console.log(`\u001b[32m${msg}\u001b[37m`);
const failedMsg = msg => console.log(`\u001b[31m${msg}\u001b[37m`);
dats.forEach(dat => {
  const cmd = `makeobj pak64 ${dat.out} ${dat.in}`;
  exec(cmd, (err, stdout, stderr) => {
    console.log(cmd)
    if (err) {
      failedMsg(stderr);
      return
    }
    // successMsg(stdout);
  });
});


