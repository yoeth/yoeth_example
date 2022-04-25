export const type = 'message';
export const name = 'ping';

export function apply({ session, config, segment }) {
  if (session.content === "天王盖地虎") {
    session.send("宝塔镇河妖");
  }
}
