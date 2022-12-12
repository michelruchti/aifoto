<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowLongRight } from 'svelte-heros-v2';
</script>

<section>
	<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-7">
			<h1
				class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
			>
				Create your own AI-generated fotos.
			</h1>
			<p
				class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Unleash your creativity and create your unique images with the help of advanced artificial
				intelligence.
			</p>

			<a href="/login">
				<Button>Start creating now <ArrowLongRight class="ml-2" /></Button>
			</a>
		</div>
		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
			<img
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
				alt="mockup"
			/>
		</div>
	</div>
</section>
