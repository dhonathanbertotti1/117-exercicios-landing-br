import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { faqs } from "../content";

export default defineTool({
  name: "search_faq",
  title: "Search FAQ",
  description:
    "Search the public frequently asked questions of the landing page. Omit the query to get every question and answer.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional text to match against questions and answers."),
  },
  outputSchema: { results: z.unknown(), count: z.number() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const term = query?.toLowerCase();
    const results = term
      ? faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(term))
      : [...faqs];
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { results, count: results.length },
    };
  },
});
