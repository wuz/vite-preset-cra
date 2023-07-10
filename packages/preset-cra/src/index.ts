// import path from 'path';
// import { defineConfig } from 'vite';
// import macrosPlugin from 'vite-plugin-babel-macros';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import react from '@vitejs/plugin-react';
// import checker from 'vite-plugin-checker';

import type { Options } from "@vitejs/plugin-react";
import type { Plugin } from "vite";

import react from "@vitejs/plugin-react";
import envCompat from "vite-plugin-env-compatible";
import svgr from "vite-plugin-svgr";

type CRAPresetPlugin = {
  envPrefix?: string;
  reactOptions?: Options;
};

const craPlugin = ({
  envPrefix = "REACT_APP_",
}: CRAPresetPlugin = {}): Plugin => {
  return {
    name: "replace-cra",
    config: (config, { mode }) => ({
      envPrefix,
      build: {
        outDir: "build",
        assetsDir: "static",
      },
      plugins: [react(), svgr(), envCompat({ prefix: envPrefix })],
    }),
  };
};

export default craPlugin;

// export default defineConfig(({ mode }) => ({
//   test: {
//     globals: true,
//     setupFiles: 'src/setupTests.ts',
//     environment: 'jsdom',
//   },
//   base: mode === 'production' ? '/public/' : '',
//   assetsInclude: ['**/*.xlsx', '**/*.csv'],
//   plugins: [
//     tsconfigPaths(),
//     macrosPlugin(),
//     react(),
//     svgr(),
//     checker({
//       typescript: true,
//     }),
//     envCompat({ prefix: ENV_PREFIX }),
//   ],
//   resolve: {
//     alias: {
//       '@agora/colors': path.resolve(
//         path.join(
//           path.dirname(require.resolve('@agora/common')),
//           './styles/scss/_colors.module.scss'
//         )
//       ),
//       '@agora/size': path.resolve(
//         path.join(
//           path.dirname(require.resolve('@agora/common')),
//           './styles/scss/_size.module.scss'
//         )
//       ),
//       '@agora/mixins': path.resolve(
//         path.join(
//           path.dirname(require.resolve('@agora/common')),
//           './styles/scss/_mixins.module.scss'
//         )
//       ),
//     },
//   },
// }));
//
