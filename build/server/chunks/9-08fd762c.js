import { e as error } from './index-4dc5572a.js';

async function load({ fetch, params }) {
  const response = await fetch(`/api/admin/guilds/${params.guild}/categories`);
  const isJSON = response.headers.get("Content-Type")?.includes("json");
  const body = isJSON ? await response.json() : await response.text();
  if (!response.ok) {
    throw error(response.status, isJSON ? JSON.stringify(body) : body);
  } else {
    return { categories: body };
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fd6f2928.js')).default;
const universal_id = "src/routes/settings/[guild]/categories/+page.js";
const imports = ["_app/immutable/nodes/9.33862c10.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.f85387c8.js","_app/immutable/chunks/index.36334e2f.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=9-08fd762c.js.map
