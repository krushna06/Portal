import { c as create_ssr_component, b as subscribe, s as setContext, a as add_attribute, v as validate_component, d as each, e as escape, i as is_promise, n as noop, m as missing_component } from './index3-b68defce.js';
import { b as base } from './paths-05fee424.js';
import 'cookie';
import 'ms';
import { n as navigating, p as page } from './stores-d1bbcace.js';
import { w as writable } from './index2-c6e11f2a.js';

const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let { isDark } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  return `<div class="bg-white dark:bg-slate-700 my-8 p-4 rounded-xl shadow-sm"><div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:mx-8"><div><a${add_attribute("href", base + "/settings", 0)} class="flex justify-center md:justify-start">
				<img src="https://images-ext-1.discordapp.net/external/etAyiY2BgQovEpESt6G2V05AUBjUoRQBzs8gcmhAf_c/%3Fsize%3D2048/https/cdn.discordapp.com/icons/952491454591279154/c05b791cb1acfd97e2f9f14230138be7.webp?format=webp&width=676&height=676" alt="ByteBridge Limited" style="border-radius: 50%; width: 64px; height: 64px;"></a></div>
		<div><div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:float-right flex items-center justify-center md:justify-end"><a${add_attribute("href", `/auth/logout`, 0)} class="flex items-center justify-center md:justify-end hover:font-medium" title="Logout"><img${add_attribute("src", `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`, 0)} class="h-8 rounded-full" alt="ByteBridge Limited">
					<span class="ml-3">${escape(user.username)}</span></a>
				<div class="ml-4">${isDark ? `<i class="fa-solid fa-moon text-lg p-1 cursor-pointer hover:text-blurple transition duration-300" title="Switch to light mode"></i>` : `<i class="fa-solid fa-sun text-lg p-1 cursor-pointer hover:text-blurple transition duration-300" title="Switch to dark mode"></i>`}</div></div></div></div></div>`;
});
const exitBeforeEnter = writable(false);
const transitioning = writable(null);
const modals = writable([]);
function isLazyModal(component) {
  return typeof component.prototype === "undefined";
}
async function getComponent(component) {
  return component().then((res) => res.default);
}
const Modals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  let $transitioning, $$unsubscribe_transitioning;
  let $$unsubscribe_exitBeforeEnter;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  $$unsubscribe_transitioning = subscribe(transitioning, (value) => $transitioning = value);
  $$unsubscribe_exitBeforeEnter = subscribe(exitBeforeEnter, (value) => value);
  $$unsubscribe_modals();
  $$unsubscribe_transitioning();
  $$unsubscribe_exitBeforeEnter();
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``}

${slots.default ? slots.default({}) : `
  ${each($modals, (modal, i) => {
    return `
    ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return `
        ${slots.loading ? slots.loading({}) : ``}
      `;
      }
      return function(component) {
        return `
        ${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          Object.assign(
            {},
            {
              isOpen: i === $modals.length - 1 && !$transitioning
            },
            modal.props
          ),
          {},
          {}
        )}
      `;
      }(__value);
    }(getComponent(modal.component))}` : `
      ${validate_component(modal.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        {
          isOpen: i === $modals.length - 1 && !$transitioning
        },
        modal.props
      ),
      {},
      {}
    )}`}`;
  })}
`}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { client, user } = data;
  setContext("user", user);
  let mounted = false;
  let theme = data.theme;
  const links = [
    {
      icon: "fab fa-discord",
      name: "Support",
      url: "https://discord.gg/pphu3r49U3"
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-yiof3u_START -->${$$result.title = `<title>ByteBridge Limited</title>`, ""}<link rel="icon" href="/favicon.png"><!-- HEAD_svelte-yiof3u_END -->`, ""}

<div${add_attribute("class", theme, 0)}><div class="bg-gray-200 dark:bg-slate-900 min-h-screen h-max w-full absolute">${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    loading: () => {
      return `<div slot="loading"><div class="spinner"><div class="cube1"></div>
					<div class="cube2"></div></div></div>`;
    },
    backdrop: () => {
      return `<div slot="backdrop" class="backdrop"></div>`;
    }
  })}
		${``}
		<div class="m-2 sm:m-6 lg:m-12 "><div class="max-w-7xl mx-auto"><div class="text-gray-800 dark:text-slate-300">${$navigating || !mounted ? `<div class="spinner"><div class="cube1"></div>
							<div class="cube2"></div></div>` : `${validate_component(TopBar, "TopBar").$$render($$result, { user, isDark: theme === "dark" }, {}, {})}
						${slots.default ? slots.default({}) : ``}
						<footer class="text-center my-16"><div class="text-sm p-2 mb-6"><a href="/" class="text-gray-500 dark:text-slate-400 hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300"><i class="fa-solid fa-arrow-left"></i>
									Back to the portal
								</a></div>
							${$page.route.id !== "/settings" ? `<div class="my-4 flex gap-3 justify-center">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} target="_blank" rel="noopener noreferrer" class="bg-gray-50/75 dark:bg-slate-800/75 p-0.5 px-2 rounded-3xl shadow-sm text-gray-500 dark:text-slate-400 font-medium link"><i${add_attribute("class", link.icon, 0)}></i>
											${escape(link.name)}
										</a>`;
  })}</div>` : ``}
							<p><a href="/" target="_blank" rel="noopener noreferrer" class="hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300">ByteBridge Limited</a>
								by
								<a href="https://n0step.xyz/" target="_blank" rel="noopener noreferrer" class="hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300">n0step_™</a></p>
							
							<p class="text-xs my-4">ByteBridge Limited Tickets
								<br>
								Owned by ByteBridge Limited.
							</p></footer>`}</div></div></div></div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-9297b626.js.map
