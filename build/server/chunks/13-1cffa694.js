import { r as redirect, e as error } from './index-4dc5572a.js';

async function load({ fetch, params }) {
  const fetchOptions = { credentials: "include" };
  const response = await fetch(`/api/admin/guilds/${params.guild}/categories`, fetchOptions);
  const isJSON = response.headers.get("Content-Type")?.includes("json");
  const body = isJSON ? await response.json() : await response.text();
  if (response.status === 401) {
    throw redirect(307, `/auth/login`);
  } else if (!response.ok) {
    throw error(response.status, isJSON ? JSON.stringify(body) : body);
  } else {
    return {
      categories: body,
      channels: await (await fetch(`/api/admin/guilds/${params.guild}/data?query=channels.cache`, fetchOptions)).json()
    };
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-5454bb79.js')).default;
const universal_id = "src/routes/settings/[guild]/panels/+page.js";
const imports = ["_app/immutable/nodes/13.12570b5e.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.f85387c8.js","_app/immutable/chunks/stores.522abec1.js","_app/immutable/chunks/singletons.f95ae673.js","_app/immutable/chunks/paths.407e1ddd.js","_app/immutable/chunks/index.36334e2f.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/Required.a7e3f80f.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=13-1cffa694.js.map
