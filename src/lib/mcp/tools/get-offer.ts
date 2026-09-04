import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { product } from "../content";

export default defineTool({
  name: "get_offer",
  title: "Get offer details",
  description:
    "Return the public offer details of the landing page: product summary, highlights, exercise categories, bonuses and the refund guarantee.",
  inputSchema: {},
  outputSchema: { product: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
    structuredContent: { product },
  }),
});
