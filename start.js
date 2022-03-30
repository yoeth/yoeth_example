import { parse } from "https://deno.land/std/encoding/yaml.ts";

const DATA = await Deno.readTextFile("./config.yml");
const CONFIG = parse(DATA);
const CORE = await import(
  `https://deno.land/x/yoeth@${CONFIG.version}/lib/core/app.js`
);
new CORE.App().start({
  port: CONFIG.port,
  hostname: CONFIG.hostname,
  plugins: CONFIG.plugins,
});

// 关于启动的命令: deno task start