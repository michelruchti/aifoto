<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto, invalidate } from '$app/navigation';
	$: if ($page?.data?.session) goto('/dashboard');
</script>
