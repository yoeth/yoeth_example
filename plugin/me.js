export function apply(context, config) {
    context.on('message', async (session) => {
        if (session.content === 'get_me') {
            const info = await session.bot.action('get_self_info', {})
            console.log(info)
        }
    })
}