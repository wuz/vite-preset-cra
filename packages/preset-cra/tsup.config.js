"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsup = void 0;
exports.tsup = {
    sourcemap: true,
    clean: true,
    dts: true,
    format: ["esm", "cjs"],
    entryPoints: ["src/index.ts"],
    target: "node18",
};
