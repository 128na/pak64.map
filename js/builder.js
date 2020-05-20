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
    const reg = /\d+/;
    return this.fs.readdirSync(`${root}/dat`)
      .filter(f => this.fs.statSync(`${root}/dat/${f}`).isDirectory())
      .map(d => this.fs.readdirSync(`${root}/dat/${d}`)
        .filter(f => this.fs.statSync(`${root}/dat/${d}/${f}`).isFile() && /.*\.dat$/.test(f))
        .map(f => {
          const tmp = f.split('.');
          const size = reg.test(tmp[tmp.length - 2]) ? tmp[tmp.length - 2] : 64;
          return {
            size,
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
    const successMsg = msg => console.log(`\u001b[32m${msg}\u001b[37m`);
    const failedMsg = msg => console.log(`\u001b[31m${msg}\u001b[37m`);
    if (this.fs.existsSync(dist) && this.fs.statSync(dist).isDirectory()) {
      try {
        this.fs.rmdirSync(dist, { recursive: true });
        this.fs.mkdirSync(dist);
      } catch (e) {
        failedMsg('refresh directory failed')
      }
    }

    const { exec } = require('child_process');
    const promises = dats.map(dat => {
      const cmd = `makeobj pak${dat.size || 64} ${dat.out} ${dat.in}`;
      return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
          if (err) {
            console.log(cmd)
            return reject(stderr);
          }
          return resolve(stdout);
        });
      })
    });

    return new Promise((resolve, reject) => {
      Promise.all(promises)
        .then(stdouts => {
          successMsg('success');
          resolve();
          // successMsg(stdouts);
        })
        .catch(stderrs => {
          failedMsg(stderrs);
          reject();
        })
    });

  }
}

