export function warpperEnv(envConf: Record<string, string>): ViteEnv {
  let res: any = {};
  for (const key of Object.keys(envConf)) {
    res[key] = envConf[key];
  }
  return res;
}
