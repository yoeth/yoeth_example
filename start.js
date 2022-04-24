import { parse } from "https://deno.land/std/encoding/yaml.ts"

const config = parse(await Deno.readTextFile("./yoeth.yml"))
const Yoeth = await import(
  `https://deno.land/x/yoeth@${config.version}/src/mod.js`
);

const app = new Yoeth.App()

app.plugin_list(config.plugins)
app.bot_list(config.bots)

app.start()

// 关于启动的命令: deno task start
