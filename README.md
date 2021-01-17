# React setup webpack and babel 

## Ref
- [How to React with Webpack 5 - Setup Tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup)

## 1. Setup babel react-preset

```
npm install @babel/preset-react
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