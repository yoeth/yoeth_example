export const name = 'ping2'
export const type = 'ctx'

export function apply({context, config, segment}) {
    context.middleware(async (session, next) => {
        if (session.content === '水亦载舟') {
            // 如果收到“水亦载舟”，就回应“亦能覆舟”
            // 我们可以直接发送纯文本
            return '亦能覆舟'
        } else if (session.content === '114') {
            // 也可以发送消息段
            let s = segment;
            return s(s.text({ text: "5" }), s.space(), s.text({ text: "4" }))
        } else {
            return next()
        }
    })
}