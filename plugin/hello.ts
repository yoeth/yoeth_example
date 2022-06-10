import { Context } from 'https://deno.land/x/yoeth@0.2.0/mod.ts'

export function apply(ctx: Context, config: any) {
    ctx.on('message', async (session) => {
        if (session.content === '天王盖地虎') {
            await session.send('宝塔镇河妖')
        }
    })
}