# features
ドメイン毎に機能をまとめるもの

共通化したい機能を書くのではなく、個々のUIを記述する。

componentsを利用して記述する。
```
|- features
  |- WordList
    |- parts #個々のUIを分割 Atomic designの使用 必要ならば追加する。
      ./~~.tsx
    |- hooks #関数などの処理を記述
    |- presentations #UIをまとめる。Atomic designでいうところの分子レベルにする
    ./index.tsx
  |- ~~
```