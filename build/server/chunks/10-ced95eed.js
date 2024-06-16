import { r as redirect, e as error } from './index-4dc5572a.js';

async function load({ fetch, params }) {
  const fetchOptions = { credentials: "include" };
  let body;
  if (params.category === "new") {
    body = {
      channelName: "",
      claiming: false,
      description: "",
      discordCategory: "new",
      enableFeedback: false,
      emoji: "",
      image: "",
      memberLimit: 1,
      name: "",
      openingMessage: "",
      pingRoles: [],
      questions: [],
      ratelimit: null,
      requiredRoles: [],
      requireTopic: false,
      staffRoles: [],
      totalLimit: 50
    };
  } else {
    const response = await fetch(
      `/api/admin/guilds/${params.guild}/categories/${params.category}`,
      fetchOptions
    );
    const isJSON = response.headers.get("Content-Type")?.includes("json");
    body = isJSON ? await response.json() : await response.text();
    if (response.status === 401) {
      throw redirect(307, `/auth/login`);
    } else if (!response.ok) {
      throw error(response.status, isJSON ? JSON.stringify(body) : body);
    }
  }
  let url = `/api/admin/guilds/${params.guild}/categories`;
  if (params.category !== "new")
    url += `/${params.category}`;
  return {
    url,
    category: body,
    channels: await (await fetch(`/api/admin/guilds/${params.guild}/data?query=channels.cache`, fetchOptions)).json(),
    roles: await (await fetch(`/api/admin/guilds/${params.guild}/data?query=roles.cache`, fetchOptions)).json(),
    settings: await (await fetch(`/api/admin/guilds/${params.guild}/settings`, fetchOptions)).json()
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8aa32789.js')).default;
const universal_id = "src/routes/settings/[guild]/categories/[category]/+page.js";
const imports = ["_app/immutable/nodes/10.b1068693.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.f85387c8.js","_app/immutable/chunks/index.fa04d723.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.36334e2f.js","_app/immutable/chunks/marked.esm.76161808.js","_app/immutable/chunks/stores.d0e5ad73.js","_app/immutable/chunks/singletons.561ed816.js","_app/immutable/chunks/paths.10c4ba04.js","_app/immutable/chunks/Required.a7e3f80f.js","_app/immutable/chunks/store.753d511f.js","_app/immutable/chunks/index.1fc5ada0.js","_app/immutable/chunks/navigation.c171f50b.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=10-ced95eed.js.map
