import { c as create_ssr_component, b as subscribe, a as add_attribute, d as each, v as validate_component, e as escape, g as getContext, m as missing_component, h as get_store_value } from './index3-b68defce.js';
import { p as page } from './stores-d1bbcace.js';
import { marked } from 'marked';
import { R as Required } from './Required-0d69af41.js';
import { w as writable } from './index2-c6e11f2a.js';

const TagInputs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { state } = $$props;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  return `<div><label><span class="font-medium">Name</span>
		${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The tag name - can contain UNICODE emoji (not emoji names)"></i>
		<input type="text" class="form-input input" required${add_attribute("value", state.name, 0)}></label></div>
<div><label><span class="font-medium">Auto tag regular expression</span>
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="Optional - regex to trigger this tag"></i>
		<input type="text" class="form-input input"${add_attribute("value", state.regex, 0)}></label></div>
<div><label class="font-medium"><span class="font-medium">Content</span>
		${validate_component(Required, "Required").$$render($$result, {}, {}, {})}
		<i class="fa-solid fa-circle-question text-gray-500 dark:text-slate-400 cursor-help" title="The tag content"></i>
		<textarea class="form-input input h-24" maxlength="1000" required>${escape(state.content || "")}</textarea></label>
	${state.content ? `<p class="text-sm font-medium">Output</p>
		<div class="block p-3 w-full rounded-md shadow-sm bg-blurple/20 dark:bg-blurple/20 text-sm font-mono break-words"><!-- HTML_TAG_START -->${marked.parse(state.content.replace(/\n/g, "\n\n").replace(/{+\s?(user)?name\s?}+/gi, "@" + getContext("user").username))}<!-- HTML_TAG_END --></div>` : ``}</div>`;
});
function notificationsStore(initialValue = []) {
  const store = writable(initialValue);
  const { set, update, subscribe: subscribe2 } = store;
  let defaultOptions = {
    duration: 3e3,
    placement: "bottom-right",
    type: "info",
    theme: "dark"
  };
  function add(options) {
    const {
      duration = 3e3,
      placement = "bottom-right",
      type = "info",
      theme = "dark",
      ...rest
    } = { ...defaultOptions, ...options };
    const uid = Date.now();
    const obj = {
      ...rest,
      uid,
      placement,
      type,
      theme,
      duration,
      remove: () => {
        update((v) => v.filter((i) => i.uid !== uid));
      },
      update: (data) => {
        delete data.uid;
        const index = get_store_value(store)?.findIndex((v) => v?.uid === uid);
        if (index > -1) {
          update((v) => [
            ...v.slice(0, index),
            { ...v[index], ...data },
            ...v.slice(index + 1)
          ]);
        }
      }
    };
    update((v) => [...v, obj]);
    if (duration > 0) {
      setTimeout(() => {
        obj.remove();
        if (typeof obj.onRemove === "function")
          obj.onRemove();
      }, duration);
    }
    return obj;
  }
  function getById(uid) {
    return get_store_value(store)?.find((v) => v?.uid === uid);
  }
  function clearAll() {
    set([]);
  }
  function clearLast() {
    update((v) => {
      return v.slice(0, v.length - 1);
    });
  }
  function setDefaults(options) {
    defaultOptions = { ...defaultOptions, ...options };
  }
  return {
    subscribe: subscribe2,
    add,
    success: getHelper("success", add),
    info: getHelper("info", add),
    error: getHelper("error", add),
    warning: getHelper("warning", add),
    clearAll,
    clearLast,
    getById,
    setDefaults
  };
}
const toasts = notificationsStore([]);
function getHelper(type, add) {
  return function() {
    if (typeof arguments[0] === "object") {
      const options = arguments[0];
      return add({ ...options, type });
    } else if (typeof arguments[0] === "string" && typeof arguments[1] === "string") {
      const options = arguments[2] || {};
      return add({
        ...options,
        type,
        title: arguments[0],
        description: arguments[1]
      });
    } else if (typeof arguments[0] === "string") {
      const options = arguments[1] || {};
      return add({
        ...options,
        type,
        description: arguments[0]
      });
    }
  };
}
const css$1 = {
  code: "ul.svelte-76v4rr.svelte-76v4rr{list-style:none;margin:0;padding:0}li.svelte-76v4rr.svelte-76v4rr{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.toast-container.svelte-76v4rr.svelte-76v4rr{z-index:9999;position:fixed;padding:4px;box-sizing:border-box;color:#fff;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container.bottom-right.svelte-76v4rr.svelte-76v4rr{bottom:1em;right:1em}.toast-container.bottom-left.svelte-76v4rr.svelte-76v4rr{bottom:1em;left:1em}.toast-container.top-left.svelte-76v4rr.svelte-76v4rr{top:1em;left:1em}.toast-container.top-right.svelte-76v4rr.svelte-76v4rr{top:1em;right:1em}.toast-container.top-center.svelte-76v4rr.svelte-76v4rr{top:1em;right:50%;left:50%;transform:translate(-50%, 0)}.toast-container.bottom-center.svelte-76v4rr.svelte-76v4rr{bottom:1em;right:50%;left:50%;transform:translate(-50%, 0)}.toast-container.center-center.svelte-76v4rr.svelte-76v4rr{top:50%;right:50%;left:50%;transform:translate(-50%, -50%)}.toast-container.svelte-76v4rr>.svelte-76v4rr:not(:last-child){margin-bottom:10px}",
  map: null
};
const ToastContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  let { theme = "dark" } = $$props;
  let { placement = "bottom-right" } = $$props;
  let { type = "info" } = $$props;
  let { showProgress = false } = $$props;
  let { duration = 3e3 } = $$props;
  let { width = "320px" } = $$props;
  const placements = [
    "bottom-right",
    "bottom-left",
    "top-right",
    "top-left",
    "top-center",
    "bottom-center",
    "center-center"
  ];
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.showProgress === void 0 && $$bindings.showProgress && showProgress !== void 0)
    $$bindings.showProgress(showProgress);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css$1);
  $$unsubscribe_toasts();
  return `${each(placements, (placement2) => {
    return `<div class="${"toast-container " + escape(placement2, true) + " svelte-76v4rr"}" style="${"width: " + escape(width, true)}"><ul class="svelte-76v4rr">${each($toasts.filter((n) => n.placement === placement2).reverse(), (toast) => {
      return `<li class="svelte-76v4rr">${toast.component ? `${validate_component(toast.component || missing_component, "svelte:component").$$render($$result, { data: toast }, {}, {})}` : `${slots.default ? slots.default({ data: toast }) : ``}`}
        </li>`;
    })}</ul>
  </div>`;
  })}`;
});
const css = {
  code: ".st-toast.svelte-brmuwn.svelte-brmuwn{width:100%;cursor:pointer;z-index:10000;max-width:100%;font-size:0.875rem;pointer-events:auto;background-color:rgba(255, 255, 255, 0.85);background-clip:padding-box;border:1px solid rgba(0, 0, 0, 0.1);box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);border-radius:0.25rem}.st-toast.success.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(22, 163, 74);color:#fff}.st-toast.info.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(2, 132, 199);color:#fff}.st-toast.error.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(225, 29, 72);color:#fff}.st-toast.warning.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(202, 138, 4);color:#fff}.st-toast.dark.svelte-brmuwn.svelte-brmuwn{color:#fff;background:#393939}.st-toast.dark.svelte-brmuwn .st-toast-close-btn svg.svelte-brmuwn{fill:#fff}.st-toast.dark.svelte-brmuwn .st-toast-close-btn.svelte-brmuwn:focus{border:solid 1px #fff;border-radius:3px}.st-toast.dark.svelte-brmuwn .st-toast-close-btn.svelte-brmuwn:focus:focus{border-color:#fff;outline:none}.st-toast.dark.success.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(22, 163, 74);color:#fff}.st-toast.dark.success.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:solid 1px #fff}.st-toast.dark.info.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(2, 132, 199);color:#fff}.st-toast.dark.info.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:solid 1px #fff}.st-toast.dark.error.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(225, 29, 72);color:#fff}.st-toast.dark.error.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:solid 1px #fff}.st-toast.dark.warning.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(202, 138, 4);color:#fff}.st-toast.dark.warning.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:solid 1px #fff}.st-toast.light.svelte-brmuwn.svelte-brmuwn{color:#161616}.st-toast.light.svelte-brmuwn .st-toast-close-btn svg.svelte-brmuwn{color:#161616}.st-toast.light.svelte-brmuwn .st-toast-close-btn.svelte-brmuwn:focus{border:solid 1px #fff;border-radius:3px}.st-toast.light.svelte-brmuwn .st-toast-close-btn.svelte-brmuwn:focus:focus{border-color:#fff;outline:none}.st-toast.light.success.svelte-brmuwn.svelte-brmuwn{border-color:rgb(22, 163, 74);background:rgba(22, 163, 74, 0.2)}.st-toast.light.success.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(22, 163, 74);color:#fff}.st-toast.light.success.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:1px solid rgb(22, 163, 74)}.st-toast.light.info.svelte-brmuwn.svelte-brmuwn{border-color:rgb(2, 132, 199);background:rgba(2, 132, 199, 0.2)}.st-toast.light.info.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(2, 132, 199);color:#fff}.st-toast.light.info.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:1px solid rgb(2, 132, 199)}.st-toast.light.error.svelte-brmuwn.svelte-brmuwn{border-color:rgb(225, 29, 72);background:rgba(225, 29, 72, 0.2)}.st-toast.light.error.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(225, 29, 72);color:#fff}.st-toast.light.error.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:1px solid rgb(225, 29, 72)}.st-toast.light.warning.svelte-brmuwn.svelte-brmuwn{border-color:rgb(202, 138, 4);background:rgba(202, 138, 4, 0.2)}.st-toast.light.warning.svelte-brmuwn .st-toast-icon.svelte-brmuwn{fill:rgb(202, 138, 4);color:#fff}.st-toast.light.warning.svelte-brmuwn .st-toast-header.svelte-brmuwn{border-bottom:1px solid rgb(202, 138, 4)}.st-toast-header.svelte-brmuwn.svelte-brmuwn{display:flex;align-items:center;padding:0.5rem 0.75rem;background-clip:padding-box;border-top-left-radius:calc(0.25rem - 1px);border-top-right-radius:calc(0.25rem - 1px)}.st-toast-header.svelte-brmuwn .st-toast-title.svelte-brmuwn{flex:1;text-align:left;margin-left:0.5rem;outline:none}.st-toast-header.svelte-brmuwn .st-toast-close-btn.svelte-brmuwn{margin-right:-0.375rem;margin-left:0.75rem;background:transparent;border:0}.st-toast-body.svelte-brmuwn.svelte-brmuwn{position:relative;padding:0.75rem 2rem 0.75rem 2rem;word-wrap:break-word;text-align:left}.st-toast-body.st-toast-no-title.svelte-brmuwn.svelte-brmuwn{padding-left:0.75rem}.st-toast-body.st-toast-no-title.svelte-brmuwn .st-toast-icon.svelte-brmuwn{display:inline-block;position:relative;top:-1px}.st-toast-body.st-toast-no-title.svelte-brmuwn .st-toast-description.svelte-brmuwn{margin-left:0.5rem}.st-toast-body.svelte-brmuwn .st-toast-close-btn.svelte-brmuwn{position:absolute;right:10px;top:13px}.st-toast-body.svelte-brmuwn .st-toast-close-btn.svelte-brmuwn:focus{border-color:#fff}",
  map: null
};
const BootstrapToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theme = "light" } = $$props;
  let { data = {} } = $$props;
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"st-toast bootstrap " + escape(data.theme || theme, true) + " " + escape(data.type || "info", true) + " svelte-brmuwn"}" role="alert" aria-live="assertive" aria-atomic="true">${data.title ? `<div class="st-toast-header svelte-brmuwn">${slots.icon ? slots.icon({}) : `
        ${data.type === "success" ? `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"></path><path fill="none" d="M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z" data-icon-path="inner-path" opacity="0"></path></svg>` : `${data.type === "info" ? `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,7Zm4,17.12H12V21.88h2.88V15.12H13V12.88h4.13v9H20Z"></path></svg>` : `${data.type === "error" ? `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"></path><path d="M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z" data-icon-path="inner-path" opacity="0"></path></svg>` : `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"></path><path d="M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z" data-icon-path="inner-path" opacity="0"></path></svg>`}`}`}
      `}
      <strong class="st-toast-title svelte-brmuwn">${escape(data.title)}</strong>
      
      <button data-notification-btn class="st-toast-close-btn svelte-brmuwn" type="button" aria-label="close">${slots["close-icon"] ? slots["close-icon"]({}) : `
          <svg xmlns="http://www.w3.org/2000/svg" class="bx--toast-notification__close-icon svelte-brmuwn" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        `}</button></div>` : ``}
  <div class="${["st-toast-body svelte-brmuwn", !data.title ? "st-toast-no-title" : ""].join(" ").trim()}">${!data.title ? `${slots.icon ? slots.icon({}) : `
        ${data.type === "success" ? `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"></path><path fill="none" d="M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z" data-icon-path="inner-path" opacity="0"></path></svg>` : `${data.type === "info" ? `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,7Zm4,17.12H12V21.88h2.88V15.12H13V12.88h4.13v9H20Z"></path></svg>` : `${data.type === "error" ? `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"></path><path d="M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z" data-icon-path="inner-path" opacity="0"></path></svg>` : `<svg class="st-toast-icon svelte-brmuwn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1	s1,0.4,1,1S10.6,16,10,16z"></path><path d="M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z" data-icon-path="inner-path" opacity="0"></path></svg>`}`}`}
      `}` : ``}
    <span class="st-toast-description svelte-brmuwn">${escape(data.description)}</span>
    ${!data.title ? `<button data-notification-btn class="st-toast-close-btn svelte-brmuwn" type="button" aria-label="close">${slots["close-icon"] ? slots["close-icon"]({}) : `
          <svg xmlns="http://www.w3.org/2000/svg" class="bx--toast-notification__close-icon svelte-brmuwn" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        `}</button>` : ``}
    <div class="st-toast-extra">${slots.extra ? slots.extra({}) : ``}</div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  `/api/admin/guilds/${$page.params.guild}/tags`;
  let { tags } = data;
  let shown = tags;
  let tag = { content: null, name: null, regex: null };
  let expanded = null;
  let search = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h1 class="m-4 text-4xl font-bold text-center">Tags</h1>
${``}
<div class="m-2 md:mt-8 flex flex-col-reverse lg:flex-row gap-12 max-w-5xl mx-auto"><div class="w-full"><div class="grid grid-cols-1 gap-4"><div><input type="text" class="form-input input" placeholder="Search"${add_attribute("value", search, 0)}></div>
			${each(shown, (tag2) => {
      return `<div class="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm"><span class="font-semibold text-lg">${escape(tag2.name)}</span>
					<p class="select-none text-gray-500 dark:text-slate-400 hover:text-blurple dark:hover:text-blurple cursor-pointer transition duration-300"><i class="${"fa-solid " + escape(expanded === tag2.id ? "fa-angle-up" : "fa-angle-down", true) + " float-right text-xl"}"></i>
						<span class="text-sm">Click to ${escape(expanded === tag2.id ? "collapse" : "expand")}</span></p>
					${expanded === tag2.id ? `<div class="m-2"><form${add_attribute("id", tag2.id, 0)}${add_attribute("name", tag2.name, 0)}>${validate_component(TagInputs, "TagInputs").$$render(
        $$result,
        { state: tag2 },
        {
          state: ($$value) => {
            tag2 = $$value;
            $$settled = false;
          }
        },
        {}
      )}</form>
							<div class="mt-4 flex flex-grow gap-4"><button type="button" ${""} class="flex-1 bg-red-300 hover:bg-red-500 hover:text-white dark:bg-red-500/75 dark:hover:bg-red-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${`<i class="fa-solid fa-trash"></i>`}
									Delete
								</button>
								<button type="submit"${add_attribute("for", tag2.id, 0)}${add_attribute("form", tag2.id, 0)} ${""} class="flex-1 bg-green-300 hover:bg-green-500 hover:text-white dark:bg-green-500/75 dark:hover:bg-green-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${``}
									Save
								</button></div>
						</div>` : ``}
				</div>`;
    })}</div></div>
	<div class="w-full"><div class="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm"><h3 class="text-center font-bold text-xl">Create a tag</h3>
			<form class="text-lg my-4"><div class="grid grid-cols-1 gap-2">${validate_component(TagInputs, "TagInputs").$$render(
      $$result,
      { state: tag },
      {
        state: ($$value) => {
          tag = $$value;
          $$settled = false;
        }
      },
      {}
    )}
					<button type="submit" ${""} class="mt-4 bg-green-300 hover:bg-green-500 hover:text-white dark:bg-green-500/75 dark:hover:bg-green-500 dark:hover:text-white p-2 px-5 rounded-lg font-medium transition duration-300 disabled:cursor-not-allowed">${``}
						Create
					</button></div></form></div></div></div>

${validate_component(ToastContainer, "ToastContainer").$$render($$result, { duration: 3e3, theme: data.theme }, {}, {
      default: ({ data: toasted }) => {
        return `${validate_component(BootstrapToast, "BootstrapToast").$$render($$result, { data: toasted }, {}, {})}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-537c9360.js.map
