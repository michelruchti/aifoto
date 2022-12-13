export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-a7734ada.js","imports":["_app/immutable/start-a7734ada.js","_app/immutable/chunks/index-31820371.js","_app/immutable/chunks/singletons-915abf87.js","_app/immutable/chunks/index-39bcc8c8.js","_app/immutable/chunks/index-41eb63f3.js","_app/immutable/chunks/_commonjsHelpers-cea7ac1a.js","_app/immutable/chunks/supabase-e1a8b6a3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/checkout",
				pattern: /^\/api\/checkout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/checkout/_server.js')
			},
			{
				id: "/api/spaces",
				pattern: /^\/api\/spaces\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/spaces/_server.js')
			},
			{
				id: "/api/spaces/[id]/shots/generate",
				pattern: /^\/api\/spaces\/([^/]+?)\/shots\/generate\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./entries/endpoints/api/spaces/_id_/shots/generate/_server.js')
			},
			{
				id: "/api/spaces/[id]/shots/[shot_id]",
				pattern: /^\/api\/spaces\/([^/]+?)\/shots\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"shot_id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./entries/endpoints/api/spaces/_id_/shots/_shot_id_/_server.js')
			},
			{
				id: "/api/spaces/[id]/train",
				pattern: /^\/api\/spaces\/([^/]+?)\/train\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./entries/endpoints/api/spaces/_id_/train/_server.js')
			},
			{
				id: "/callback",
				pattern: /^\/callback\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/callback/model_completed",
				pattern: /^\/callback\/model_completed\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/callback/model_completed/_server.js')
			},
			{
				id: "/callback/prediction_completed",
				pattern: /^\/callback\/prediction_completed\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/callback/prediction_completed/_server.js')
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/space/[id]",
				pattern: /^\/space\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
