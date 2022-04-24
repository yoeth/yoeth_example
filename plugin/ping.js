export function apply({ session, config }) {
  if (session.content === "天王盖地虎") {
    session.send("宝塔镇河妖");
  }
}

export const type = "message";
export const name = "ping";
