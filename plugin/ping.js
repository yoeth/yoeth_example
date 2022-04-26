export const type = 'message';
export const name = 'ping';

export function apply({ session, config, segment }) {
  // 如果收到“天王盖地虎”，就回应“宝塔镇河妖”
  if (session.content === "天王盖地虎") {
    session.send("宝塔镇河妖")
  }
}
