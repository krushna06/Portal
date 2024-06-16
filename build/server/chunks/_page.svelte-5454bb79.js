import { c as create_ssr_component, b as subscribe, d as each, v as validate_component, e as escape, a as add_attribute } from './index3-b68defce.js';
import { p as page } from './stores-d1bbcace.js';
import emoji from 'emoji-name-map';
import { R as Required } from './Required-0d69af41.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  let { categories, channels } = data;
  channels = channels.filter((c) => c.type === 0);
  let panel = {
    categories: [],
    channel: "new",
    description: "",
    image: "",
    title: "",
    type: "BUTTON",
    thumbnail: ""
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  panel.type = panel.categories.length > 5 ? "MENU" : panel.categories.length > 1 && panel.type === "MESSAGE" ? "BUTTON" : panel.type;
  $$unsubscribe_page();
  return `<h1 class="m-4 text-4xl font-bold text-center">Create a panel</h1>
<div class="m-2 sm:p-4 max-w-3xl mx-auto">${``}
	<div class="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm"><div class="text-center">${`${``}`}</div>
		<form class="text-lg my-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label><span class="font-medium">Type</span>
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="How will members use the panel?"></i>
						<select class="form-multiselect input font-normal" required><option value="BUTTON" class="p-1" ${panel.categories.length > 5 ? "disabled" : ""}><i class="fa-solid fa-at text-gray-500 dark:text-slate-400" default></i>
								Buttons
							</option><option value="MENU" class="p-1"><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"></i>
								Select menu (dropdown)
							</option></select></label></div>
				<div><label class="font-medium"><span class="font-medium">Channel</span>
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The channel to send the panel message to"></i>
						<select required class="form-multiselect input font-normal"><option value="new">Create a new channel</option><option disabled value="------------">------------</option>${each(channels, (channel) => {
    return `${escape(channel.id)}
								<option${add_attribute("value", channel.id, 0)} class="p-1"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
									${escape(channel.name)}
								</option>`;
  })}</select></label></div>
				<div><label class="font-medium"><span class="font-medium">Categories</span>
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The category options to be available"></i>
						<select multiple required class="form-multiselect input font-normal h-24">${each(categories, (category) => {
    return `<option${add_attribute("value", category.id, 0)} class="p-1 m-1 rounded">${escape(emoji.get(category.emoji) ?? "")}
									${escape(category.name)}
								</option>`;
  })}</select></label></div>
				<div><label class="font-medium"><span class="font-medium">Description</span>
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Optional - the embed description"></i>
						<textarea class="form-input input h-24" maxlength="4096">${escape("")}</textarea></label></div>
				<div><label><span class="font-medium">Title</span>
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The embed title" required></i>
						<input type="text" class="form-input input" required${add_attribute("value", panel.title, 0)}></label></div>
				<div><label><span class="font-medium">Large image</span>
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Optional - the embed image"></i>
						<input type="url" class="form-input input"${add_attribute("value", panel.image, 0)}></label></div>
				<div><label><span class="font-medium">Small image (thumbnail)</span>
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Optional - the embed thumbnail"></i>
						<input type="url" class="form-input input"${add_attribute("value", panel.thumbnail, 0)}></label></div>
				<div class="place-self-center"><button type="submit" ${""} class="mt-4 bg-green-300 hover:bg-green-500 hover:text-white dark:bg-green-500/50 dark:hover:bg-green-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${``}
						Create
					</button></div></div></form></div>
	<div class="mt-8 text-center text-base max-w-lg mx-auto"><div class="p-2 rounded-xl border-cyan-500 bg-cyan-500/20 border-2"><i class="fa-solid fa-circle-info text-2xl text-cyan-500"></i>
			<br>
			Looking to edit or remove a panel? Just delete the message or channel in Discord.
		</div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5454bb79.js.map
