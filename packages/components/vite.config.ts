import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'
export default defineConfig(
  {
    build: {
      target: 'modules',
      // 打包文件目录
      outDir: 'es',
      // 压缩
      minify: false,
      // css分离
      // cssCodeSplit: true,
      lib: {
        entry: './index.ts',
        name: 'vapour',
      },
      rollupOptions: {
        // 忽略打包vue文件
        external: ['vue'],
        input: ['index.ts'],
        output: [
          {
            format: 'es',
            // 不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].mjs',
            // 让打包目录和我们目录对应
            preserveModules: true,
            exports: 'named',
            // 配置打包根目录
            dir: resolve(__dirname, './vapour-ui/es'),

          },
          {
            format: 'cjs',
            // 不用打包成.cjs
            entryFileNames: '[name].js',
            // 让打包目录和我们目录对应
            preserveModules: true,
            exports: 'named',
            // 配置打包根目录
            dir: resolve(__dirname, './vapour-ui/lib'),

          },
        ],
      },
    },
    plugins: [
      vue(),
      DefineOptions(),
      dts({
        entryRoot: 'src',
        outputDir: [
          resolve(__dirname, './vapour-ui/es/src'),
          resolve(__dirname, './vapour-ui/lib/src'),
        ],
        // 指定使用根目录的tsconfig.json
        tsConfigFilePath: '../../tsconfig.json',
      }),
    ],
  },
)
