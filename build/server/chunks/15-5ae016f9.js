import { e as error } from './index-4dc5572a.js';

async function load({ fetch, params }) {
  const response = await fetch(`/api/admin/guilds/${params.guild}/tags`);
  const isJSON = response.headers.get("Content-Type")?.includes("json");
  const body = isJSON ? await response.json() : await response.text();
  if (!response.ok) {
    throw error(response.status, isJSON ? JSON.stringify(body) : body);
  } else {
    return {
      tags: body
    };
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-537c9360.js')).default;
const universal_id = "src/routes/settings/[guild]/tags/+page.js";
const imports = ["_app/immutable/nodes/15.99bc13de.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.f85387c8.js","_app/immutable/chunks/stores.d0e5ad73.js","_app/immutable/chunks/singletons.561ed816.js","_app/immutable/chunks/paths.10c4ba04.js","_app/immutable/chunks/marked.esm.76161808.js","_app/immutable/chunks/Required.a7e3f80f.js","_app/immutable/chunks/index.1fc5ada0.js"];
const stylesheets = ["_app/immutable/assets/15.e20bbae8.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=15-5ae016f9.js.map
