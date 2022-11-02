import typescript from '@rollup/plugin-typescript';  // 让 rollup 认识 ts 的代码
import dts from 'rollup-plugin-dts'; // 声明文件
import pkg from './package.json';

// 为了将引入的 npm 包，也打包进最终结果中
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window._wsx_VERSION_ = '${pkg.version}'
}`

export default [
    {
        input: './src/main.ts',
        amd: {
            id: 'amd-wsx',   // amd具名函数名称
            define: 'wsx'     // 用来代替define函数的函数名称
        },
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                footer,
            },
            {
                file: pkg.esm,
                format: 'esm',
                footer,
            },
            {
                file: pkg.umd,
                format: 'umd',
                name: 'wsx',
                footer,
            }
        ],
        plugins: [
            typescript(),
            commonjs(),
            resolve()
        ],
    },
    /* 单独生成声明文件 */
    {
        input: './src/main.ts',
        plugins: [dts()],
        output: {
            format: 'esm',
            file: 'lib/types/index.d.ts',
        },
    },
]
