<script>
	import { Avatar, Button, Spinner, Badge } from 'flowbite-svelte';
	import { ArrowLongRight, Clock } from 'svelte-heros-v2';
	import toast from 'svelte-french-toast';
	import FormPayment from './FormPayment.svelte';
	import { env } from '$env/dynamic/public';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);

	export let space;

	let loadingTraining = false;

	const handleModelTrain = async () => {
		loadingTraining = true;
		try {
			// save space
			const response = await fetch(`/api/spaces/${space.id}/train`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({})
			});

			if (!response.ok) return toast.error('Something went wrong');
			toast.success('Training successfully started');
		} catch (error) {
			toast.error('Something went wrong');
		} finally {
			loadingTraining = false;
		}
	};
</script>

<div
	class="bg-white dark:border dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg p-6 mb-4 dark:text-gray-100"
>
	<div class="flex justify-between ">
		<div>
			<h4 class="text-2xl font-semibold">
				<span class="text-gray-700 dark:text-gray-400">Space</span>
				{space.instance_name}
			</h4>
			<p class="mt-2 mb-4 font-medium text-sm text-gray-600 dark:text-gray-400">
				<Badge color="dark" class=""
					><Clock class="w-4 mr-1" />{dayjs(space.created_at).fromNow()}</Badge
				>
			</p>
		</div>
		<div>
			{#if space.model_status === 'succeeded'}<Badge
					color={space.credits > 0 ? 'green' : 'red'}
					large={true}><p><strong>{space.credits}</strong> shots left</p></Badge
				>{/if}
		</div>
	</div>

	<div class="flex flex-col justify-center text-center">
		{#if space.model_status === 'succeeded'}
			<div class="my-6">
				<Button size="lg" href="/space/{space.id}"
					>Open space <ArrowLongRight class="ml-2" /></Button
				>
			</div>
		{:else if space.stripe_payment_id && space.model_status === 'processing'}
			<div class="mt-4"><Spinner class="" size="12" color="white" /></div>
			<p class="text-lg font-medium mt-8">Training of <b>your custom model</b> in progress!</p>
			<span class="font-medium text-gray-500 mb-8"
				>This step usually takes between 20 and 25 minutes.</span
			>
		{:else if space.stripe_payment_id}
			<span class="text-lg font-medium mt-4">Your Model is ready to be trained!</span>
			<div class="my-6">
				{#if loadingTraining}
					<Button size="lg" disabled
						><Spinner class="mr-3" size="5" color="white" />Starting training ...</Button
					>
				{:else}
					<Button size="lg" on:click={handleModelTrain}>Train your model</Button>
				{/if}
			</div>
		{:else}
			<FormPayment spaceId={space.id} />
		{/if}

		<div class="flex mb-5 mx-auto">
			{#each space.image_urls as image}
				<Avatar
					src="{env.PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/{image}"
					stacked={space.image_urls.length > 1}
				/>
			{/each}
		</div>
	</div>
</div>
