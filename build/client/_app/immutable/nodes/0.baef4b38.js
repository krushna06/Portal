import{r as p,e as v}from"../chunks/index.6f9d1f14.js";import{S as y,i as g,s as w,C as b,k as f,a as S,D as j,l as _,h as u,c as k,m as C,n as m,E as O,b as h,F as E,G as I,H as N,g as q,d as z}from"../chunks/index.f85387c8.js";async function D({data:l,fetch:o,url:s}){var c;const n=await o("/api/users/@me"),i=(c=n.headers.get("Content-Type"))==null?void 0:c.includes("json"),a=i?await n.json():await n.text();if(n.status===401)throw p(307,`/auth/login?r=${encodeURIComponent(s.pathname+s.search+s.hash)}`);if(n.ok)return{client:await(await o("/api/client",{credentials:"include"})).json(),theme:l.theme,user:a};throw v(n.status,i?JSON.stringify(a):a)}const F=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function J(l){let o,s,n,i,a;document.title=o=l[0].client.username;const c=l[3].default,t=b(c,l,l[2],null);return{c(){s=f("link"),n=S(),i=f("div"),t&&t.c(),this.h()},l(e){const r=j("svelte-1auxgqs",document.head);s=_(r,"LINK",{rel:!0,href:!0}),r.forEach(u),n=k(e),i=_(e,"DIV",{});var d=C(i);t&&t.l(d),d.forEach(u),this.h()},h(){m(s,"rel","icon"),m(s,"href",`${l[1].avatar}?size=32`)},m(e,r){O(document.head,s),h(e,n,r),h(e,i,r),t&&t.m(i,null),a=!0},p(e,[r]){(!a||r&1)&&o!==(o=e[0].client.username)&&(document.title=o),t&&t.p&&(!a||r&4)&&E(t,c,e,e[2],a?N(c,e[2],r,null):I(e[2]),null)},i(e){a||(q(t,e),a=!0)},o(e){z(t,e),a=!1},d(e){u(s),e&&u(n),e&&u(i),t&&t.d(e)}}}function L(l,o,s){let{$$slots:n={},$$scope:i}=o,{data:a}=o;const{client:c}=a;return l.$$set=t=>{"data"in t&&s(0,a=t.data),"$$scope"in t&&s(2,i=t.$$scope)},[a,c,i,n]}class G extends y{constructor(o){super(),g(this,o,L,J,w,{data:0})}}export{G as component,F as universal};