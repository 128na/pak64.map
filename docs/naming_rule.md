# obj命名則

## 見かた
- `{foo}`: way_typeなどに合わせて置き換える項目。置き換える内容は各パラメーター説明を参照。
- `(foo/bar)`: fooまたはbarを指定する項目
- `{foo}?`, `(foo/bar)?`: 不要な場合は省略可能な項目
- `dat記述に則る`: 命名不要なもの（貨物やアイコンなど）
- 命名則で同名となる場合は後ろに識別できる名称をつける（bridge-road-highway）

## 一覧

|obj|rule|parameter description(example)|memo|
|---|---|---|---|
|bridge|`bridge-{way_type}`||
|building|`(res/com/ind)-{size}-{tile_count}-{index}`|size:使用タイルサイズ(1x3)<br>tile_count:使用タイル数のうち、建物に占有されるタイル数(2x2においてL字なら3)<br>index: 同一仕様タイル数、占有タイル数の連番(1~)|市内建築物|
|building|`cur-{name}-{size}`|name:施設名(parkibng)<br>size:使用タイルサイズ(1x3)|観光建築物(cur)|
|building|`{type}-{size}`|type:建物タイプ(hq,towなど)|その他特殊建築物|
|crossing|`crossing-{way_type0}-{way_type1}`|||
|cursor|dat記述に則る|||
|good|dat記述に則る|||
|menu|dat記述に則る|||
|misc|dat記述に則る|||
|roadsign|`roadsign-{way_type}-{signal_type}`|signal_type: 通常信号: signal, プレ: pre, 振分: choose, 多閉塞: long, EndOfChoose: eoc, プライオリティ: pri||
|stop|`stop-{way_type}`||道路系停留所(road,water,air)|
|stop|`stop-{way_type}-(side/single)?`|中間用の場合省略可|軌道系駅|
|stop|`depot-{way_type}`||車庫|
|stop|`ext`||駅舎|
|symbol|dat記述に則る|||
|tunnel|`tunnel-{way_type}`|||
|way|`way-{way_type}-(elevated/under/special)?}`|地上の場合省略可||
|way-object|`way-object-{way_type}`|||

