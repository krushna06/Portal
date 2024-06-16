import { c as create_ssr_component, b as subscribe, a as add_attribute } from './index3-b68defce.js';
import { b as base } from './paths-05fee424.js';
import { p as page } from './stores-d1bbcace.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 class="m-4 text-4xl font-bold text-center">Feedback</h1>
<div class="text-center max-w-lg mx-auto my-8"><div class="my-8"><img${add_attribute("src", `${base}/img/undraw_reviews.svg`, 0)} alt="Reviews illustration" width="70%" height="auto" class="mx-auto"></div>
	<div class="my-8 text-lg font-semibold"><a${add_attribute("href", `${base}/${$page.params.guild}/feedback`, 0)} class="hover:text-blurple transition duration-300">View feedback in the portal
			<i class="fa-solid fa-arrow-right-long"></i></a></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7a5ce383.js.map
