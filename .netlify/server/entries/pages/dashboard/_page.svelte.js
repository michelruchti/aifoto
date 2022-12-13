import { c as create_ssr_component, l as escape, h as add_attribute, d as compute_rest_props, w as compute_slots, v as validate_component, e as spread, g as escape_attribute_value, f as escape_object, j as is_void, x as createEventDispatcher, p as onDestroy, b as subscribe, u as each } from "../../../chunks/index.js";
import classNames from "classnames";
import { B as Button } from "../../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { B as Badge, C as Clock, S as Spinner } from "../../../chunks/Clock.js";
import { H as Heading } from "../../../chunks/Heading.js";
import { fromEvent } from "file-selector";
import "../../../chunks/supabase.js";
import "uniqid";
import "image-blob-reduce";
import { p as page } from "../../../chunks/stores.js";
import { A as ArrowLongRight } from "../../../chunks/ArrowLongRight.js";
import { P as PUBLIC_STRIPE_SPACE_PRICE, b as PUBLIC_SUPABASE_URL } from "../../../chunks/public.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<svg class="${"text-gray-400 bg-gray-100 dark:bg-gray-600 " + escape(rounded ? "rounded" : "rounded-full", true)}" fill="${"currentColor"}" viewBox="${"0 0 16 16"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let { top = false } = $$props;
  let { color = "bg-gray-300 dark:bg-gray-500" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-2.5 h-2.5",
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-6 h-6",
    xl: "w-10 h-10"
  };
  const offsets = {
    xs: ["left-4", "left-5"],
    sm: ["left-6", "left-6"],
    md: ["left-7", "left-8"],
    lg: ["left-14", "left-16"],
    xl: ["left-24", "left-32"]
  };
  let dotClass;
  let divClass;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dotClass = classNames("absolute rounded-full border-white dark:border-gray-800 border-2", sizes[size], offsets[size][+rounded], top ? "top-0" : "bottom-0", rounded && top && "transform -translate-y-1/2", rounded && !top && "transform translate-y-1/4", color);
  divClass = classNames("relative flex-shrink-0", $$props.class);
  return `${show ? `<div${add_attribute("class", divClass, 0)}>${slots.default ? slots.default({}) : ``}
		<span${add_attribute("class", dotClass, 0)}></span></div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = {
    top: false,
    color: "bg-gray-300 dark:bg-gray-500"
  } } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  avatarClass = classNames(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${validate_component(Dot, "Dot").$$render($$result, Object.assign({ show: $$props.dot }, { rounded }, dot, { size }, { class: sizes[size] }), {}, {
    default: () => {
      return `${src ? `<img${spread(
        [
          { alt: escape_attribute_value(alt) },
          { src: escape_attribute_value(src) },
          escape_object($$restProps),
          {
            class: escape_attribute_value(avatarClass)
          }
        ],
        {}
      )}>` : `${$$slots.default ? `${((tag) => {
        return tag ? `<${href ? "a" : "div"}${spread(
          [
            { href: escape_attribute_value(href) },
            escape_object($$restProps),
            {
              class: "flex justify-center items-center text-xs font-medium " + escape(avatarClass, true)
            }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "div")}` : `${((tag) => {
        return tag ? `<${href ? "a" : "div"}${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(avatarClass)
            }
          ],
          {}
        )}>${is_void(tag) ? "" : `${validate_component(Placeholder, "AvatarPlaceholder").$$render($$result, { rounded }, {}, {})}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "div")}`}`}`;
    }
  })}`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M4.5 12.75L10.5 18.75L19.5 5.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.916 4.62604C20.2607 4.85581 20.3538 5.32146 20.124 5.6661L11.124 19.1661C10.9994 19.3531 10.7975 19.4743 10.5739 19.4964C10.3503 19.5186 10.1286 19.4393 9.96967 19.2804L3.96967 13.2804C3.67678 12.9875 3.67678 12.5126 3.96967 12.2197C4.26256 11.9269 4.73744 11.9269 5.03033 12.2197L10.3834 17.5729L18.876 4.83405C19.1057 4.48941 19.5714 4.39628 19.916 4.62604Z" fill="${color}"/> `;
  let { ariaLabel = "check" } = $$props;
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
const CheckBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M9 12.75L11.25 15L15 9.75M21 12C21 13.2683 20.3704 14.3895 19.4067 15.0682C19.6081 16.2294 19.2604 17.4672 18.3637 18.3639C17.467 19.2606 16.2292 19.6083 15.068 19.4069C14.3893 20.3705 13.2682 21 12 21C10.7319 21 9.61072 20.3705 8.93204 19.407C7.77066 19.6086 6.53256 19.261 5.6357 18.3641C4.73886 17.4673 4.39125 16.2292 4.59286 15.0678C3.62941 14.3891 3 13.2681 3 12C3 10.7319 3.62946 9.61077 4.59298 8.93208C4.39147 7.77079 4.7391 6.53284 5.63587 5.63607C6.53265 4.73929 7.77063 4.39166 8.93194 4.59319C9.61061 3.62955 10.7318 3 12 3C13.2682 3 14.3893 3.6295 15.068 4.59307C16.2294 4.39145 17.4674 4.73906 18.3643 5.6359C19.2611 6.53274 19.6087 7.77081 19.4071 8.93218C20.3706 9.61087 21 10.7319 21 12Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M8.60288 3.79876C9.42705 2.85093 10.6433 2.25 12 2.25C13.3566 2.25 14.5728 2.85087 15.397 3.79861C16.6501 3.71106 17.9352 4.14616 18.8946 5.10557C19.854 6.06498 20.2891 7.35009 20.2016 8.60319C21.1492 9.42735 21.75 10.6435 21.75 12C21.75 13.3568 21.149 14.5731 20.2011 15.3973C20.2884 16.6502 19.8533 17.935 18.8941 18.8943C17.9348 19.8535 16.65 20.2886 15.3971 20.2013C14.5729 21.1491 13.3567 21.75 12 21.75C10.6434 21.75 9.4272 21.1491 8.60304 20.2014C7.34992 20.289 6.0648 19.8539 5.10537 18.8945C4.14596 17.935 3.71086 16.6499 3.79841 15.3968C2.85079 14.5726 2.25 13.3565 2.25 12C2.25 10.6434 2.85085 9.42723 3.79855 8.60306C3.7111 7.35005 4.14621 6.06507 5.10554 5.10574C6.06488 4.1464 7.34987 3.71129 8.60288 3.79876ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z" fill="${color}"/> `;
  let { ariaLabel = "check badge" } = $$props;
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
const Dropzone_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropzone.svelte-4uigcm{flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;border-width:2px;border-radius:2px;border-color:#eeeeee;border-style:dashed;background-color:#fafafa;color:#bdbdbd;outline:none;transition:border 0.24s ease-in-out}.dropzone.svelte-4uigcm:focus{border-color:#2196f3}",
  map: null
};
const Dropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accept } = $$props;
  let { disabled = false } = $$props;
  let { getFilesFromEvent = fromEvent } = $$props;
  let { maxSize = Infinity } = $$props;
  let { minSize = 0 } = $$props;
  let { multiple = true } = $$props;
  let { preventDropOnDocument = true } = $$props;
  let { noClick = false } = $$props;
  let { noKeyboard = false } = $$props;
  let { noDrag = false } = $$props;
  let { noDragEventsBubbling = false } = $$props;
  let { containerClasses = "" } = $$props;
  let { containerStyles = "" } = $$props;
  let { disableDefaultStyles = false } = $$props;
  let { name = "" } = $$props;
  createEventDispatcher();
  let rootRef;
  onDestroy(() => {
  });
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0)
    $$bindings.accept(accept);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.getFilesFromEvent === void 0 && $$bindings.getFilesFromEvent && getFilesFromEvent !== void 0)
    $$bindings.getFilesFromEvent(getFilesFromEvent);
  if ($$props.maxSize === void 0 && $$bindings.maxSize && maxSize !== void 0)
    $$bindings.maxSize(maxSize);
  if ($$props.minSize === void 0 && $$bindings.minSize && minSize !== void 0)
    $$bindings.minSize(minSize);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.preventDropOnDocument === void 0 && $$bindings.preventDropOnDocument && preventDropOnDocument !== void 0)
    $$bindings.preventDropOnDocument(preventDropOnDocument);
  if ($$props.noClick === void 0 && $$bindings.noClick && noClick !== void 0)
    $$bindings.noClick(noClick);
  if ($$props.noKeyboard === void 0 && $$bindings.noKeyboard && noKeyboard !== void 0)
    $$bindings.noKeyboard(noKeyboard);
  if ($$props.noDrag === void 0 && $$bindings.noDrag && noDrag !== void 0)
    $$bindings.noDrag(noDrag);
  if ($$props.noDragEventsBubbling === void 0 && $$bindings.noDragEventsBubbling && noDragEventsBubbling !== void 0)
    $$bindings.noDragEventsBubbling(noDragEventsBubbling);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.disableDefaultStyles === void 0 && $$bindings.disableDefaultStyles && disableDefaultStyles !== void 0)
    $$bindings.disableDefaultStyles(disableDefaultStyles);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `

<div tabindex="${"0"}" class="${escape(disableDefaultStyles ? "" : "dropzone", true) + " " + escape(containerClasses, true) + " svelte-4uigcm"}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", rootRef, 0)}><input${add_attribute("accept", accept, 0)} ${multiple ? "multiple" : ""} type="${"file"}"${add_attribute("name", name, 0)} autocomplete="${"off"}" tabindex="${"-1"}" style="${"display: none;"}">
  ${slots.default ? slots.default({}) : `
    <p>Drag &#39;n&#39; drop some files here, or click to select files</p>
  `}</div>`;
});
const Imagecard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { preview } = $$props;
  let { uploaded } = $$props;
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  if ($$props.uploaded === void 0 && $$bindings.uploaded && uploaded !== void 0)
    $$bindings.uploaded(uploaded);
  return `<div class="${"relative h-24 w-24 mr-3 mb-3"}">${uploaded ? `<div class="${"absolute -top-1 -right-1 full p-1 bg-lime-500 rounded-full border-2 border-white"}">${validate_component(Check, "Check").$$render(
    $$result,
    {
      class: "text-white h-3 w-3",
      variation: "solid"
    },
    {},
    {}
  )}</div>` : ``}
	<img${add_attribute("src", preview, 0)} class="${"object-cover h-24 w-24 rounded-lg border-2 border-white shadow-lg"}" alt="${""}"></div>`;
});
const Uploadcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  createEventDispatcher();
  let files = [];
  let instanceName = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    instanceName = instanceName.replace(/[^a-zA-Z0-9-]/g, "");
    $$rendered = `${`${validate_component(Dropzone, "Dropzone").$$render(
      $$result,
      {
        accept: "image/png, image/jpeg, image/jpg",
        maxSize: "10000000",
        containerClasses: "flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-700 dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
        disableDefaultStyles: "true"
      },
      {},
      {
        default: () => {
          return `<svg aria-hidden="${"true"}" class="${"mb-3 w-10 h-10 text-gray-700 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}"></path></svg>
		<p class="${"mb-2 text-2xl text-gray-700 dark:text-gray-400"}"><span class="${"font-semibold "}">Click to upload</span> or drag and drop
		</p>
		<p class="${"text-gray-500 dark:text-gray-400"}">Better with different angles: Face and right/left profiles
		</p>`;
        }
      }
    )}`}

${files.length ? `<div class="${"mt-4"}"><div class="${"pl-4 flex flex-wrap"}">${each(files, (item) => {
      return `${validate_component(Imagecard, "Image").$$render(
        $$result,
        {
          preview: item.preview,
          uploaded: item.uploaded
        },
        {},
        {}
      )}`;
    })}</div>

		<div class="${"mt-4 flex flex-col items-center"}">${`${`${validate_component(Button, "Button").$$render($$result, { size: "lg" }, {}, {
      default: () => {
        return `Upload ${escape(files.length)} image${escape(files.length > 1 ? "s" : "")}`;
      }
    })}`}`}</div></div>` : ``}

${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const FormPayment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spaceId } = $$props;
  if ($$props.spaceId === void 0 && $$bindings.spaceId && spaceId !== void 0)
    $$bindings.spaceId(spaceId);
  return `<div class="${"flex justify-center items-end space-x-2 "}"><p class="${"text-6xl font-extrabold"}">$${escape(PUBLIC_STRIPE_SPACE_PRICE)}<span class="${"text-gray-600 font-medium text-lg "}">/ space</span></p></div>
