const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/undraw_reviews.svg","logo.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.3504483d.js","app":"_app/immutable/entry/app.83d968ba.js","imports":["_app/immutable/entry/start.3504483d.js","_app/immutable/chunks/index.f85387c8.js","_app/immutable/chunks/singletons.561ed816.js","_app/immutable/chunks/paths.10c4ba04.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.83d968ba.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.f85387c8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-45a2f84f.js')),
			__memo(() => import('./chunks/1-35134e3e.js')),
			__memo(() => import('./chunks/2-4b0b75da.js')),
			__memo(() => import('./chunks/3-bc5fab3d.js')),
			__memo(() => import('./chunks/4-b825bcff.js')),
			__memo(() => import('./chunks/5-c7e6b58f.js')),
			__memo(() => import('./chunks/6-b617582c.js')),
			__memo(() => import('./chunks/7-c9fc41e5.js')),
			__memo(() => import('./chunks/8-beb31cc0.js')),
			__memo(() => import('./chunks/9-08fd762c.js')),
			__memo(() => import('./chunks/10-ced95eed.js')),
			__memo(() => import('./chunks/11-5034976b.js')),
			__memo(() => import('./chunks/12-43e0d23d.js')),
			__memo(() => import('./chunks/13-12104b13.js')),
			__memo(() => import('./chunks/14-0aaf24ce.js')),
			__memo(() => import('./chunks/15-5ae016f9.js')),
			__memo(() => import('./chunks/16-48ada1eb.js')),
			__memo(() => import('./chunks/17-3a5de034.js')),
			__memo(() => import('./chunks/18-87dfeb52.js')),
			__memo(() => import('./chunks/19-6f1e36b0.js')),
			__memo(() => import('./chunks/20-4a7811f7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/settings/[guild]",
				pattern: /^\/settings\/([^/]+?)\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/settings/[guild]/categories",
				pattern: /^\/settings\/([^/]+?)\/categories\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/settings/[guild]/categories/[category]",
				pattern: /^\/settings\/([^/]+?)\/categories\/([^/]+?)\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false},{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/settings/[guild]/feedback",
				pattern: /^\/settings\/([^/]+?)\/feedback\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/settings/[guild]/general",
				pattern: /^\/settings\/([^/]+?)\/general\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/settings/[guild]/panels",
				pattern: /^\/settings\/([^/]+?)\/panels\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/settings/[guild]/reset",
				pattern: /^\/settings\/([^/]+?)\/reset\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/settings/[guild]/tags",
				pattern: /^\/settings\/([^/]+?)\/tags\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4,], errors: [1,3,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/view/[ticket]",
				pattern: /^\/view\/([^/]+?)\/?$/,
				params: [{"name":"ticket","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/[guild]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/[guild]/feedback",
				pattern: /^\/([^/]+?)\/feedback\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/[guild]/staff",
				pattern: /^\/([^/]+?)\/staff\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/[guild]/tickets",
				pattern: /^\/([^/]+?)\/tickets\/?$/,
				params: [{"name":"guild","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
