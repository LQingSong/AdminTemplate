import { defineConfig, loadEnv, UserConfig } from "vite";
import { createVitePlugins } from "build/vite/plugins";
import { warpViteEnv } from "build/utils";
// command 默认开发环境下为 serve
export default defineConfig(({ command, mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;
  return {
    base: VITE_APP_ENV === "production" ? "/" : "/",
    plugins: createVitePlugins(warpViteEnv(env), command === "build"),
    envDir: "envconfig",
  };
});
