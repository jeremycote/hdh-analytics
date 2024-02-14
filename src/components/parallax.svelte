<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	export let clazz: string;

	let scrollY = 0;

	// Update scrollY on scroll
	const handleScroll = () => {
		if (window.scrollY < 0) {
			scrollY = 0;
		} else if (window.scrollY < 400) {
			scrollY = window.scrollY;
		} else {
			scrollY = 400;
		}
	};

	// if (browser) {
	// 	// Attach and detach scroll event listeners
	// 	onMount(() => {
	// 		window.addEventListener('scroll', handleScroll);
	// 	});

	// 	onDestroy(() => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	});
	// }
</script>

<div class="parallax-content {clazz}" style="transform: translate3D(0, -{scrollY * 0.5}px, 0)">
	<slot />
</div>
