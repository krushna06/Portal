import { e as error } from './index-4dc5572a.js';

async function load({ fetch, params }) {
  const response = await fetch(`/api/admin/guilds/${params.guild}/settings`);
  const isJSON = response.headers.get("Content-Type")?.includes("json");
  const body = isJSON ? await response.json() : await response.text();
  if (!response.ok) {
    throw error(response.status, isJSON ? JSON.stringify(body) : body);
  } else {
    return {
      settings: body,
      channels: await (await fetch(`/api/admin/guilds/${params.guild}/data?query=channels.cache`)).json(),
      locales: await (await fetch(`/api/locales`)).json(),
      roles: await (await fetch(`/api/admin/guilds/${params.guild}/data?query=roles.cache`)).json()
    };
  }
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a10f886c.js')).default;
const universal_id = "src/routes/settings/[guild]/general/+page.js";
const imports = ["_app/immutable/nodes/12.e4f6316f.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.f85387c8.js","_app/immutable/chunks/stores.d0e5ad73.js","_app/immutable/chunks/singletons.561ed816.js","_app/immutable/chunks/paths.10c4ba04.js","_app/immutable/chunks/index.fa04d723.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.1fc5ada0.js","_app/immutable/chunks/Required.a7e3f80f.js","_app/immutable/chunks/navigation.c171f50b.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=12-43e0d23d.js.map
