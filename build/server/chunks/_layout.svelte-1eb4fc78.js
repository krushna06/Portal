import { c as create_ssr_component, e as escape, a as add_attribute } from './index3-b68defce.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { client } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1auxgqs_START -->${$$result.title = `<title>${escape(data.client.username)}</title>`, ""}<link rel="icon"${add_attribute("href", `${client.avatar}?size=32`, 0)}><!-- HEAD_svelte-1auxgqs_END -->`, ""}

<div>${slots.default ? slots.default({}) : ``}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-1eb4fc78.js.map
