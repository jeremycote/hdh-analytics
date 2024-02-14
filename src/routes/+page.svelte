<script>
	import Parallax from '../components/parallax.svelte';
	import Fa from 'svelte-fa';
	import { faPlay } from '@fortawesome/free-solid-svg-icons';

	const products = [
		{
			title: 'Display Arranger',
			subtitle: 'Easily arrange your displays',
			description:
				'Easily rearrange your displays with an intuitive UI and save your favourite arrangements for easy access.',
			download:
				'https://apps.apple.com/us/app/display-arranger/id6475056370?pt=121840887&ct=WorkItHDHAnalyticsWebsite&mt=8',
			type: 'mac',
			image: 'icons/DisplayArrangerIcon.png',
			image_style: 'regular'
		},
		{
			title: 'iFavs',
			subtitle: 'File & Link Manager',
			description:
				'Organise and use all of your links, files, and apps using iFavs. With quick and convenient access from the menubar, your favorites are a click away.',
			download:
				'https://apps.apple.com/app/apple-store/id1523364813?pt=121840887&ct=iFavsHDHAnalyticsWebsite&mt=8',
			type: 'mac',
			image: 'icons/iFavsIcon.png',
			image_style: 'regular'
		},
		{
			title: 'Pedalboard',
			subtitle: 'Portable Effects',
			description:
				'Plug in an instrument and your ready to jam. Pedalboard allows you to play in realtime with various effects. Looking for a little customization? Every pedal is adjustable using intuitive knobs.',
			download:
				'https://apps.apple.com/app/apple-store/id1584890462?pt=121840887&ct=HDHAnalyticsWebsite&mt=8',
			type: 'ios',
			image: 'icons/PedalboardIcon.png',
			image_style: 'rounded'
		},
		{
			title: 'WorkIt - 5x5 Math Puzzles',
			subtitle: 'Math puzzles',
			description:
				'5x5 Math Puzzles puts your arithmetic skills to the test with grid based puzzles. Multiple difficulty levels allows anyone to get started.',
			download:
				'https://apps.apple.com/app/apple-store/id1551729886?pt=121840887&ct=WorkItHDHAnalyticsWebsite&mt=8',
			type: 'ios',
			image: 'icons/5x5Icon.png',
			image_style: 'rounded'
		},
		{
			title: 'Two Truths One Lie',
			subtitle: 'iMessage game',
			description: 'Play Two Truths One Lie on iMessage with your friends.',
			download:
				'https://apps.apple.com/app/apple-store/id1551729886?pt=121840887&ct=WorkItHDHAnalyticsWebsite&mt=8',
			type: 'ios',
			image: 'icons/TTOLIcon.png',
			image_style: 'rounded'
		},
		{
			title: 'GeoSwapper',
			subtitle: 'Tile puzzles',
			description:
				'Guess animals, food, and landmarks from all over the world!\nNot sure what it is? Complete the puzzle to reveal a beautiful image.',
			download: 'https://apps.apple.com/us/developer/hdh-analytics-inc/id1523364815',
			type: 'ios',
			image: 'icons/GeoSwapperIcon.png',
			image_style: 'rounded'
		}
	];
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
				<a href={product.download}>Download for {product.type}</a>
			</div>
		{/each}
	</div>
</Parallax>
