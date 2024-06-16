import { r as redirect, e as error } from './index-4dc5572a.js';
import cookie from 'cookie';

async function load$1({ data, fetch, url }) {
  const response = await fetch(`/api/users/@me`);
  const isJSON = response.headers.get("Content-Type")?.includes("json");
  const body = isJSON ? await response.json() : await response.text();
  if (response.status === 401) {
    throw redirect(
      307,
      `/auth/login?r=${encodeURIComponent(url.pathname + url.search + url.hash)}`
    );
  } else if (!response.ok) {
    throw error(response.status, isJSON ? JSON.stringify(body) : body);
  } else {
    return {
      client: await (await fetch(`/api/client`, { credentials: "include" })).json(),
      theme: data.theme,
      user: body
    };
  }
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

function load({ request }) {
  const cookies = cookie.parse(request.headers.get("Cookie") || "");
  return {
    theme: cookies.theme
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-1eb4fc78.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.baef4b38.js","_app/immutable/chunks/index.6f9d1f14.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/chunks/index.f85387c8.js"];
const stylesheets = ["_app/immutable/assets/0.6b11f5a8.css"];
const fonts = ["_app/immutable/assets/fa-brands-400.232c6f6a.woff2","_app/immutable/assets/fa-brands-400.e28096fa.ttf","_app/immutable/assets/fa-regular-400.c27da6f8.woff2","_app/immutable/assets/fa-regular-400.9174757e.ttf","_app/immutable/assets/fa-solid-900.ae17c16a.woff2","_app/immutable/assets/fa-solid-900.b4990d0d.ttf","_app/immutable/assets/fa-v4compatibility.c7a869fa.woff2","_app/immutable/assets/fa-v4compatibility.ff8f525f.ttf"];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-45a2f84f.js.map
