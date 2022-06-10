export function apply(context, config) {
    context.on('message', async (session) => {
        if (session.content === 'hello') {
            await session.send('你好')
        }
    })
}