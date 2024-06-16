import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute, g as getContext, d as each, b as subscribe } from './index3-b68defce.js';
import ms from 'ms';
import emoji from 'emoji-name-map';
import { marked } from 'marked';
import { p as page } from './stores-d1bbcace.js';
import 'sortablejs';
import { R as Required } from './Required-0d69af41.js';
import { w as writable } from './index2-c6e11f2a.js';
import { b as beforeNavigate } from './navigation-da71dd06.js';

const TextQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { state } = $$props;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  return `<div><label class="font-medium">Label
		${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The title of the question"></i>
		<input type="text" class="form-input input text-sm" required maxlength="45"${add_attribute("value", state.label, 0)}></label></div>
<div><label class="font-medium">Maximum length
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The maximum input length"></i>
		<input type="number" class="form-input input text-sm" required min="1" max="1000"${add_attribute("value", state.maxLength, 0)}></label></div>
<div><label class="font-medium">Minimum length
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The minimum input length"></i>
		<input type="number" class="form-input input text-sm" required min="0" max="1000"${add_attribute("value", state.minLength, 0)}></label></div>
<div><label class="font-medium">Placeholder
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The placeholder value, such as a hint"></i>
		<input type="text" class="form-input input text-sm" maxlength="100"${add_attribute("value", state.placeholder, 0)}></label></div>
<div><label for="required" class="font-medium">Required
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Require input?"></i>
		<input type="checkbox" id="required" name="required" class="form-checkbox"${add_attribute("checked", state.required, 1)}></label></div>
<div><label class="font-medium">Style
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="How big should the input box be?"></i>
		<select class="form-multiselect input" required><option${add_attribute("value", 1, 0)} class="p-1"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
				Short (single-line)
			</option><option${add_attribute("value", 2, 0)} class="p-1"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
				Long (multi-line)
			</option></select></label></div>
<div><label class="font-medium">Value
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="A pre-filled value"></i>
		<textarea class="form-input input text-sm" maxlength="1000">${escape(state.value || "")}</textarea></label></div>`;
});
const questionsStore = writable(null);
const MenuQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { state } = $$props;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  state.maxLength = Math.min(25, state.maxLength);
  return `<div><label class="font-medium">Label
		${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The title of the question"></i>
		<input type="text" class="form-input input text-sm" required maxlength="45"${add_attribute("value", state.label, 0)}></label></div>
<div><label class="font-medium">Maximum values
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="How many choices can be selected?"></i>
		<input type="number" class="form-input input text-sm" required min="1" max="25"${add_attribute("value", state.maxLength, 0)}></label></div>
<div><label class="font-medium">Minimum values
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The minimum number of select choices"></i>
		<input type="number" class="form-input input text-sm" default="1" required min="0" max="25"${add_attribute("value", state.minLength, 0)}></label></div>
<div><div class="font-medium">Options (${escape(state.options.length)}/25)
		${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The options that members can choose from"></i>
		<button type="button" class="hover:text-yellow-300 text-yellow-500 dark:hover:text-yellow-500/50 dark:text-yellow-500 px-2 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed"><i class="fa-solid fa-pencil"></i>
			Edit
		</button></div>
	<div><ul class="list-disc list-inside">${each(state.options, (option) => {
    return `<li>${escape(option.label)}</li>`;
  })}</ul></div></div>
<div><div><label class="font-medium">Placeholder
			<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The placeholder (label)"></i>
			<input type="text" class="form-input input text-sm" maxlength="150"${add_attribute("value", state.placeholder, 0)}></label></div></div>`;
});
const Questions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $questionsStore, $$unsubscribe_questionsStore;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_questionsStore = subscribe(questionsStore, (value) => $questionsStore = value);
  let { state } = $$props;
  let loading = {};
  let expanded = null;
  let list;
  questionsStore.set(state);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    state = $questionsStore;
    $$rendered = `<div class="list-group flex flex-col gap-2"${add_attribute("this", list, 0)}>${each(state, (q) => {
      return `<div${add_attribute("data-id", q.id, 0)} class="list-group-item bg-gray-100/50 dark:bg-slate-800/50 p-4 rounded-xl"><div class="w-full"><div class="flex items-center gap-2 md:gap-4"><i class="handle fa-solid fa-grip-vertical text-gray-500 dark:text-slate-400 cursor-move"></i>

					<div class="w-full">${escape(q.label)}
						<button type="button" ${loading[q.id] ? "disabled" : ""} class="text-red-300 hover:text-red-500 dark:text-red-500/50 dark:hover:text-red-500 transition duration-300 disabled:cursor-not-allowed" title="Remove">${loading[q.id] ? `<i class="fa-solid fa-spinner animate-spin"></i>` : `<i class="fa-solid fa-xmark"></i>`}</button>
						<div class="select-none text-gray-500 dark:text-slate-400 hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300 font-medium flex justify-between"><span class="text-sm">Click to ${escape(expanded === q.id ? "collapse" : "expand")}</span>
							<i class="${"fa-solid " + escape(expanded === q.id ? "fa-angle-up" : "fa-angle-down", true) + " text-xl self-end"}"></i></div>
					</div></div>
				${expanded === q.id ? `<div class="my-4 text-sm"><div class="grid grid-cols-1 gap-3"><div><label class="font-medium">Type
									${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
									<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="What type of input should the question use?"></i>
									<select class="form-multiselect input text-sm" required><option${add_attribute("value", null, 0)} class="p-1" default disabled>Select an input type</option><option value="TEXT" class="p-1">Text </option><option value="MENU" class="p-1" disabled title="Disabled until supported by Discord">Select menu
										</option></select>
								</label></div>

							${q.type === "TEXT" ? `${validate_component(TextQuestion, "TextQuestion").$$render(
        $$result,
        { state: q },
        {
          state: ($$value) => {
            q = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${q.type === "MENU" ? `${validate_component(MenuQuestion, "MenuQuestion").$$render(
        $$result,
        { state: q },
        {
          state: ($$value) => {
            q = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : ``}`}</div>
					</div>` : ``}</div>
		</div>`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_questionsStore();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  beforeNavigate((navigation) => {
  });
  let { category, channels, roles, url } = data;
  const slowmodes = [
    "5s",
    "10s",
    "15s",
    "30s",
    "1m",
    "2m",
    "5m",
    "10m",
    "15m",
    "30m",
    "1h",
    "2h",
    "6h"
  ];
  channels = channels.filter((c) => c.type === 4);
  roles = roles.filter((r) => r.name !== "@everyone").sort((a, b) => b.rawPosition - a.rawPosition);
  roles.forEach((r) => {
    r._hexColor = r.color > 0 ? `#${r.color.toString(16).padStart(6, "0")}` : null;
    r._style = r._hexColor ? `color: ${r._hexColor}` : "";
  });
  category.cooldown = category.cooldown ? ms(category.cooldown) : "";
  const getRole = (id) => roles.find((r) => r.id === id);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    category.customTopic = category.questions.find((q) => q.id === category.customTopic) ? category.customTopic : null;
    category.requireTopic = category.questions.length > 0 ? false : category.requireTopic;
    $$rendered = `<h1 class="m-4 text-4xl font-bold text-center">Categories</h1>
<h2 class="m-4 text-2xl font-semibold text-center text-gray-500 dark:text-slate-400">${escape(emoji.get(category.emoji) ?? "")}
	${escape(category.name || "New category")}</h2>
<div class="m-2 p-4 max-w-5xl mx-auto text-lg">${``}
	<form class="my-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"><div class="grid grid-cols-1 gap-8"><div><label class="font-medium">Name
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The name of the category"></i>
						<input type="text" class="form-input input" required${add_attribute("value", category.name, 0)}></label></div>
				<div><label class="font-medium">Channel name
						${category.id ? `${validate_component(Required, "Required").$$render($$result, {}, {}, {})}` : ``}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The name of ticket channels"></i>
						<input type="text" class="form-input input" placeholder="${"ticket-" + escape("{", true) + "num" + escape("}", true)}" ${!!category.id ? "required" : ""}${add_attribute("value", category.channelName, 0)}></label>
					${category.channelName ? `<p class="text-sm font-semibold mt-2 mb-1">Preview</p>
						<div class="block p-3 w-full rounded-md shadow-sm bg-blurple/20 dark:bg-blurple/20 text-sm font-mono break-words"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
							<span class="marked"><!-- HTML_TAG_START -->${marked.parse(category.channelName.replace(/\n/g, "\n\n")).replace(/{+\s?num(ber)?\s?}+/gi, 1).replace(/{+\s?(nick|display)(name)?\s?}+/gi, getContext("user").username).replace(/{+\s?(user)?name\s?}+/gi, getContext("user").username)}<!-- HTML_TAG_END --></span></div>` : ``}</div>
				<div><label for="claiming" class="font-medium">Claiming
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Allow staff to claim tickets?"></i>
						<input type="checkbox" id="claiming" name="claiming" class="form-checkbox"${add_attribute("checked", category.claiming, 1)}></label></div>
				<div><label class="font-medium">Cooldown
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="How long should members have to wait before creating another ticket?"></i>
						<input type="text" class="form-input input"${add_attribute("value", category.cooldown, 0)}></label></div>
				<div><label class="font-medium">Description
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="What is this category for?"></i>
						<input type="text" class="form-input input" required${add_attribute("value", category.description, 0)}></label></div>
				<div><label class="font-medium">Discord category
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Which category channel should ticket channels be created under?"></i>
						<select class="form-multiselect input" required>${!category.discordCategory || category.discordCategory === "new" ? `<option value="new">Create a new category</option>
								<option disabled value="------------">------------</option>` : ``}${each(channels, (channel) => {
      return `<option${add_attribute("value", channel.id, 0)} class="p-1"><i class="fa-solid fa-hashtag text-gray-500 dark:text-slate-400"></i>
									${escape(channel.name)}
								</option>`;
    })}</select></label></div>
				<div><label class="font-medium">Emoji
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Emoji used for buttons & dropdowns"></i>
						<span class="text-2xl">${escape(emoji.get(category.emoji) ?? "")}</span>
						<input type="text" class="form-input input" required${add_attribute("value", category.emoji, 0)}></label></div>
				<div><label for="enableFeedback" class="font-medium">Feedback
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Gather feedback from members?"></i>
						<input type="checkbox" id="enableFeedback" name="enableFeedback" class="form-checkbox"${add_attribute("checked", category.enableFeedback, 1)}></label></div>
				<div><label class="font-medium">Image
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="A link to an image to be sent with the opening message."></i>
						<input type="url" class="form-input input"${add_attribute("value", category.image, 0)}></label></div>
				<div><label class="font-medium">Member limit
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="How many tickets in this category can each member have open?"></i>
						<input type="number" min="1" max="10" class="form-input input"${add_attribute("value", category.memberLimit, 0)}></label></div>
				<div><label class="font-medium">Opening message
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Content to be sent in the opening message of each ticket."></i>
						<textarea class="form-input input" required rows="4" maxlength="1000">${escape(category.openingMessage || "")}</textarea></label>
					${category.openingMessage ? `<p class="text-sm font-semibold mt-2 mb-1">Preview</p>
						<discord-messages${add_attribute("no-background", true, 0)}${add_attribute("light-theme", data.theme !== "dark", 0)} class="bloc w-full border-0"><discord-message${add_attribute("author", data.client.username, 0)}${add_attribute("avatar", data.client.avatar, 0)}${add_attribute("bot", true, 0)}${add_attribute("timestamp", `Today at ${( new Date()).toLocaleTimeString("default", { hour: "numeric", minute: "numeric" })}`, 0)} class="py-2" highlight>${category.pingRoles?.length > 0 ? `${each(category.pingRoles, (id, index) => {
      let role = getRole(id);
      return `
										${role ? `${index > 0 ? `${escape(" ")}` : ``}
											<discord-mention${add_attribute("color", role?._hexColor, 0)} type="role">${escape(role?.name)}
											</discord-mention>` : ``}`;
    })}
									, <br>` : ``}
								<discord-mention highlight>${escape(data.user.username)}</discord-mention>
								has created a new ticket
								<discord-embed slot="embeds"${add_attribute("color", data.settings.primaryColour, 0)}${add_attribute("author-image", `https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.webp`, 0)}${add_attribute("author-name", data.user.username, 0)}${add_attribute("image", category.image, 0)}><discord-embed-description slot="description"><!-- HTML_TAG_START -->${marked.parse(category.openingMessage).replace(/{+\s?(user)?name\s?}+/gi, `<discord-mention>${data.user.username}</discord-mention>`).replace(/{+\s?avgResponseTime\s?}+/gi, data.guild.stats.avgResponseTime).replace(/{+\s?avgResolutionTime\s?}+/gi, data.guild.stats.avgResolutionTime)}<!-- HTML_TAG_END --></discord-embed-description>
									${category.requireTopic ? `<discord-embed-fields slot="fields"><discord-embed-field field-title="Topic">This is a pretty good preview
											</discord-embed-field></discord-embed-fields>` : ``}
									${data.settings.footer ? `<discord-embed-footer slot="footer"${add_attribute("footer-image", data.client.avatar, 0)}>${escape(data.settings.footer)}</discord-embed-footer>` : ``}</discord-embed>
								<discord-attachments slot="components"><discord-action-row>${category.requireTopic || category.questions.length > 0 ? `<discord-button type="secondary">✏️ Edit</discord-button>` : ``}
										${category.claiming && data.settings.claimButton ? `<discord-button type="secondary">🙌 Claim</discord-button>` : ``}
										${data.settings.closeButton ? `<discord-button type="destructive">✖️ Close</discord-button>` : ``}</discord-action-row></discord-attachments></discord-message></discord-messages>` : ``}</div>
				<div><label class="font-medium">Ping roles
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Roles that should be pinged upon ticket creation."></i>
						<select multiple class="form-multiselect input font-normal h-44">${each(roles, (role) => {
      return `<option${add_attribute("value", role.id, 0)} class="p-1 m-1 rounded"${add_attribute("style", role._style, 0)}><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"${add_attribute("style", role._style, 0)}></i>
									${escape(role.unicodeEmoji || "")}
									${escape(role.name)}
								</option>`;
    })}</select></label></div>
				<div><label class="font-medium">Slow mode
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Should slow mode be enabled?"></i>
						<select class="form-multiselect input font-normal"><option${add_attribute("value", null, 0)} class="p-1"><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"></i>
								Off
							</option>${each(slowmodes, (slowmode) => {
      return `<option${add_attribute("value", ms(slowmode) / 1e3, 0)} class="p-1"><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"></i>
									${escape(slowmode)}
								</option>`;
    })}</select></label></div>
				<div><label class="font-medium">Required roles
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Roles that a user needs to create a ticket."></i>
						<select multiple class="form-multiselect input font-normal h-44">${each(roles, (role) => {
      return `<option${add_attribute("value", role.id, 0)} class="p-1 m-1 rounded"${add_attribute("style", role._style, 0)}><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"${add_attribute("style", role._style, 0)}></i>
									${escape(role.unicodeEmoji || "")}
									${escape(role.name)}
								</option>`;
    })}</select></label></div>
				<div><label for="requireTopic" class="font-medium">Require topic
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Require a topic before ticket creation?"></i>
						<input type="checkbox" id="requireTopic" name="requireTopic" class="form-checkbox" ${category.questions.length > 0 ? "disabled" : ""}${add_attribute("checked", category.requireTopic, 1)}></label></div>
				<div><label class="font-medium">Staff roles
						${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Roles that will be able to view tickets."></i>
						<select multiple required class="form-multiselect input font-normal h-44">${each(roles, (role) => {
      return `<option${add_attribute("value", role.id, 0)} class="p-1 m-1 rounded"${add_attribute("style", role._style, 0)}><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"${add_attribute("style", role._style, 0)}></i>
									${escape(role.unicodeEmoji || "")}
									${escape(role.name)}
								</option>`;
    })}</select></label></div>
				<div><label class="font-medium">Total limit
						<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The total number of tickets that can be open at once."></i>
						<input type="number" min="1" max="50" class="form-input input"${add_attribute("value", category.totalLimit, 0)}></label></div></div>
			<div><div class="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm"><div class="flex flex-col gap-4"><div class="text-center"><h3 class="font-bold text-xl">Questions</h3>
							<p class="text-gray-500 dark:text-slate-400">${escape(category.questions.length)}/5</p></div>
						${category.questions.length > 0 ? `<div><label class="font-medium">Custom topic
									<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Which question's value should be used as the ticket topic?"></i>
									<select class="form-multiselect input font-normal"><option${add_attribute("value", null, 0)} class="p-1"><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"></i>
											None
										</option><option disabled value="------------">------------</option>${each(category.questions, (q) => {
      return `<option${add_attribute("value", q.id, 0)} class="p-1"><i class="fa-solid fa-at text-gray-500 dark:text-slate-400"></i>
												${escape(q.label)}
											</option>`;
    })}</select></label></div>` : ``}
						<div>${validate_component(Questions, "CategoryQuestions").$$render(
      $$result,
      { state: category.questions },
      {
        state: ($$value) => {
          category.questions = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
						${category.questions.length < 5 ? `<div class="text-center"><button type="button" class="hover:text-green-300 text-green-500 dark:hover:text-green-500/50 dark:text-green-500 p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed"><i class="fa-solid fa-circle-plus"></i>
									Add
								</button></div>` : ``}</div></div>
				<div class="flex justify-end gap-4">${category.id ? `<button type="button" ${""} class="mt-4 bg-red-300 hover:bg-red-500 hover:text-white dark:bg-red-500/50 dark:hover:bg-red-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${`<i class="fa-solid fa-trash"></i>`}
							Delete
						</button>` : ``}
					<button type="submit" ${""} class="mt-4 bg-green-300 hover:bg-green-500 hover:text-white dark:bg-green-500/50 dark:hover:bg-green-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${``}
						Submit
					</button></div></div></div></form></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8aa32789.js.map
