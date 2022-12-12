<script>
	import { goto } from '$app/navigation';
	import { env } from '$env/dynamic/public';
	import { Button, Spinner } from 'flowbite-svelte';
	import toast from 'svelte-french-toast';
	import { CheckBadge } from 'svelte-heros-v2';

	let loadingPayment = false;
	export let spaceId;

	const handlePayment = async (space_id) => {
		loadingPayment = true;
		try {
			// save space
			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					space_id: spaceId
				})
			});

			if (!response.ok) return toast.error('Something went wrong');
			const { url } = await response.json();

			goto(url);
		} catch (error) {
			toast.error('Something went wrong');
		}
	};
</script>

<div class="flex justify-center items-end space-x-2 ">
	<p class="text-6xl font-extrabold">
		${env.PUBLIC_STRIPE_SPACE_PRICE}<span class="text-gray-600 font-medium text-lg ">/ space</span>
	</p>
</div>
<span class="text-lg font-medium mt-4">Your Model is ready to be trained!</span>
<ul class="mt-6 text-left w-7/12 mx-auto">
	<li class="flex items-center space-x-2">
		<CheckBadge variation="solid" class="text-lime-500 w-5 h-5" /><span>
			<b>1</b> Space with a
			<strong>custom trained model</strong>
		</span>
	</li>
	<li class="flex space-x-2 items-center">
		<CheckBadge variation="solid" class="text-lime-500 w-5 h-5" /><span>
			<strong>100</strong> images generation (512x512 resolution)</span
		>
	</li>
	<li class="flex space-x-2 items-center">
		<CheckBadge variation="solid" class="text-lime-500 w-5 h-5" />
		<span>Your Space will be deleted 24 hours after your credits are exhausted</span>
	</li>
</ul>

<div class="my-6">
	{#if !loadingPayment}
		<Button size="lg" on:click={handlePayment}>Unlock now - ${env.PUBLIC_STRIPE_SPACE_PRICE}</Button
		>
	{:else}
		<Button size="lg" disabled
			><Spinner class="mr-3" size="5" color="white" />Loading payment</Button
		>
	{/if}
</div>
