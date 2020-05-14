# 実装状況及び定義

## 鉄道ベース
|実装|way_type|名称|色|基準との比較|
|:---:|---|---|---|---|
|✔|track|在来線|<div style="color:#a0a0a0">■ #a0a0a0</div>|基準|
|　|track|新幹線|<div style="color:#a0a0a0">■ #a0a0a0</div><div style="color:#ffffff">■ #ffffff</div>|地図でよくあるJR線タイプ|
|　|track|placeholder|<div style="color:#f0f0f0">■ #f0f0f0</div>|system_type=255、塗りつぶし|
|　|tram_track|トラム|<div style="color:#b8b8b8">■ #b8b8b8</div>|薄く|
|　|narrowgauge_track|ナローゲージ|<div style="color:#a0a0a0">■ #a0a0a0</div>|細く|
|　|monorail_track|モノレール|<div style="color:#808080">■ #808080</div>|濃く|
|　|maglev_track|リニア新幹線|<div style="color:#ff6630">■ #ff6630</div><div style="color:#ffffff">■ #ffffff</div>|地図でよくあるJR線タイプ|

## 道路ベース

|実装|way_type|名称|ベース色/枠色|基準との比較|
|:---:|---|---|---|---|
|✔|road|一般道路|<div style="color:#ffffff">■#ffffff</div><div style="color:#cccccc">■#cccccc</div>|基準|
|✔|road|幹線道路|<div style="color:#fff2bd">■#fff2bd</div><div style="color:#f6cf65">■#f6cf65</div>||
|✔|road|高速道路|<div style="color:#f6cf65">■#f6cf65</div><div style="color:#ffc66b">■#ffc66b</div>||
|　|water|運河|<div style="color:#86b7dc">■ #86b7dc</div><div style="color:#cccccc">■#cccccc</div>||
|　|air|滑走路|<div style="color:#f3f4f5">■#f3f4f5</div><div style="color:#cccccc">■#cccccc</div>||
|　|air|誘導路|<div style="color:#ebebeb">■#ebebeb</div><div style="color:#cccccc">■#cccccc</div>||