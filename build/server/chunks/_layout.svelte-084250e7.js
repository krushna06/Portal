import { c as create_ssr_component, e as escape } from './index3-b68defce.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { guild } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="text-center"><a href="./" class="bg-gray-50/75 dark:bg-slate-800/75 p-2 px-4 rounded-xl shadow-sm text-gray-500 dark:text-slate-400 font-medium inline-block link mb-4"><i class="fa-solid fa-arrow-left"></i>
		${escape(guild.name)}</a></div>

${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-084250e7.js.map
