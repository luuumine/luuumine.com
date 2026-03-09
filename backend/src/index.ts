import { handle as statusHandler } from "./status";
import { handle as musicHandler } from "./music";

type RouteHandler = (req: Request) => Response | Promise<Response>;

const routes: Record<string, RouteHandler> = {
  "/api/status": statusHandler,
  "/api/music": musicHandler,
};

Bun.serve({
  port: Bun.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const method = req.method;
    const handler = routes[url.pathname];

    if (!handler) {
      console.warn(
        `[${new Date().toISOString()}] ${method} ${url.pathname} -> 404`,
      );
      return new Response("Not Found", { status: 404 });
    }

    try {
      const response = await handler(req);

      if (response.status !== 200) {
        console.warn(
          `[${new Date().toISOString()}] ${method} ${url.pathname} -> ${response.status}`,
        );
      }

      return response;
    } catch (err) {
      console.error(
        `[${new Date().toISOString()}] Error handling ${url.pathname}`,
        err,
      );
      return new Response("Internal Server Error", { status: 500 });
    }
  },
});
