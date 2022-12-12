<script>
	import { Button, Spinner, Input, Hr, P, Badge as FlowBadge } from 'flowbite-svelte';
	import { DocumentDuplicate, Sparkles } from 'svelte-heros-v2';
	import Badge from '$lib/components/Badge.svelte';
	import { Lightbox } from 'svelte-lightbox';

	export let data;
	const space = data.space;
	let prompt = '';
	let imageModal = false;

	const handleCreateShot = async () => {};
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

				<Button type="submit" class="lg:w-32 w-full mt-2 lg:mt-0"
					>Let's go <Sparkles class="ml-1 h-4 w-4" variation="solid" /></Button
				>
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
							<button on:click={() => (imageModal = true)}>
								<Lightbox>
									<img
										src={shot.shot_url}
										class="object-cover h-24 w-24 rounded-lg border-2 border-white shadow-lg"
										alt=""
									/></Lightbox
								></button
							>
						</div>

						<div class="w-full flex flex-col justify-between">
							<div>
								<p class="font-semibold mb-1">
									{shot.prompt}
								</p>
								<!-- <span> <DocumentDuplicate class="w-4 h-4 " /></span>-->
							</div>

							<div>
								<Badge time={shot.created_at} />
							</div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
