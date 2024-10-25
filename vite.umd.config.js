// 打包 UMD 模块所用的配置文件
import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve,
  dirname
} from 'node:path'

const __dirname = dirname(fileURLToPath(
  import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  },
  publicDir: 'empty',
  build: {
    outDir: 'dist/umd',
    // 和库相关的
    lib: {
      // 打包的入口文件
      entry: resolve(__dirname, 'src/bundle.js'),
      name: 'ZHPlus',
      fileName: 'ZH-plus',
      // 打包的格式
      formats: ['umd']
    },
    // vite内部使用的是rollup，所以可以配置rollupOptions
    rollupOptions: {
      // 需要排除的模块，因为这个是针对整个工程打包的，所以需要排除掉
      // 使用cdn的形式需要将组件库的依赖也引入
      external: ['vue'],
      output: {
        // 可以通过name拿到所有东西
        exports: 'named',
        // 指定了通过什么名字去全局引入这个依赖
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
