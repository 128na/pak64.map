# obj命名則

- {foo}: way_typeなどシステム的な意味を持つ名称
- {foo?}: 1つのway_typeで複数存在するなど識別が必要な場合、追加する名称
- (foo|bar): fooまたはbar
- 命名則で同名となる場合は後ろに識別用固有名詞をつける(bridge-road-highway)
- dat記述に則る：命名不要なもの（貨物やアイコンなど）

|obj|rule|parameter description(example)|memo|
|---|---|---|---|
|bridge|`bridge-{way_type}`||
|building|`(res|com|ind)-{size}-{tile_count}-{index}`|size:使用タイルサイズ(1x3)<br>tile_count: 仕様タイル数のうち、建物の設置されるタイル数(2x2においてL字なら3)<br>index: 連番(1~)|市内建築物|
|building|`cur-{name}-{size}`|name:施設名(parkibng)<br>size:使用タイルサイズ(1x3)|観光建築物(cur)|
|building|`{type}-{size}`|type:建物タイプ(hq,towなど)|その他特殊建築物|
|crossing|`crossing-{way_type0}-{way_type1}`|||
|cursor|dat記述に則る|||
|good|dat記述に則る|||
|menu|dat記述に則る|||
|misc|dat記述に則る|||
|roadsign|`roadsign-{way_type}-(signal|pre|choose|long|eoc|pri)`|||
|stop|`stop-{way_type}`||道路系停留所(road,water,air)|
|stop|`stop-{way_type}-(|side|single)`||軌道系駅|
|stop|`depot-{way_type}`||車庫|
|stop|`ext`||駅舎|
|symbol|dat記述に則る|||
|tunnel|`tunnel-{way_type}`|||
|way|`way-{way_type}-(|elevated|under|special)?}`|||
|way-object|`way-object-{way_type}`|||
