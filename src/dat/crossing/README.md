# 踏切一覧

type0が遮断される側

**※道路、鉄道、運河、モノレール、リニア、ナローゲージ**の順で指定しないと速度での踏切出し分けが利かない

|実装|type0|type1|説明|
|:---:|---|---|---|
|✔|road|narrowgauge_track||
|✔|road|track|在来線、JR線、新幹線|
|✔|road|water||
|✔|track|narrowgauge_track|在来線、JR線、新幹線|
|✔|track|water|在来線、JR線、新幹線|
|✔|water|narrowgauge_track||
|✔|water|monorail_track||
|✔|water|maglev_track||
