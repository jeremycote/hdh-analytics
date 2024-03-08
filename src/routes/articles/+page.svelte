<script>
	import { articles } from '$lib/constants';
	import Parallax from '../../components/parallax.svelte';
</script>

<svelte:head>
	<meta name="description" content="Articles written by HDH Analytics." />
</svelte:head>

<img class="page-bg-img b-75" src="backgrounds/keyboard.webp" alt="A mechanical keyboard" />

<div class="hero">
	<h1>Articles</h1>
	<p>Posts from our developers.</p>
</div>

<Parallax clazz="center-horizontal">
	<h1 id="articles">Articles</h1>
	<div class="article-grid">
		{#each articles as article}
			<a href={`articles/${article.id}`} class="article">
				<img src={article.image} alt={article.image_alt} />
				<h2>{article.name}</h2>
				<p>{article.description}</p>
			</a>
		{/each}
	</div>
</Parallax>
