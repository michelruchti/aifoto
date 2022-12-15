<script>
	import { Button, Spinner, Input, Hr, P, Badge as FlowBadge } from 'flowbite-svelte';
	import { Sparkles } from 'svelte-heros-v2';
	import { copy } from 'svelte-copy';
	import Badge from '$lib/components/Badge.svelte';
	import { Lightbox } from 'svelte-lightbox';
	import toast from 'svelte-french-toast';
	import { onMount } from 'svelte';

	export let data;
	let space = data.space;
	let prompt = '';
	let loading = false;

	$: if (space?.shots?.length) {
		space.shots = space.shots.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
		space = space;
	}

	const handleCreateShot = async () => {
		loading = true;
		const response = await fetch(`/api/spaces/${space.id}/shots/generate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				prompt: prompt
			})
		});

		if (!response.ok) return toast.error('Something went wrong');
		const json = await response.json();
		space.shots.unshift(json.shot);
		handleShotUpdate(json.shot.id);
		space.credits = json.credits;
		space = space;
		prompt = '';
		toast.success('Prediction started');
		loading = false;
	};

	const getShotInfo = async (shotId) => {
		const response = await fetch(`/api/spaces/${space.id}/shots/${shotId}`);
		if (!response.ok) return toast.error('Something went wrong');
		const shot = await response.json();
		if (shot.status === 'succeeded') {
			const objIndex = space.shots.findIndex((obj) => obj.id === shotId);
			space.shots[objIndex] = shot;
		}
		return shot.status;
	};

	const handleShotUpdate = (shotId) => {
		const interval = setInterval(async () => {
			const shotStatus = await getShotInfo(shotId);

			if (shotStatus === 'succeeded') clearInterval(interval);
		}, 2000);
	};

	onMount(() => {
		space.shots.forEach((el) => {
			if (el.status === 'processing') {
				handleShotUpdate(el.id);
			}
		});
	});
</script>

<div
	class="bg-white dark:border dark:bg-gray-800 dark:border-gray-700 w-full rounded-lg p-6 mb-4 dark:text-gray-100 mt-4"
>
	<div class="flex justify-between ">
		<div>
			<h4 class="text-2xl font-semibold">
				<span class="text-gray-700 dark:text-gray-400">Space</span>
				{space.instance_name}
			</h4>
			<p class="mt-2 mb-4 font-medium text-sm text-gray-600 dark:text-gray-400">
				<Badge time={space.created_at} large={true} />
			</p>
		</div>
		<div>
			{#if space.model_status === 'succeeded'}<FlowBadge
					large
					color={space.credits > 0 ? 'green' : 'red'}
					l><p><strong>{space.credits}</strong> shots left</p></FlowBadge
				>{/if}
		</div>
	</div>
	<div class="mt-10">
		<form on:submit|preventDefault={handleCreateShot}>
			<div class="lg:flex justify-between lg:space-x-2">
				<Input
					type="text"
					bind:value={prompt}
					placeholder="Painting of {space.instance_name} by Vincent van Gogh"
					required
				/>
				<div class="w-full lg:w-36 mt-2 lg:mt-0">
					{#if !loading}
						<Button size="lg" class="w-full" type="submit"
							>Let's go <Sparkles class="ml-1 h-4 w-4" variation="solid" /></Button
						>
					{:else}
						<Button size="lg" disabled class="w-full"
							><Spinner class="mr-2" size="5" color="white" />Starting</Button
						>
					{/if}
				</div>
			</div>
		</form>

		<div class="mt-4">
			{#if !space.shots.length}
				<Hr class="my-4" height="h-px" />

				<P class="text-center my-8"
					>You don't have generated an image yet. Let's get started with a creative prompt!</P
				>
			{:else}
				{#each space.shots as shot}
					<Hr class="my-6" height="h-px" />
					<div class="flex justify-between space-x-4">
						<div class="w-32">
							{#if !shot.shot_url && shot.status === 'processing'}
								<div
									class="flex items-center h-24 w-24 rounded-lg border-2 border-white shadow-lg bg-gray-200 dark:bg-gray-700"
								>
									<Spinner color="gray" class="mx-auto" />
								</div>
							{:else}
								<Lightbox>
									<img
										src={shot.shot_url}
										class="object-cover h-24 w-24 rounded-lg border-2 border-white shadow-lg"
										alt=""
									/></Lightbox
								>
							{/if}
						</div>

						<div class="w-full flex flex-col justify-between">
							<div>
								<p class=" mb-1">
									{shot.prompt}
								</p>
								<!-- <span> <DocumentDuplicate class="w-4 h-4 " /></span>-->
							</div>

							<div class="flex justify-between">
								<Badge time={shot.created_at} />

								<button
									use:copy={shot.prompt}
									on:svelte-copy={(event) => toast.success('Prompt copied to clipboard')}
									><FlowBadge color="dark">Copy prompt</FlowBadge></button
								>
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
