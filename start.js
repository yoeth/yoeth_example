const VERSION = "0.0.2";   //  Yoeth 版本
const HOSTNAME = "127.0.0.1";   //  Yoeth 运行域名
const PORT = 8844;   //  Yoeth 运行端口

try {
    const MODULE = await import(`https://deno.land/x/yoeth@${VERSION}/lib/core/app.js`);
    new MODULE.App().start({ port: PORT, hostname: HOSTNAME });
} catch (error) {
    console.error(error.message);
}


// deno run --allow-net --allow-read start.js