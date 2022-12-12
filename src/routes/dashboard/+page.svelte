<script>
	import { Heading } from 'flowbite-svelte';

	import Uploadcard from './Uploadcard.svelte';

	import { supabase } from '$lib/clients/supabase';
	import { onMount } from 'svelte';
	import { Spinner } from 'flowbite-svelte';
	import toast from 'svelte-french-toast';
	import Spacecard from './Spacecard.svelte';

	let loading = true;
	let spaces = [];

	const getSpaces = async () => {
		try {
			const { data, error } = await supabase
				.from('spaces')
				.select()
				.order('stripe_payment_id', { ascending: true })
				.order('created_at', { ascending: false });
			if (error) throw error;
			spaces = data;
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		} finally {
			loading = false;
		}
	};

	onMount(() => {
		getSpaces();
	});
</script>

<Heading tag="h4" class="mb-4">Create a new Space</Heading>
<Uploadcard on:created={getSpaces} />
<Heading tag="h4" class="mb-4 mt-8">My Spaces</Heading>

{#if !spaces.length}
	<div class="flex items-center justify-center bg-white dark:bg-gray-700 h-28 w-full rounded-lg ">
		{#if loading}
			<Spinner color="gray" />
		{:else}
			<p class="text-gray-400 dark:text-gray-400 ">No spaces available yet</p>
		{/if}
	</div>
{:else}
	{#each spaces as space}
		<Spacecard {space} />
	{/each}
{/if}
