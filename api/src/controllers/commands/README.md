# command
`controller`の引数に与えるためのコマンドを定義する。
ここで記述したコマンドを適切な`controller`に与えることで、`controller`がUI層からの入力に問わず、同じオブジェクトを参照して処理すればよいようにする。

## ディレクトリ構造
```
|- command
  |- {domain名}
    |- user-...-command.ts
    |- ...
  |- ...
```

### 仕様について
ここでは、`./core/{domain名}`で定義したCommand Interfaceのimplementを実装する。
implementしたものをcontrollerで使用する。