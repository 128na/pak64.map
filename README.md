# Pak64.map
<img src="./docs/thumb.png">

G〇ogleMapみたいなパックセットの試作品です。
pak64のアドオンの導入が可能です。

# 導入
**※まだ試作段階のためファイル名などいろいろが変更になる場合があります。**

リリースページから `pak64.map.zip` をダウンロードし、他のパックセット同様にsimutransフォルダに設置してください。 
https://github.com/128na/pak64.map/releases

## 実装状況

|名前|進捗|dat|pak|
|---|---|---|--|
|メニュー|64流用|[dat](./src/dat/menu/all.dat)|menu.all.pak|
|シンボルアイコン|64流用|[dat](./src/dat/symbol/all.dat)|symbol.all.pak|
|カーソル|64流用|[dat](./src/dat/cursor/all.dat)|cursor.all.pak|
|地形（マップ外）|✔️|[dat](./src/dat/ground/Outside.dat)|ground.Outside.pak|
|地形|64,nippon流用|[dat](./src/dat/ground/all.dat)|ground.all.pak|
|misc（地面）|✔️|[dat](./src/dat/misc/all.dat)|misc.all.pak|
|misc（建設中）|64流用|[dat](./src/dat/misc/all.dat)|misc.all.pak|
|建物（住宅）|~3x3まで一部|[dat](./src/dat/building/res.dat)|building.res.pak|
|建物（商業）|1x1のみ|[dat](./src/dat/building/res.dat)|building.res.pak|
|建物（工業）|1x1のみ|[dat](./src/dat/building/res.dat)|building.res.pak|
|建物（本社）|1x1のみ|[dat](./src/dat/building/extra.dat)|building.extra.pak|
|建物（役所）|1x1のみ|[dat](./src/dat/building/extra.dat)|building.extra.pak|
|建物（名所）|公園、駐車場、市場、商店、病院、薬局、レストラン、カフェ、ホテル、名所|[dat](./src/dat/building/cur.dat)|building.cur.pak|
|貨物|✔️|[dat](./src/dat/good/all.dat)|good.all.pak|
|信号|鉄道信号（通常、プレ、分岐）|[dat](./src/dat/roadsign/all.dat)|roadsign.all.pak|
|駅|鉄道駅（両サイド、中央、単線）、バス停|[dat](./src/dat/station/all.dat)|station.all.pak|
|道路|アイコン未実装|[dat](./src/dat/way/road.all.dat)|way.road.all.pak|
|鉄道|アイコン未実装|[dat](./src/dat/way/rail.all.dat)|way.rail.all.pak|

# 開発用
## Pak化
予めnode,npmが使用できるようにしてください。
また、makeobjにパスを通すか、このディレクトリに設置してください。

```
npm install
npm run build
```
`/pak64.map` ディレクトリにpakが生成されます。

### ファイル変更時自動pak化

```
npm run watch
```
dat,configディレクトリ内のファイル変更、追加、削除時に自動でpak化を実行します。

# 参考
64公式、pak.nipponをベースに作成しています（未実装部分はそのまま流用しています）

64公式
https://sourceforge.net/p/simutrans/code/HEAD/tree/

pak.nippon
https://github.com/wa-st/pak-nippon