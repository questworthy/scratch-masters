<script>
	import '../app.css';
	import '@fontsource-variable/josefin-sans'; // Supports weights 100-700

	import Nav from '$lib/components/Nav.svelte';

	import { fade } from 'svelte/transition';

	export let data;
</script>

<Nav />
{#key data.currentRoute}
	<main in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}
