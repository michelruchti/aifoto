import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import "classnames";
import { B as Button } from "../../chunks/Indicator.svelte_svelte_type_style_lang.js";
import { A as ArrowLongRight } from "../../chunks/ArrowLongRight.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section><div class="${"grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"}"><div class="${"mr-auto place-self-center lg:col-span-7"}"><h1 class="${"max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"}">Create your own AI-generated fotos.
			</h1>
			<p class="${"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"}">Unleash your creativity and create your unique images with the help of advanced artificial
				intelligence.
			</p>

			<a href="${"/login"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Start creating now ${validate_component(ArrowLongRight, "ArrowLongRight").$$render($$result, { class: "ml-2" }, {}, {})}`;
    }
  })}</a></div>
		<div class="${"hidden lg:mt-0 lg:col-span-5 lg:flex"}"><img src="${"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"}" alt="${"mockup"}"></div></div></section>`;
});
export {
  Page as default
};
