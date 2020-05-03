# Pak64.map
<img src="./docs/thumb.png">

G〇ogleMapみたいなパックセットの試作品です。
pak64のアドオンの導入が可能です。

# 導入
開発用の項目を参考にビルドして導入してください。
まだ試作段階のためファイル名などいろいろが変更になる場合があります。

# 開発用
## Pak化
予めmakeobjにパスを通すか、このディレクトリに設置してください。

```
npm install
npm run build
```
distディレクトリにpakが生成されます。

### ファイル変更時自動pak化

```
npm run watch
```
dat,configディレクトリ内のファイル変更時に自動でpak化を実行します。

# 参考
64公式、pak.nipponをベースに作成しています（未実装部分はそのまま流用しています）

64公式
https://sourceforge.net/p/simutrans/code/HEAD/tree/

pak.nippon
https://github.com/wa-st/pak-nippon