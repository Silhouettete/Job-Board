import { customFileRouter } from "@/services/uploadThing/router";
import { createRouteHandler } from "uploadthing/next";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: customFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});
