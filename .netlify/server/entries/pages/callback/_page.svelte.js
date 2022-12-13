import { c as create_ssr_component, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    if ((_a = $page == null ? void 0 : $page.data) == null ? void 0 : _a.session)
      goto("/dashboard");
  }
  $$unsubscribe_page();
  return ``;
});
export {
  Page as default
};
