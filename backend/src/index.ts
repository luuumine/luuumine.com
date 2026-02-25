import { getLastPlaying } from "./music";

const server = Bun.serve({
  port: Bun.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const method = req.method;

    console.log(
      `[${new Date().toLocaleTimeString()}] ${method} ${url.pathname}`,
    );

    if (url.pathname === "/api/music") {
      const stats = await getLastPlaying();
      return Response.json(stats);
    }
    return new Response("Not Found", { status: 404 });
  },
});
