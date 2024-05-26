<script>
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';

	import logo from '$lib/assets/logo.svg';

	$: currentURL = $page.url.pathname;

	import { onMount } from 'svelte';

	const links = ['home', 'toolkits', 'assets'];

	export let hidden = false;

	onMount(() => {
		setTimeout(() => {
			hidden = true;
		}, 1500);
	});
</script>

<div class="flex justify-between items-center w-full p-6 mb-16 h-48">
	<div class="w-64 h-auto">
		{#if hidden}
			<a href="/">
				<img
					class="m-0 p-0"
					transition:fly={{ duration: 1500, easing: quintOut }}
					src={logo}
					alt=""
				/>
			</a>
		{/if}
	</div>
	<div class="list-none flex gap-6 rounded-full p-2">
		{#each links as link}
			{#if hidden}
				<a
					href={link === 'home' ? '/' : '/' + link}
					class="{currentURL === '/' && link === 'home'
						? 'text-[#fcfaf4] bg-[#333333]'
						: currentURL.slice(1) === link &&
							'text-[#fcfaf4] bg-[#333333]'} rounded-full py-1 px-4 font-josefin text-xl prose-neutral no-underline group transition-all duration-200 delay-75"
					transition:fly={{ delay: 1000, duration: 1500, easing: quintOut }}
				>
					{link}
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#333333]"
					></span>
				</a>
			{/if}
		{/each}
	</div>
</div>
