# 実装状況及び定義

## 鉄道ベース
|実装|way_type|名称|色|基準との比較|
|:---:|---|---|---|---|
|✔|track|在来線|![#a0a0a0](https://via.placeholder.com/15/a0a0a0?text=+) #a0a0a0|基準|
|✔|track|JR線|![#a0a0a0](https://via.placeholder.com/15/a0a0a0?text=+) #a0a0a0<br>![#ffffff](https://via.placeholder.com/15/ffffff?text=+) #ffffff|地図でよくあるJR線タイプ|
|✔|track|新幹線|![#a0a0a0](https://via.placeholder.com/15/0000b9?text=+) #0000b9<br>![#ffffff](https://via.placeholder.com/15/ffffff?text=+) #ffffff|地図でよくあるJR線タイプ|
|✔|track|placeholder|![#f0f0f0](https://via.placeholder.com/15/f0f0f0?text=+) #f0f0f0|system_type=255、塗りつぶし|
|✔|tram_track|トラム|![#b8b8b8](https://via.placeholder.com/15/b8b8b8?text=+) #b8b8b8|薄く|
|✔|maglev_track|リニア新幹線|![#ff6630](https://via.placeholder.com/15/dc9200?text=+) #dc9200<br>![#ffffff](https://via.placeholder.com/15/ffffff?text=+) #ffffff|地図でよくあるJR線タイプ|
|✔|narrowgauge_track|ナローゲージ|![#a0a0a0](https://via.placeholder.com/15/a0a0a0?text=+) #a0a0a0|細く、薄く|
|✔|monorail_track|モノレール|![#808080](https://via.placeholder.com/15/808080?text=+) #808080|細く|
|✔|power|送電線|![#808080](https://via.placeholder.com/15/808080?text=+) #808080|細く、濃く|

## 道路ベース

|実装|way_type|名称|ベース色/枠色|基準との比較|
|:---:|---|---|---|---|
|✔|road|一般道路|![#ffffff](https://via.placeholder.com/15/ffffff?text=+) #ffffff<br>![#cccccc](https://via.placeholder.com/15/cccccc?text=+) #cccccc|基準|
|✔|road|幹線道路|![#fff2bd](https://via.placeholder.com/15/fff2bd?text=+) #fff2bd<br>![#f6cf65](https://via.placeholder.com/15/f6cf65?text=+) #f6cf65||
|✔|road|高速道路|![#f6cf65](https://via.placeholder.com/15/f6cf65?text=+) #f6cf65<br>![#ffc66b](https://via.placeholder.com/15/ffc66b?text=+) #ffc66b||
|✔|water|運河|![#86b7dc](https://via.placeholder.com/15/86b7dc?text=+) #86b7dc<br>![#cccccc](https://via.placeholder.com/15/cccccc?text=+) #cccccc||
|✔|air|滑走路|![#f3f4f5](https://via.placeholder.com/15/f3f4f5?text=+) #f3f4f5<br>![#cccccc](https://via.placeholder.com/15/cccccc?text=+) #cccccc|軌道末端を鋭角に|
|✔|air|誘導路|![#ebebeb](https://via.placeholder.com/15/ebebeb?text=+) #ebebeb<br>![#cccccc](https://via.placeholder.com/15/cccccc?text=+) #cccccc||