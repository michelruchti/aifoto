<script>
	import { Check } from 'svelte-heros-v2';
	export let preview;
	export let uploaded;
</script>

<div class="relative h-24 w-24 mr-3 mb-3">
	{#if uploaded}
		<div class="absolute -top-1 -right-1 full p-1 bg-lime-500 rounded-full border-2 border-white">
			<Check class="text-white h-3 w-3" variation="solid" />
		</div>
	{/if}
	<img
		src={preview}
		class="object-cover h-24 w-24 rounded-lg border-2 border-white shadow-lg"
		alt=""
	/>
</div>
