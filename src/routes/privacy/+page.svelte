<script>
	import Fa from 'svelte-fa';
	import { faPlay } from '@fortawesome/free-solid-svg-icons';
	import { products } from '$lib/constants';
	import Parallax from '../../components/parallax.svelte';
</script>

<svelte:head>
	<meta name="description" content="Privacy Policies for all of HDH Analytics' apps." />
</svelte:head>

<img class="page-bg-img" src="backgrounds/disk.webp" alt="A hard drive" />

<div class="hero">
	<h1>Privacy Policies</h1>
	<p>Learn how we handle your information.</p>
</div>

<Parallax clazz="center-horizontal">
	<h1 id="apps">Privacy Policies</h1>
	<div class="product-vertical-list">
		{#each products as product}
			<div class="product">
				<div>
					<img
						src={product.image}
						alt="Icon for {product.title}"
						class="img-{product.image_style}"
					/>
					<h2>{product.title}</h2>
					<h3>{product.subtitle}</h3>
				</div>
				<div>
					<p>{@html product.privacy_policy}</p>
				</div>
			</div>
		{/each}
	</div>
</Parallax>
