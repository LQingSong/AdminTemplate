import { defineConfig, loadEnv, UserConfig } from "vite";
import { createVitePlugins } from "./build/vite/plugins";
import { warpperEnv } from "./build/utils";
import pkg from "./package.json";
import dayjs from "dayjs";

// command 默认开发环境下为 serve
export default defineConfig(({ command, mode }): UserConfig => {
  const envDir = "./envConfig";
  const env = loadEnv(mode, envDir);
  const { VITE_APP_ENV, VITE_PORT } = warpperEnv(env);

  const { dependencies, devDependencies, name, version } = pkg;
  const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  };

  return {
    // base 如果你的项目不是部署在项目的根路径上，需要修改成/dir/, dir为你对应的目录
    base: VITE_APP_ENV === "production" ? "/" : "/",
    plugins: createVitePlugins(warpperEnv(env), command === "build"),
    server: {
      open: true,
      port: VITE_PORT,
    },
    // 定义全局常量替换方式
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
