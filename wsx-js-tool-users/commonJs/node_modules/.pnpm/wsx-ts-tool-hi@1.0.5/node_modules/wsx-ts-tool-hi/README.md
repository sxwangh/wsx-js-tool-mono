```json
"scripts": {
    "build": "rollup -c", // 打包出 cjs, esm, 和 umd 的包
    "build:types": "tsc"  // 打包出类型文件
},
```
tsc  typescript自带的编译工具 （通过tsc --init来生成tsconfig.json ）


###package.json
```
+ "main": "./dist/index.cjs.js",
+ "module": "./dist/index.esm.js",
+ "types": "./dist/index.d.ts",
+ "files": [
+   "dist"
+ ],
```
files 字段是用于约定在发包的时候NPM 会发布包含的文件和文件夹。

### rollup 打包
rollup -c  自动寻找      rollup.config.js配置文件

### amd的name定义，配置rollup.config.js，来增加打包后的umd.js的模块名称（amd和window下的）
name:  globle的name ，挂在window下

PS： 若使用iife或umd模块打包，需要添加属性moduleName，用来表示模块的名称；若用amd模块打包，可以配置amd相关的参数（使用umd模块模式时，也会使用到amd相关配置参数）：

amd: {
id: 'amd-name',   // amd具名函数名称
define: 'def'     // 用来代替define函数的函数名称
}
使用amd模块打包方式时，若不指定模块名称，则会打包成匿名函数，若想打包成一个具名函数，则需要使用-u或--id来指定具名函数名称。 TODO 如何配置

### ts声明文件生成
rollup-plugin-dts 在rollup中配置
```
 /* 单独生成声明文件 */
    {
        input: './src/main.ts',
        plugins: [dts()],
        output: {
            format: 'esm',
            file: 'lib/types/index.d.ts',
        },
    },
```

### commonjs
![img_1.png](img_1.png)
### esm
![img.png](img.png)