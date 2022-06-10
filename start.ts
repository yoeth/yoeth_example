import { parse } from 'https://deno.land/x/yoeth@0.2.0/deps.ts'
import { App, plugin, bot } from 'https://deno.land/x/yoeth@0.2.0/mod.ts'

interface Config {
    bots?: bot[]
    plugins?: plugin[]
}

const config = parse(await Deno.readTextFile("./yoeth.yml")) as Config

const app = new App()

config.plugins && app.addPluginList(config.plugins)
config.bots && app.addBotList(config.bots)

app.run()

// 关于启动的命令: deno task start
