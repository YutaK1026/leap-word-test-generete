# query-service

これはreadを担当する。

ここではquery-serviceの実装を行う。

repositoryのInterfaceを`./core`からimportして、DBのデータを読み取り、それを返す処理を行う。

## ディレクトリ構造
```
|- query-service
  |- {domain名}
    |- 
```

### 仕様
なぜuse-caseと分けたか、というと、read->フロントに返す、という処理において、CLIとWebなどで返す型が変わるためである。一方、writeの場合は入力を値オブジェクトに入れて処理するので、入力の形式によらず共通のuse-caseで対応できる。

Repositoryのインターフェースを使用するが、その実態はわからない。当然抽象化している。
必ず依存先は`./core/{domain}`の`...Interface.ts`にすること。Repositoryそのものをimportしてはならない。