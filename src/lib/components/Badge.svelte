<script>
	import { Badge } from 'flowbite-svelte';
	import { Clock } from 'svelte-heros-v2';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

	export let time;
	export let large;
</script>

<Badge color="dark" {large}
	><Clock class="{large ? 'w-4' : 'w-3'} mr-1" />{dayjs(time).fromNow()}</Badge
>
