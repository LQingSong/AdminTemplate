import vue from "@vitejs/plugin-vue";
import { PluginOption } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export function createVitePlugins(env: ViteEnv, isBuild: boolean = false): PluginOption[] {
  const vitePlugins: PluginOption[] = [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ];
  return vitePlugins;
}
