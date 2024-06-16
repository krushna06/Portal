async function load({ fetch }) {
  const fetchOptions = { credentials: "include" };
  return {
    guilds: await (await fetch(`/api/admin/guilds`, fetchOptions)).json()
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-194af23b.js')).default;
const universal_id = "src/routes/settings/+page.js";
const imports = ["_app/immutable/nodes/7.a8989e93.js","_app/immutable/chunks/index.f85387c8.js","_app/immutable/chunks/paths.407e1ddd.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=7-b8ee6a68.js.map
