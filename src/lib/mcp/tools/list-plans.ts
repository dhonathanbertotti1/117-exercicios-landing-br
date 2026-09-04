import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { plans } from "../content";

export default defineTool({
  name: "list_plans",
  title: "List plans",
  description:
    "List the available purchase plans with their price, what each one includes and the public checkout link.",
  inputSchema: {},
  outputSchema: { plans: z.unknown() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(plans, null, 2) }],
    structuredContent: { plans },
  }),
});
