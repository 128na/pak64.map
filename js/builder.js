module.exports = class Dat {
  constructor(fs) {
    this.fs = fs;
  }

  /**
   * configディレクトリをコピーする
   */
  copyConfigDirectory(root, dist) {
    this.fs.copySync(`${root}/config`, `${dist}/config`);
  }
  /**
   * datファイル一覧を取得
   * src/dir/foo.dat -> dist/dir.foo.pak
   */
  getDat(root, dist) {
    return this.fs.readdirSync(`${root}/dat`)
      .filter(f => this.fs.statSync(`${root}/dat/${f}`).isDirectory())
      .map(d => this.fs.readdirSync(`${root}/dat/${d}`)
        .filter(f => this.fs.statSync(`${root}/dat/${d}/${f}`).isFile() && /.*\.dat$/.test(f))
        .map(f => {
          return {
            in: `${root}/dat/${d}/${f}`,
            out: `${dist}/${d}.${f.replace('.dat', '.pak')}`
          };
        })
      )
      .flat();
  }

  /**
   * distディレクトリをクリアして作成、pak化
   */
  makePak(dats, dist) {
    if (this.fs.existsSync(dist) && this.fs.statSync(dist).isDirectory()) {
      this.fs.rmdirSync(dist, { recursive: true });
    }
    this.fs.mkdirSync(dist);

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
  }
}

