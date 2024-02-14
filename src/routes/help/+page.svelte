<script>
	import Fa from 'svelte-fa';
	import { faPlay } from '@fortawesome/free-solid-svg-icons';
	import { products } from '$lib/constants';
	import Parallax from '../../components/parallax.svelte';
</script>

<img class="page-bg-img" src="disk.jpg" alt="View of a starry night" />

<div class="hero">
	<h1>Help</h1>
	<p>Help for all our apps.</p>
</div>

<Parallax clazz="center-horizontal">
	<h1 id="apps">Help</h1>
	<div class="product-privacy-policies">
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
					<p>{product.help}</p>
				</div>
			</div>
		{/each}
	</div>
</Parallax>
