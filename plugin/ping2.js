export const name = 'ping2'

export function apply(context, config) {
    // 如果收到“水亦载舟”，就回应“亦能覆舟”
    context.middleware(async (session, next) => {
        if (session.content === '水亦载舟') {
            return '亦能覆舟'
        } else {
            return next()
        }
    })
}

export const type = 'ctx'