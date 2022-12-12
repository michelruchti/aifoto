<script>
	import { Heading, Button } from 'flowbite-svelte';
	import { PaperAirplane } from 'svelte-heros-v2';
	import toast from 'svelte-french-toast';
	import { supabase } from '$lib/clients/supabase';

	let email = 'michel@ruchti.co';
	let loading = false;
	let mailSent = false;

	const handleLogin = async () => {
		console.log(window.location.origin + '/dashboard');
		try {
			loading = true;

			const { error } = await supabase.auth.signInWithOtp({
				email,
				options: { emailRedirectTo: window.location.origin + '/callback' }
			});
			if (error) throw error;
			toast.success('Email was sent!');
			mailSent = true;
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<section class="flex flex-col items-center justify-center  mx-auto lg:mt-20 mt-8">
	{#if !mailSent}
		<div class="text-center">
			<Heading tag="h2" customeSize="text-4xl font-extrabold ">Sign in to AI Foto.</Heading>
			<p class="mt-2 mb-6 text-gray-400 text-lg">Use your email address to sign in</p>
		</div>

		<div
			class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:border dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<form class="space-y-4 md:space-y-6" on:submit|preventDefault={handleLogin}>
					<div>
						<label for="email" class="block mb-2 font-medium text-gray-900 dark:text-white"
							>Email address</label
						>
						<input
							type="email"
							name="email"
							id="email"
							bind:value={email}
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="milo@gmail.com"
							required
						/>
					</div>

					<Button type="submit" class="w-full" disabled={loading}
						>{loading ? 'Loading' : 'Send magic link'}
						<PaperAirplane class="ml-3 " /></Button
					>
				</form>
			</div>
		</div>
	{:else}
		<div class="text-center">
			<PaperAirplane class="mx-auto w-16 h-16 mb-6 -rotate-45 dark:text-white" />
			<Heading tag="h2" customeSize="text-4xl font-extrabold ">Check your email</Heading>
			<p class="mt-2 mb-6 text-gray-400 text-lg">
				A <strong>sign in link</strong> has been sent to your email address.
			</p>
		</div>{/if}
</section>
