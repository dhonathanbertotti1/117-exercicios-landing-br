import { auth, defineMcp } from "@lovable.dev/mcp-js";

import getOfferTool from "./tools/get-offer";
import listPlansTool from "./tools/list-plans";
import searchFaqTool from "./tools/search-faq";

// The OAuth issuer must be the direct Supabase host; the project ref is inlined
// at build time and survives publish unchanged.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "mirror-site-builder",
  title: "Mirror Site Builder",
  version: "0.1.0",
  instructions:
    "Tools for the '117 Exercícios de Mobilidade e Estabilidade' app. Use `get_offer` for the product, bonuses and guarantee, `list_plans` for prices and checkout links, and `search_faq` for customer questions. Content is in Portuguese. Callers must be signed in.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getOfferTool, listPlansTool, searchFaqTool],
});
