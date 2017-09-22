# redux-async-todo-sample

React+Reduxで実装したAPIでデータ取得・更新を行うTodoアプリのサンプルです。

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
