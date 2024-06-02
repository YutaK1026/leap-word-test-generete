# features
ドメイン毎に機能をまとめるもの

共通化したい機能を書くのではなく、個別のUIを記述する。
```
|- features
  |- words
    |- components #個々のUIを分割 Atomic designの使用
      ./~~.tsx
    |- hooks #関数などの処理を記述
    |- template #UIをまとめる。Atomic designでいうところの分子レベルにする
    ./Word.tsx
  |- ~~
```