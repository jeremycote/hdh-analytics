<script>
	import { url_appstoreDeveloperAccount, url_instagram } from '$lib/constants';
	import Fa from 'svelte-fa';
	import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<nav>
	<a href="/">HDH Analytics</a>
	<a href="/#apps">Products</a>
	<a href={url_appstoreDeveloperAccount}>
		<Fa icon={faCloudArrowDown} />
		Appstore</a
	>
	<a href={url_instagram}>
		<Fa icon={faInstagram} />
		Instagram
	</a>
</nav>

<slot />

<footer>
	<a href="/">HDH Analytics Inc.</a>
	<a href="/help">Help</a>
	<a href="/privacy">Privacy Policies</a>
	<p>© 2024, HDH Analytics Inc.</p>
</footer>