<span class="${"text-lg font-medium mt-4"}">Your Model is ready to be trained!</span>
<ul class="${"mt-6 text-left w-7/12 mx-auto"}"><li class="${"flex items-center space-x-2"}">${validate_component(CheckBadge, "CheckBadge").$$render(
    $$result,
    {
      variation: "solid",
      class: "text-lime-500 w-5 h-5"
    },
    {},
    {}
  )}<span><b>1</b> Space with a
			<strong>custom trained model</strong></span></li>
	<li class="${"flex space-x-2 items-center"}">${validate_component(CheckBadge, "CheckBadge").$$render(
    $$result,
    {
      variation: "solid",
      class: "text-lime-500 w-5 h-5"
    },
    {},
    {}
  )}<span><strong>100</strong> images generation (512x512 resolution)</span></li>
	<li class="${"flex space-x-2 items-center"}">${validate_component(CheckBadge, "CheckBadge").$$render(
    $$result,
    {
      variation: "solid",
      class: "text-lime-500 w-5 h-5"
    },
    {},
    {}
  )}
		<span>Your Space will be deleted 24 hours after your credits are exhausted</span></li></ul>

<div class="${"my-6"}">${`${validate_component(Button, "Button").$$render($$result, { size: "lg" }, {}, {
    default: () => {
      return `Unlock now - $${escape(PUBLIC_STRIPE_SPACE_PRICE)}`;
    }
  })}`}</div>`;
});
const Spacecard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  dayjs.extend(relativeTime);
  let { space } = $$props;
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  return `<div class="${"bg-white dark:border dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg p-6 mb-4 dark:text-gray-100"}"><div class="${"flex justify-between "}"><div><h4 class="${"text-2xl font-semibold"}"><span class="${"text-gray-700 dark:text-gray-400"}">Space</span>
				${escape(space.instance_name)}</h4>
			<p class="${"mt-2 mb-4 font-medium text-sm text-gray-600 dark:text-gray-400"}">${validate_component(Badge, "Badge").$$render($$result, { color: "dark", class: "" }, {}, {
    default: () => {
      return `${validate_component(Clock, "Clock").$$render($$result, { class: "w-4 mr-1" }, {}, {})}${escape(dayjs(space.created_at).fromNow())}`;
    }
  })}</p></div>
		<div>${space.model_status === "succeeded" ? `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      color: space.credits > 0 ? "green" : "red",
      large: true
    },
    {},
    {
      default: () => {
        return `<p><strong>${escape(space.credits)}</strong> shots left</p>`;
      }
    }
  )}` : ``}</div></div>

	<div class="${"flex flex-col justify-center text-center"}">${space.model_status === "succeeded" ? `<div class="${"my-6"}">${validate_component(Button, "Button").$$render($$result, { size: "lg", href: "/space/" + space.id }, {}, {
    default: () => {
      return `Open space ${validate_component(ArrowLongRight, "ArrowLongRight").$$render($$result, { class: "ml-2" }, {}, {})}`;
    }
  })}</div>` : `${space.stripe_payment_id && space.model_status === "processing" ? `<div class="${"mt-4"}">${validate_component(Spinner, "Spinner").$$render($$result, { class: "", size: "12", color: "white" }, {}, {})}</div>
			<p class="${"text-lg font-medium mt-8"}">Training of <b>your custom model</b> in progress!</p>
			<span class="${"font-medium text-gray-500 mb-8"}">This step usually takes between 20 and 25 minutes.</span>` : `${space.stripe_payment_id ? `<span class="${"text-lg font-medium mt-4"}">Your Model is ready to be trained!</span>
			<div class="${"my-6"}">${`${validate_component(Button, "Button").$$render($$result, { size: "lg" }, {}, {
    default: () => {
      return `Train your model`;
    }
  })}`}</div>` : `${validate_component(FormPayment, "FormPayment").$$render($$result, { spaceId: space.id }, {}, {})}`}`}`}

		<div class="${"flex mb-5 mx-auto"}">${each(space.image_urls, (image) => {
    return `${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images/" + image,
        stacked: space.image_urls.length > 1
      },
      {},
      {}
    )}`;
  })}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spaces = [];
  return `${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "mb-4" }, {}, {
    default: () => {
      return `Create a new Space`;
    }
  })}
${validate_component(Uploadcard, "Uploadcard").$$render($$result, {}, {}, {})}
${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "mb-4 mt-8" }, {}, {
    default: () => {
      return `My Spaces`;
    }
  })}

${!spaces.length ? `<div class="${"flex items-center justify-center bg-white dark:bg-gray-700 h-28 w-full rounded-lg "}">${`${validate_component(Spinner, "Spinner").$$render($$result, { color: "gray" }, {}, {})}`}</div>` : `${each(spaces, (space) => {
    return `${validate_component(Spacecard, "Spacecard").$$render($$result, { space }, {}, {})}`;
  })}`}`;
});
export {
  Page as default
};
