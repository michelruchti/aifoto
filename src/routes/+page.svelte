<script>
	import { Button, Heading, Card } from 'flowbite-svelte';
	import { ArrowLongRight } from 'svelte-heros-v2';
	import { page } from '$app/stores';
	import { PUBLIC_STRIPE_SPACE_PRICE } from '$env/static/public';
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
				Create your unique images with the help of advanced artificial intelligence.
			</p>

			<a href={$page.data.session ? '/dashboard' : '/login'}>
				<Button>Start creating now <ArrowLongRight class="ml-2" /></Button>
			</a>
		</div>
		<div class=" mt-16 lg:mt-0 lg:col-span-5 lg:flex">
			<img src="/hero.png" alt="mockup" class="dark:hidden" />
			<img src="/hero2.png" alt="mockup" class="hidden dark:block" />
		</div>
	</div>
</section>

<section class=" max-w-screen-xl px-4 py-8 text-center">
	<Heading tag="h2" customeSize="text-4xl font-extrabold mx-auto"
		>Release your creativity and create your unique fotos.</Heading
	>
	<div class="grid justify-items-center md:grid-cols-3 mt-6 gap-4">
		<Card img="/step1.png" reverse="true">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step 1:</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Create your personal space and upload between 10 - 20 images of your face.
			</p>
		</Card><Card img="/step2.png" reverse="true">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step 2:</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Train your model based on your uploaded images. Wait ~20 min until your model is ready.
			</p>
		</Card>
		<Card img="/step3.png" reverse="true">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step 3:</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
				Start generating AI-generated fotos based on your model by typing your own prompts.
			</p>
		</Card>
	</div>
</section>

<section class=" max-w-screen-xl px-4 py-8 text-center">
	<Heading tag="h2" customeSize="text-4xl font-extrabold mx-auto">Pricing</Heading>
	<Card padding="xl" class="mx-auto mt-4">
		<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Custom space</h5>
		<div class="flex items-baseline text-gray-900 dark:text-white mx-auto">
			<span class="text-3xl font-semibold">$</span>
			<span class="text-5xl font-extrabold tracking-tight">{PUBLIC_STRIPE_SPACE_PRICE}</span>
			<span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/space</span>
		</div>
		<!-- List -->
		<ul class="my-7 space-y-4">
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>1 custom space</span
				>
			</li>
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Custom AI trained model</span
				>
			</li>
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Credits for 100 images</span
				>
			</li>
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>Possibility to add additional credits</span
				>
			</li>
			<li class="flex space-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-600 dark:text-blue-500"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
					>512x512 pixel image resolution</span
				>
			</li>
		</ul>
		<Button class="w-full" href="/login">Start creating</Button>
	</Card>
</section>
