# redux-async-todo-sample

React+Reduxで実装した、APIでデータ取得・更新を行うTodoアプリのサンプルです。

```bash
$ yarn install --pure-lockfile
$ yarn watch # API用サーバとwebpack-dev-serverが起動
```

## 構成

主要なパッケージは以下の通りです。

- yarn
- webpack
- babel
- React
- Redux
- postcss


### 開発環境

react-hot-loaderによるHot Module Replacementに対応しています。

CSSはCSS Moduleを採用し、各Componentで `import` する構成となっています。
extract-text-webpack-pluginは、Hot Module Replacementに対応していないため利用していません。

## 解説

### API

APIは `server.js` にexpressで実装しています。
なお、非同期処理であることを分かりやすくするため、200msの遅延処理をmiddlewareで挟み込んでいます。

## 感想

### CSS Modulesについて

Componentごとにimportすることで、CSS設計で（比較的）頭を使わなくて良くなる一方で、外部のCSSライブラリ（例: https://material.io/components/web/ ）等を利用する場合に微妙な感じになる。

- 外部ライブラリを複数のComponentから利用する場合、ライブラリのコードが重複する
    - CSS Modulesではclass名が重複しないように書き換わり、コードの共有が難しいため、読み込むライブラリのコードが大きいと、importの数だけ肥大化する
    - 外部ライブラリはCSS Modulesからは読み込まないという方法で解決は出来るが、CSSが散らばってしまい一貫性が無くなると思う。
