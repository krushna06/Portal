import { c as create_ssr_component, d as each, a as add_attribute, e as escape } from './index3-b68defce.js';
import { b as base } from './paths-05fee424.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { client, guilds } = data;
  const good = [];
  const bad = [];
  guilds.forEach((g) => {
    if (g.added) {
      good.push(g);
    } else {
      bad.push(g);
    }
  });
  function getAuthUrl(guildId) {
    const scopes = ["applications.commands", "bot"];
    const url = new URL("https://discord.com/oauth2/authorize");
    url.searchParams.set("scope", scopes.join(" "));
    url.searchParams.set("client_id", client.id);
    url.searchParams.set("permissions", "268561488");
    if (guildId) {
      url.searchParams.set("guild_id", guildId);
      url.searchParams.set("disable_guild_select", "true");
    }
    return url.toString();
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-12"><div class="text-center"><div class="grid grid-cols-1 gap-8"><div class="grid grid-cols-1 gap-4">${good.length === 0 ? `<div class="my-4"><h3 class="font-semibold text-xl">Add your bot to a guild to get started</h3></div>` : `<div class="my-4"><h3 class="font-semibold text-xl">Manage your guilds</h3></div>
					${each(good, (guild) => {
    return `<a${add_attribute("href", `${base}/settings/${guild.id}`, 0)}><div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm flex items-center gap-4 font-semibold text-lg link"><img${add_attribute("src", guild.logo, 0)} alt="" class="h-12 rounded-full">
								<span>${escape(guild.name)}</span></div>
						</a>`;
  })}
					${bad.length > 0 ? `<hr class="border-white dark:border-slate-700 mt-4">` : ``}`}</div>

			${good.length > 0 ? `<div class="my-4"><h4 class="font-semibold">Add your bot to more guilds</h4></div>` : ``}

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${each(bad, (guild) => {
    return `<a${add_attribute("href", getAuthUrl(guild.id), 0)} target="_blank" rel="noopener noreferrer"><div class="bg-gray-100 dark:bg-slate-800 p-3 rounded-xl shadow-sm flex items-center gap-4 font-semibold link h-full"><img${add_attribute("src", guild.logo, 0)} alt="" class="h-10 rounded-full">
							<span>${escape(guild.name)}</span></div>
					</a>`;
  })}
				<a${add_attribute("href", getAuthUrl(), 0)} target="_blank" rel="noopener noreferrer"><div class="bg-gray-100 dark:bg-slate-800 flex items-center gap-4 p-3 rounded-xl shadow-sm font-semibold text-lg link h-full"><div class="w-full text-center"><i class="fa-solid fa-circle-plus mr-2"></i><span>Add</span></div></div></a></div></div></div>
	<div><div class="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm mb-4"><div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-xl shadow-sm flex items-center justify-center gap-4 font-semibold"><img${add_attribute("src", client.avatar, 0)} alt="" class="h-12 rounded-full">
				<span class="font-bold text-2xl">${escape(client.username)}<span class="text-gray-500 dark:text-slate-400">#${escape(client.discriminator)}</span></span></div>
			<div class="m-4 grid grid-cols-2 sm:grid-cols-3 gap-4"><div><h6 class="font-semibold">Activated users</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.activatedUsers)}</p></div>
				<div><h6 class="font-semibold">Archived messages</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.archivedMessages)}</p></div>
				<div><h6 class="font-semibold">Resolution time</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.avgResolutionTime)}</p></div>
				<div><h6 class="font-semibold">Response time</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.avgResponseTime)}</p></div>
				<div><h6 class="font-semibold">Categories</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.categories)}</p></div>
				<div><h6 class="font-semibold">Guilds</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.guilds)}</p></div>
				
				<div><h6 class="font-semibold">Members (avg)</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.members)}
						(${escape(Math.floor(client.stats.members / client.stats.guilds))})
					</p></div>
				<div><h6 class="font-semibold">Tags</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.tags)}</p></div>
				<div><h6 class="font-semibold">Tickets</h6>
					<p class="text-gray-500 dark:text-slate-400">${escape(client.stats.tickets)}</p></div></div></div></div></div>

<div class="max-w-3xl my-8 mx-auto"><hr class="border-white dark:border-slate-700 mx-24 my-8"></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-194af23b.js.map
