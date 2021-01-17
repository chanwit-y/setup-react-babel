# React setup webpack and babel 

## Ref
- [How to React with Webpack 5 - Setup Tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup)

## 1. Install babel

```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```

## 2. Add .babelrc

```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react" 
    ]
}
```

## 3. Install webpack and react hot loader

```
npm install webpack webpack-cli webpack-dev-server react-hot-loader --save-dev
```

## 4. Install react

```
npm install react react-dom
```

## 5. webpack.config.js

```
module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        ues: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  devServer: {
      contentBase: path.resolve(__dirname, './public')
  }
};
```