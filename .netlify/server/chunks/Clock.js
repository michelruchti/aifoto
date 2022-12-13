import { c as create_ssr_component, k as getContext, h as add_attribute, l as escape, d as compute_rest_props, e as spread, g as escape_attribute_value, f as escape_object, j as is_void, v as validate_component } from "./index.js";
import classNames from "classnames";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = "Close" } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    dark: "hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",
    yellow: "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",
    green: "focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    indigo: "focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",
    blue: "focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300",
    default: "focus:ring-gray-300 "
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass = "";
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  buttonClass = classNames(
    "ml-auto focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `<button type="${"button"}"${add_attribute("class", buttonClass, 0)} aria-label="${"Close"}">${slots.default ? slots.default({}) : `
		<span class="${"sr-only"}">${escape(name)}</span>
		<svg${add_attribute("class", svgSizes[size], 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>
	`}</button>`;
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "large", "href", "rounded", "index", "dismissable", "baseClass"]);
  let { color = "blue" } = $$props;
  let { large = false } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { index = false } = $$props;
  let { dismissable = false } = $$props;
  let { baseClass = "inline-flex items-center justify-center -mb-0.5" } = $$props;
  const colors = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",
    green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900",
    ["!blue"]: "bg-blue-500 text-blue-100",
    ["!dark"]: "bg-gray-500 text-gray-100",
    ["!red"]: "bg-red-500 text-white",
    ["!green"]: "bg-green-500 text-green-100",
    ["!yellow"]: "bg-yellow-300 text-yellow-800",
    ["!indigo"]: "bg-indigo-500 text-indigo-100",
    ["!purple"]: "bg-purple-500 text-purple-100",
    ["!pink"]: "bg-pink-500 text-pink-100"
  };
  const hovers = {
    blue: "hover:bg-blue-200 dark:hover:bg-blue-300",
    dark: "hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "hover:bg-red-200 dark:hover:bg-red-300",
    green: "hover:bg-green-200 dark:hover:bg-green-300",
    yellow: "hover:bg-yellow-200 dark:hover:bg-yellow-300",
    indigo: "hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "hover:bg-pink-200 dark:hover:bg-pink-300"
  };
  let badgeClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0)
    $$bindings.baseClass(baseClass);
  badgeClass = classNames(
    baseClass,
    large ? "text-sm font-medium" : "text-xs font-semibold",
    colors[color],
    href && (hovers[color] ?? hovers.blue),
    rounded ? "rounded-full p-1" : "rounded px-2.5 py-0.5",
    index && "absolute font-bold border-2 border-white dark:border-gray-900",
    index && (large ? "w-7 h-7 -top-3 -right-3" : "w-6 h-6 -top-2 -right-2"),
    $$props.class
  );
  return `${((tag) => {
    return tag ? `<${href ? "a" : "span"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(badgeClass)
        }
      ],
      { classes: "" }
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}
	${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
      $$result,
      {
        color,
        size: large ? "sm" : "xs",
        class: "ml-1.5 -mr-1.5"
      },
      {},
      {}
    )}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "span")}`;
});
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "blue" } = $$props;
  let { bg = "text-gray-300" } = $$props;
  let { size = "8" } = $$props;
  let { currentFill = "currentFill" } = $$props;
  let { currentColor = "currentColor" } = $$props;
  let iconsize = `w-${size} h-${size}`;
  if (currentFill !== "currentFill") {
    color = void 0;
  }
  const fillColorClasses = {
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    red: "fill-red-600",
    yellow: "fill-yellow-400",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    white: "fill-white"
  };
  let fillColorClass = color === void 0 ? "" : fillColorClasses[color] ?? fillColorClasses.blue;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.currentFill === void 0 && $$bindings.currentFill && currentFill !== void 0)
    $$bindings.currentFill(currentFill);
  if ($$props.currentColor === void 0 && $$bindings.currentColor && currentColor !== void 0)
    $$bindings.currentColor(currentColor);
  return `<svg role="${"status"}"${add_attribute("class", classNames("inline -mt-px animate-spin dark:text-gray-600", iconsize, bg, fillColorClass, $$props.class), 0)} viewBox="${"0 0 100 101"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"}"${add_attribute("fill", currentColor, 0)}></path><path d="${"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"}"${add_attribute("fill", currentFill, 0)}></path></svg>`;
});
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M12 6V12H16.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V12C11.25 12.4142 11.5858 12.75 12 12.75H16.5C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25H12.75V6Z" fill="${color}"/> `;
  let { ariaLabel = "clock" } = $$props;
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
export {
  Badge as B,
  Clock as C,
  Spinner as S
};
