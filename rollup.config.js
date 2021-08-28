import nodeResolve from "rollup-plugin-node-resolve"; // 帮助寻找node_modules里的包
import babel from "rollup-plugin-babel"; // rollup 的 babel 插件，ES6转ES5
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace"; // 替换待打包文件里的一些变量，如process在浏览器端是不存在的，需要被替换
import commonjs from "rollup-plugin-commonjs"; // 将非ES6语法的包转为ES6可用
import uglify from "rollup-plugin-uglify"; // 压缩包
import pkg from "./package.json";

const env = process.env.NODE_ENV;

const config = {
  input: "src/index.ts", // 打包入口
  external: ['react', 'redux'], // 告诉rollup，不打包react,redux;将其视为外部依赖
  output: {
    // 打包出口
    file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    globals: {
      react: "React", // 这跟external 是配套使用的，指明global.React即是外部依赖react
      redux: "Redux",
    },
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    babel({
      exclude: "**/node_modules/**",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env),
    }),
    commonjs(),
  ],
};

if (env === "production") {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  );
}

export default config;
