<script lang="ts">
	import { articles } from '$lib/constants';
	import Parallax from '../../../components/parallax.svelte';
	export let data: any;

	console.log(articles)
	console.log(data.id)

	const article = articles.find((article) => article.id === data.id);
</script>

<Parallax clazz="center-horizontal">
	{#if article == null || article == undefined}
		<h1>Article not found</h1>
	{:else}
		{@html article?.content}
	{/if}
</Parallax>
