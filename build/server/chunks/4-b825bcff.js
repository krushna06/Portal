import { e as error } from './index-4dc5572a.js';

async function load({ fetch, params }) {
  const response = await fetch(`/api/admin/guilds/${params.guild}`);
  const isJSON = response.headers.get("Content-Type")?.includes("json");
  const body = isJSON ? await response.json() : await response.text();
  if (!response.ok) {
    throw error(response.status, isJSON ? JSON.stringify(body) : body);
  } else {
    return { guild: body };
  }
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-084250e7.js')).default;
const universal_id = "src/routes/settings/[guild]/+layout.js";
const imports = ["_app/immutable/nodes/4.c1ec2ec1.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.f85387c8.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=4-b825bcff.js.map
