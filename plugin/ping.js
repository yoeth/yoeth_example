export default function ping({ session, config }) {
  if (session.alt_message === "天王盖地虎") {
    session.send({ message: "宝塔镇河妖" });
  }
}

export let type = "message";
