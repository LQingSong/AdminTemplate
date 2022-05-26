import vue from "@vitejs/plugin-vue";
import { PluginOption } from "vite";

export function createVitePlugins(env: ViteEnv, isBuild: boolean): PluginOption[] {
  const vitePlugins: PluginOption[] = [vue()];
  return vitePlugins;
}
