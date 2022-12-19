<script>
	import { Button, Spinner, Select, Input } from 'flowbite-svelte';
	import Dropzone from 'svelte-file-dropzone';
	import Image from './Imagecard.svelte';
	import { resizeImage, uploadImage } from '$lib/utils/upload';
	import toast from 'svelte-french-toast';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let files = [];
	let urls = [];
	let instanceName = '';

	$: instanceName = instanceName.replace(/[^a-zA-Z0-9-]/g, '');
	let instanceClass = 'man';
	let state = 'upload'; // upload, uploading, uploaded
	const instanceTypes = [
		{ value: 'man', name: 'Man' },
		{ value: 'woman', name: 'Woman' },
		{ value: 'dog', name: 'Dog' },
		{ value: 'cat', name: 'Cat' },
		{ value: 'couple', name: 'Couple' }
	];

	const handleFilesSelect = (e) => {
		let { acceptedFiles } = e.detail;
		acceptedFiles = acceptedFiles.map((file) =>
			Object.assign(file, { preview: URL.createObjectURL(file) })
		);
		files = [...files, ...acceptedFiles];
	};

	const handleUpload = async () => {
		state = 'uploading';
		try {
			for (let index = 0; index < files.length; index++) {
				const file = await resizeImage(files[index]);

				const url = await uploadImage(file, $page.data.session?.user?.id);
				files[index].uploaded = true;
				urls = [...urls, url];
			}
			toast.success('Images uploaded');
			state = 'uploaded';
		} catch (error) {
			toast.error('Something went wrong');
			state = 'upload';
		}
	};

	const handleCreateSpace = async () => {
		state = 'creating';
		try {
			// save space
			const response = await fetch('/api/spaces', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					urls,
					instanceName,
					instanceClass
				})
			});

			if (!response.ok) return toast.error('Something went wrong');

			dispatch('created');
			toast.success('New space created');
			// Reset
			state = 'upload';
			files = [];
			urls = [];
			instanceName = '';
		} catch (error) {
			toast.error('Something went wrong');
		} finally {
			state = 'upload';
		}
	};
</script>

{#if state === 'upload'}
	<Dropzone
		on:drop={handleFilesSelect}
		accept="image/png, image/jpeg, image/jpg"
		maxSize="10000000"
		containerClasses="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-700 dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
		disableDefaultStyles="true"
	>
		<svg
			aria-hidden="true"
			class="mb-3 w-10 h-10 text-gray-700 dark:text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
			/></svg
		>
		<p class="mb-2 text-2xl text-gray-700 dark:text-gray-400">
			<span class="font-semibold ">Click to upload</span> or drag and drop
		</p>
		<p class="text-gray-500 dark:text-gray-400 text-center">
			For best results upload between 10 - 20 images of your face with different angles (right,
			left, profiles).
		</p>
	</Dropzone>
{/if}

{#if files.length}
	<div class="mt-4">
		<div class="pl-4 flex flex-wrap">
			{#each files as item}
				<Image preview={item.preview} uploaded={item.uploaded} />
			{/each}
		</div>

		<div class="mt-4 flex flex-col items-center">
			{#if state === 'uploading'}
				<Button size="lg" disabled
					><Spinner class="mr-3" size="5" color="white" /> Uploading images ...</Button
				>
			{:else if state === 'upload'}
				<Button size="lg" on:click={handleUpload}
					>Upload {files.length} image{files.length > 1 ? 's' : ''}</Button
				>
			{/if}
		</div>
	</div>
{/if}

{#if state === 'uploaded' || state === 'creating'}
	<div>
		<form on:submit|preventDefault={handleCreateSpace}>
			<div class="grid gap-6 mb-6 md:grid-cols-3">
				<div>
					<Input type="text" bind:value={instanceName} placeholder="Subject name" required />
				</div>
				<div><Select items={instanceTypes} bind:value={instanceClass} /></div>
				<div>
					{#if state === 'creating'}
						<Button disabled
							><Spinner class="mr-2" size="4" color="white" /> Creating space ...</Button
						>
					{:else}
						<Button type="submit">Create your space</Button>
					{/if}
				</div>
			</div>
		</form>
	</div>
{/if}
