# components
共通化したいコンポーネントを記述する

ヘッダー、ボタンなど

注: ボタンなどについては、型引数などを使用して使いまわし出来るようにする。
```
|- components
  |- Header
    |- parts #Atomic(必要ならば)
    ./Header.tsx
  |- parts #各コンポーネント間で共有したいAtomic部分
    ./~~
```