export async function onRequest(context) {
  const { env, request } = context;

  // 使用环境变量
  const secretKey = env.DEMO;

  // 你可以在此逻辑中处理请求并返回响应
  return new Response(`The secret key is: ${secretKey}`, {
    headers: { "content-type": "text/plain" },
  });
}
