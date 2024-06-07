# repository層

DBに関する処理を記述する。永続化を担当する層。

## ディレクトリ構造
```
|- gateway
  |- repository
    |- test
      |- ./{domain}-repository-spec.ts
      |- ...
    |- ./{domain名}-repository.ts
    |- ...
```
DBを触る処理はドメインごとに共通して使うため、わざわざディレクトリを切って複数ファイルに分割するのではなく、1つのファイルに記述してしまう。

### 仕様について
`./core/{domain}`に配置している`...Interface.ts`をimplementすることが仕事。

依存関係を崩壊させないよう試がける。