import { c as create_ssr_component, d as compute_rest_props, e as spread, g as escape_attribute_value, f as escape_object, v as validate_component, h as add_attribute, l as escape } from "../../../chunks/index.js";
import "classnames";
import { B as Button } from "../../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { H as Heading } from "../../../chunks/Heading.js";
import "../../../chunks/supabase.js";
const PaperAirplane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M5.99972 12.0005L3.2688 3.125C9.88393 5.04665 16.0276 8.07649 21.4855 12.0002C16.0276 15.924 9.884 18.9539 3.26889 20.8757L5.99972 12.0005ZM5.99972 12.0005L13.5 12.0005" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M3.47804 2.40479C3.2133 2.32789 2.92771 2.40242 2.73432 2.59889C2.54093 2.79536 2.47091 3.08209 2.55198 3.34558L4.98426 11.2505H13.5C13.9142 11.2505 14.25 11.5863 14.25 12.0005C14.25 12.4147 13.9142 12.7505 13.5 12.7505H4.98427L2.55207 20.6551C2.471 20.9186 2.54102 21.2054 2.73441 21.4018C2.92781 21.5983 3.2134 21.6728 3.47814 21.5959C10.1767 19.6499 16.3974 16.5819 21.9233 12.6092C22.1193 12.4683 22.2355 12.2416 22.2355 12.0002C22.2355 11.7588 22.1193 11.5322 21.9233 11.3913C16.3974 7.41866 10.1767 4.3507 3.47804 2.40479Z" fill="${color}"/> `;
  let { ariaLabel = "paper airplane" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "michel@ruchti.co";
  let loading = false;
  return `<section class="${"flex flex-col items-center justify-center mx-auto lg:mt-20 mt-8"}">${`<div class="${"text-center"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h2",
      customeSize: "text-4xl font-extrabold "
    },
    {},
    {
      default: () => {
        return `Sign in to AI Foto.`;
      }
    }
  )}
			<p class="${"mt-2 mb-6 text-gray-400 text-lg"}">Use your email address to sign in</p></div>

		<div class="${"w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:border dark:bg-gray-800 dark:border-gray-700"}"><div class="${"p-6 space-y-4 md:space-y-6 sm:p-8"}"><form class="${"space-y-4 md:space-y-6"}"><div><label for="${"email"}" class="${"block mb-2 font-medium text-gray-900 dark:text-white"}">Email address</label>
						<input type="${"email"}" name="${"email"}" id="${"email"}" class="${"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}" placeholder="${"milo@gmail.com"}" required${add_attribute("value", email, 0)}></div>

					${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      class: "w-full",
      disabled: loading
    },
    {},
    {
      default: () => {
        return `${escape("Send magic link")}
						${validate_component(PaperAirplane, "PaperAirplane").$$render($$result, { class: "ml-3 " }, {}, {})}`;
      }
    }
  )}</form></div></div>`}</section>`;
});
export {
  Page as default
};
