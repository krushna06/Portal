import { c as create_ssr_component, b as subscribe, e as escape } from './index3-b68defce.js';
import { p as page } from './stores-d1bbcace.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let message = $page.error?.message;
  if (message?.message)
    message = message.message;
  $$unsubscribe_page();
  return `<div class="text-center"><div class="bg-red-400 dark:bg-red-500 text-red-800 dark:text-red-400 bg-opacity-40 dark:bg-opacity-20 m-4 p-6 px-12 rounded-lg text-center max-w-lg inline-block"><p class="font-semibold text-xl">Error ${escape($page.status)}</p>
		<p>${escape(message ?? "")}</p></div></div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-3e355a77.js.map
