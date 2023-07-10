"use strict";
// import path from 'path';
// import { defineConfig } from 'vite';
// import macrosPlugin from 'vite-plugin-babel-macros';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import react from '@vitejs/plugin-react';
// import checker from 'vite-plugin-checker';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_plugin_env_compatible_1 = __importDefault(require("vite-plugin-env-compatible"));
const vite_plugin_svgr_1 = __importDefault(require("vite-plugin-svgr"));
const craPlugin = ({ envPrefix = "REACT_APP_", } = {}) => {
    return {
        name: "replace-cra",
        config: (config, { mode }) => ({
            envPrefix,
            build: {
                outDir: "build",
                assetsDir: "static",
            },
            plugins: [(0, plugin_react_1.default)(), (0, vite_plugin_svgr_1.default)(), (0, vite_plugin_env_compatible_1.default)({ prefix: envPrefix })],
        }),
    };
};
exports.default = craPlugin;
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
