# use-case層

これはwriteを担当する。
ここではuse-caseの実装を行う。

`./repository/{機能}`, `./use-case/{domain}/`などを組み合わせ、機能を実装する。
Commandの値オブジェクトは`./core`に書かれているため、必ずそこをimplementする。implementするのはこの層の仕事。

## ディレクトリ構造
```
|- use-case
  |- {domain名}
    |- ./user.use-case.ts # nest.jsの使用通りに
    |- ./user.create.ts # create()の処理を記述するなど
    |- ...
  |- ...

```

use-caseでは、ドメインのCRUDを記述したり、ドメインの持つべき機能を記述する。
厳密にいえば、ドメインの機能を具体化する。

Repositoryのインターフェースを使用するが、その実態はわからない。当然抽象化している。
必ず依存先は`./core/{domain}`の`...Interface.ts`にすること。Repositoryそのものをimportしてはならない。

また、use-caseの引数に与えるCommandについても同様である。これも`.core/{domain}`でInterfaceを定義するため、それを使用する。implementは`./controller/command`で実装する。