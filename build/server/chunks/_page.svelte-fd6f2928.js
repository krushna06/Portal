import { c as create_ssr_component, d as each, a as add_attribute, e as escape } from './index3-b68defce.js';
import emoji from 'emoji-name-map';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { categories } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 class="m-4 text-4xl font-bold text-center">Categories</h1>
<div class="m-2 p-4 max-w-lg mx-auto"><div class="grid grid-cols-1 gap-4"><a href="./categories/new"><div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm font-semibold text-center text-lg link"><i class="fa-solid fa-circle-plus mr-2"></i><span>Create</span></div></a>
		${each(categories, (category) => {
    return `<a${add_attribute("href", `./categories/${category.id}`, 0)}><div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm link group flex flex-col-reverse md:flex-row-reverse md:justify-between gap-1"><div class="text-sm float-right text-gray-500 dark:text-slate-400 group-hover:text-white dark:group-hover:text-white transition duration-300 min-w-max text-center md:text-left">${``}
						<p><i class="fa-solid fa-clock mr-2"></i>
							${escape(category.stats.avgResponseTime)}
							response
						</p>
						<p><i class="fa-solid fa-square-check mr-2"></i>
							${escape(category.stats.avgResolutionTime)}
							resolution
						</p></div>
					<div class="flex items-center gap-4"><span class="text-5xl">${category.emoji ? `${escape(emoji.get(category.emoji) ?? "")}` : ``}</span>
						<div><p class="text-xl font-semibold"><span>${escape(category.name)}
								</span></p>
							<p>${escape(category.description)}
							</p></div>
					</div></div>
			</a>`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fd6f2928.js.map
