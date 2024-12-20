// functions/api/key.js 必须在正确的位置
export async function onRequest(context) {
  // 添加调试日志
  console.log("API endpoint called");

  // 返回明确的状态码
  return new Response(
    JSON.stringify({
      status: "success",
      key: context.env.API_KEY,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
