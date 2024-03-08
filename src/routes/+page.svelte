<script>
	import Parallax from '../components/parallax.svelte';
	import Fa from 'svelte-fa';
	import { faPlay } from '@fortawesome/free-solid-svg-icons';
	import { products } from '$lib/constants';
</script>

<svelte:head>
	<meta
		name="description"
		content="iOS and MacOS apps written by HDH Analytics. Includes the popular Display Arranger and Grammy for Youtube Music."
	/>
</svelte:head>

<img class="page-bg-img b-50" src="backgrounds/landing-bg.webp" alt="View of a starry night" />

<div class="hero">
	<h1>HDH Analytics</h1>
	<p>Developing applications to make your life better.</p>

	<a href="/#apps">
		<Fa icon={faPlay} />
		Apps</a
	>
</div>

<Parallax clazz="center-horizontal">
	<h1 id="apps">Our Products</h1>
	<div class="product-grid">
		{#each products as product}
			<div class="product">
				<img src={product.image} alt="Icon for {product.title}" class="img-{product.image_style}" />
				<h2>{product.title}</h2>
				<h3>{product.subtitle}</h3>
				<p>{product.description}</p>
				<a href={product.download}>
					<img
						src={product.type == 'mac'
							? '/download-buttons/DownloadMacAppStore.svg'
							: '/download-buttons/DownloadAppStore.svg'}
						alt="Download Button"
					/>
				</a>
			</div>
		{/each}
	</div>
</Parallax>
