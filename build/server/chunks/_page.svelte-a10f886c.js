import { c as create_ssr_component, b as subscribe, a as add_attribute, d as each, e as escape } from './index3-b68defce.js';
import { p as page } from './stores-d1bbcace.js';
import ms from 'ms';
import { b as beforeNavigate } from './navigation-da71dd06.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  beforeNavigate((navigation) => {
  });
  let { settings, channels, locales, roles } = data;
  channels = channels.filter((c) => c.type === 0);
  roles = roles.filter((r) => r.name !== "@everyone").sort((a, b) => b.rawPosition - a.rawPosition);
  roles.forEach((r) => {
    r._hexColor = r.color > 0 ? `#${r.color.toString(16).padStart(6, "0")}` : null;
    r._style = r._hexColor ? `color: ${r._hexColor}` : "";
  });
  settings.autoClose = settings.autoClose ? ms(settings.autoClose) : "";
  settings.logChannel = settings.logChannel ?? "";
  settings.staleAfter = settings.staleAfter ? ms(settings.staleAfter) : "";
  settings.workingHours = settings.workingHours.map((v) => v === null ? [] : v);
  let autoTag = Array.isArray(settings.autoTag) ? "custom" : settings.autoTag;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<h1 class="m-4 text-4xl font-bold text-center">General settings</h1>
<div class="m-2 p-4 max-w-lg mx-auto text-lg">${``}
	<form><div class="my-4 grid grid-cols-1 gap-8"><div><label class="font-medium">Auto close after
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="How long should the bot wait before closing (for close command and stale tickets)?"></i>
					<input type="text" class="form-input input"${add_attribute("value", settings.autoClose, 0)}></label></div>
			<div><label class="font-medium">Auto tag channels
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Which channels should the bot respond with tags in?"></i>
					<select class="form-multiselect block input font-normal"><option value="custom">Specific channels</option><option value="ticket">Only ticket channels</option><option value="!ticket">All non-ticket channels</option><option value="all">All channels</option></select>
					${autoTag === "custom" ? `<select multiple class="form-multiselect input font-normal">${each(channels, (channel) => {
    return `<option${add_attribute("value", channel.id, 0)} class="p-1 m-1 rounded"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
									${escape(channel.name)}
								</option>`;
  })}</select>` : ``}</label></div>
			<div><label for="archive" class="font-medium">Archive
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Save messages sent in tickets for future use?"></i>
					<input type="checkbox" id="archive" name="archive" class="form-checkbox"${add_attribute("checked", settings.archive, 1)}></label></div>
			<div><label class="font-medium">Blocklist
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Which roles should the bot ignore?"></i>
					<select multiple class="form-multiselect input font-normal h-44">${each(roles, (role) => {
    return `<option${add_attribute("value", role.id, 0)} class="p-1 m-1 rounded"${add_attribute("style", role._style, 0)}><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"${add_attribute("style", role._style, 0)}></i>
								${escape(role.unicodeEmoji || "")}
								${escape(role.name)}
							</option>`;
  })}</select></label></div>
			<div><div class="font-medium">Buttons
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Which buttons should be enabled (if the feature is enabled in the category)?"></i>
					<div class="mx-4"><div><label for="claimButton" class="font-medium text-base">Claim
								<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Add a claim/unclaim button to the opening message (if enabled in category)?"></i>
								<input type="checkbox" id="claimButton" name="claimButton" class="form-checkbox"${add_attribute("checked", settings.claimButton, 1)}></label></div>
						<div><label for="closeButton" class="font-medium text-base">Close
								<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Add a close button to the opening message?"></i>
								<input type="checkbox" id="closeButton" name="closeButton" class="form-checkbox"${add_attribute("checked", settings.closeButton, 1)}></label></div></div></div></div>
			<div><label class="font-medium">Error colour
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="What colour should error embeds be?"></i>
					<input type="text" class="form-input input"${add_attribute("value", settings.errorColour, 0)}></label></div>
			<div><label class="font-medium">Footer
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="What text should be at the bottom of embeds?"></i>
					<input type="text" class="form-input input"></label></div>
			<div><label class="font-medium">Locale
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Which language should the bot respond in?"></i>
					<select class="form-multiselect input">${each(locales, (locale) => {
    return `<option${add_attribute("value", locale, 0)} class="p-1"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
								${escape(locale)}
							</option>`;
  })}</select></label></div>
			<div><label class="font-medium">Log channel
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Which channel should logs be sent to?"></i>
					<select class="form-multiselect input"><option value="">None</option><option disabled value="------------">------------</option>${each(channels, (channel) => {
    return `<option${add_attribute("value", channel.id, 0)} class="p-1"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
								${escape(channel.name)}
							</option>`;
  })}</select></label></div>
			<div><label class="font-medium">Primary colour
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="What colour should normal embeds be?"></i>
					<input type="text" class="form-input input"${add_attribute("value", settings.primaryColour, 0)}></label></div>
			<div><label class="font-medium">Stale after
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="When should the bot remind members/staff about messages with no reply?"></i>
					<input type="text" class="form-input input"${add_attribute("value", settings.staleAfter, 0)}></label></div>
			<div><label class="font-medium">Success colour
					<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="What colour should success embeds be?"></i>
					<input type="text" class="form-input input"${add_attribute("value", settings.successColour, 0)}></label></div>
			<div><div class="font-medium grid grid-cols-1 gap-2"><div>Working hours
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="When can your members expect staff to be available?"></i>
						<p class="select-none text-gray-500 dark:text-slate-400 hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300"><i class="${"fa-solid " + escape("fa-angle-down", true) + " float-right text-xl"}"></i>
							<span class="text-sm">Click to ${escape("expand")}</span></p></div>

					${``}</div></div></div>
		<button type="submit" ${""} class="mt-4 float-right bg-green-300 hover:bg-green-500 hover:text-white dark:bg-green-500/50 dark:hover:bg-green-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${``}
			Submit
		</button></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a10f886c.js.map
