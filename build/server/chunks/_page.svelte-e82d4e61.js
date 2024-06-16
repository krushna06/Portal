import { c as create_ssr_component, b as subscribe } from './index3-b68defce.js';
import { p as page } from './stores-d1bbcace.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  `/api/admin/guilds/${$page.params.guild}/settings`;
  $$unsubscribe_page();
  return `<h1 class="m-4 text-4xl font-bold text-center">Reset</h1>
<div class="m-2 sm:p-4 max-w-3xl mx-auto text-center">${``}
	<div class="bg-red-400 dark:bg-red-500 text-red-800 dark:text-red-400 bg-opacity-40 dark:bg-opacity-20 p-6 px-12 rounded-lg max-w-lg inline-block"><p class="font-semibold text-xl">Caution</p>
		This will irreversibly delete all data associated with your guild,
		<b>including tickets and archives!</b></div>

	<div><button type="button" ${""} class="mt-4 bg-red-300 hover:bg-red-500 hover:text-white dark:bg-red-500/50 dark:hover:bg-red-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${`<i class="fa-solid fa-trash"></i>`}
			Delete
		</button></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e82d4e61.js.map
