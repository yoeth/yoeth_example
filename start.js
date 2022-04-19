import { parse } from "https://deno.land/std/encoding/yaml.ts";

const CONFIG = parse(await Deno.readTextFile("./yoeth.yml"));
const YOETH = await import(
  `https://deno.land/x/yoeth@${CONFIG.version}/lib/mod.js`
);
new YOETH.App().start({
  bots: CONFIG.bots,
  plugins: CONFIG.plugins,
});

// 关于启动的命令: deno task start
