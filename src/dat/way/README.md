# 実装状況及び定義

## 鉄道ベース
|実装|way_type|名称|色|基準との比較|
|:---:|---|---|---|---|
|✔|track|在来線|![#a0a0a0](https://via.placeholder.com/15/a0a0a0/000000?text=+) #a0a0a0|基準|
|　|track|新幹線|![#a0a0a0](https://via.placeholder.com/15/a0a0a0/000000?text=+) #a0a0a0<br>![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) #ffffff|地図でよくあるJR線タイプ|
|　|track|placeholder|![#f0f0f0](https://via.placeholder.com/15/f0f0f0/000000?text=+) #f0f0f0|system_type=255、塗りつぶし|
|　|tram_track|トラム|![#b8b8b8](https://via.placeholder.com/15/b8b8b8/000000?text=+) #b8b8b8|薄く|
|　|narrowgauge_track|ナローゲージ|![#a0a0a0](https://via.placeholder.com/15/a0a0a0/000000?text=+) #a0a0a0|細く|
|　|monorail_track|モノレール|![#808080](https://via.placeholder.com/15/808080/000000?text=+) #808080|濃く|
|　|maglev_track|リニア新幹線|![#ff6630](https://via.placeholder.com/15/ff6630/000000?text=+) #ff6630<br>![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) #ffffff|地図でよくあるJR線タイプ|

## 道路ベース

|実装|way_type|名称|ベース色/枠色|基準との比較|
|:---:|---|---|---|---|
|✔|road|一般道路|![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) #ffffff<br>![#cccccc](https://via.placeholder.com/15/cccccc/000000?text=+) #cccccc|基準|
|✔|road|幹線道路|![#fff2bd](https://via.placeholder.com/15/fff2bd/000000?text=+) #fff2bd<br>![#f6cf65](https://via.placeholder.com/15/f6cf65/000000?text=+) #f6cf65||
|✔|road|高速道路|![#f6cf65](https://via.placeholder.com/15/f6cf65/000000?text=+) #f6cf65<br>![#ffc66b](https://via.placeholder.com/15/ffc66b/000000?text=+) #ffc66b||
|　|water|運河|![#86b7dc](https://via.placeholder.com/15/86b7dc/000000?text=+) #86b7dc<br>![#cccccc](https://via.placeholder.com/15/cccccc/000000?text=+) #cccccc||
|　|air|滑走路|![#f3f4f5](https://via.placeholder.com/15/f3f4f5/000000?text=+) #f3f4f5<br>![#cccccc](https://via.placeholder.com/15/cccccc/000000?text=+) #cccccc||
|　|air|誘導路|![#ebebeb](https://via.placeholder.com/15/ebebeb/000000?text=+) #ebebeb<br>![#cccccc](https://via.placeholder.com/15/cccccc/000000?text=+) #cccccc||