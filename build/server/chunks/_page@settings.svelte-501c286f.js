import { c as create_ssr_component, d as each, a as add_attribute, e as escape } from './index3-b68defce.js';

const Page_settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { guild, problems } = data;
  let createdAt = "";
  const getProblemText = (p) => {
    switch (p.id) {
      case "logChannelMissingPermission":
        return `Please give the bot <span class="font-mono">${p.permission}</span> permission in the log channel.`;
    }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="text-center">${each(problems, (problem) => {
    return `<div class="m-4"><div class="p-2 rounded-xl bg-orange-400/20 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400 border-2 font-medium"><i class="fa-solid fa-triangle-exclamation text-2xl float-left mr-2"></i>
					<!-- HTML_TAG_START -->${getProblemText(problem)}<!-- HTML_TAG_END --></div>
			</div>`;
  })}
		${guild.stats.categories.length === 0 ? `<div class="m-4"><a${add_attribute("href", guild.id + "/categories/new", 0)}><div class="p-2 rounded-xl border-blurple bg-blurple/20 border-2 link font-medium"><i class="fa-solid fa-circle-info text-2xl float-left"></i>
						Create a category to get started
						<i class="fa-solid fa-arrow-right-long"></i></div></a></div>` : ``}
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-4"><a${add_attribute("href", guild.id + "/general", 0)} class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm link"><i class="fas fa-gears text-4xl mb-4"></i>
				<p class="font-semibold text-center text-lg">General</p></a>
			<a${add_attribute("href", guild.id + "/categories", 0)} class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm link"><i class="fas fa-list text-4xl mb-4"></i>
				<p class="font-semibold text-center text-lg">Categories</p></a>
			<a${add_attribute("href", guild.id + "/panels", 0)} class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm link"><i class="fas fa-sliders text-4xl mb-4"></i>
				<p class="font-semibold text-center text-lg">Panels</p></a>
			<a${add_attribute("href", guild.id + "/feedback", 0)} class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm link"><i class="fas fa-comments text-4xl mb-4"></i>
				<p class="font-semibold text-center text-lg">Feedback</p></a>
			<a${add_attribute("href", guild.id + "/tags", 0)} class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm link"><i class="fas fa-tags text-4xl mb-4"></i>
				<p class="font-semibold text-center text-lg">Tags</p></a>
			<a${add_attribute("href", guild.id + "/reset", 0)} class="bg-red-300 dark:bg-red-500/20 hover:bg-red-500 dark:hover:bg-red-500 p-4 rounded-xl shadow-sm transition duration-300"><i class="fas fa-triangle-exclamation text-4xl mb-4"></i>
				<p class="font-semibold text-center text-lg">Reset</p></a></div></div>
	<div><div class="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm"><div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm flex items-center justify-center gap-4"><img${add_attribute("src", guild.logo, 0)} alt="" class="h-12 rounded-full">
				<p><span class="font-bold text-2xl">${escape(guild.name)}</span>
					<br>
					<span class="text-gray-500 dark:text-slate-400"><i class="fa-solid fa-calendar-days"></i>
						Added on
						${escape(createdAt)}</span></p></div>
			<div class="m-4 grid grid-cols-2 sm:grid-cols-3 gap-4"><div><h6 class="font-semibold">Resolution time</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(guild.stats.avgResolutionTime)}</p></div>
				<div><h6 class="font-semibold">Response time</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(guild.stats.avgResponseTime)}</p></div>
				<div><h6 class="font-semibold">Categories</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(guild.stats.categories.length)}</p></div>
				<div><h6 class="font-semibold">Tags</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(guild.stats.tags)}</p></div>
				<div><h6 class="font-semibold">Tickets</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(guild.stats.tickets)}</p></div>
				<div><h6 class="font-semibold">Most used category</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(guild.stats.categories.sort((a, b) => b - a)[0]?.name ?? "None")}</p></div></div></div></div></div>`;
});

export { Page_settings as default };
//# sourceMappingURL=_page@settings.svelte-501c286f.js.map
