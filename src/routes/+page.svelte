<script>
	import Parallax from '../components/parallax.svelte';
	import Fa from 'svelte-fa';
	import { faPlay } from '@fortawesome/free-solid-svg-icons';
	import { products } from '$lib/constants';
</script>

<img class="page-bg-img" src="landing-bg.jpg" alt="View of a starry night" />

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
						src={product.type == 'ios'
							? '/download-buttons/DownloadAppStore.svg'
							: '/download-buttons/DownloadMacAppStore.svg'}
						alt="Download Button"
					/>
				</a>
			</div>
		{/each}
	</div>
</Parallax>
