export let url_appstoreDeveloperAccount =
	'https://apps.apple.com/us/developer/hdh-analytics-inc/id1523364815';

export let url_instagram = 'https://www.instagram.com/hdh_analytics/';

export const products = [
	{
		title: 'Display Arranger',
		subtitle: 'Easily arrange your displays',
		description:
			'Easily rearrange your displays with an intuitive UI and save your favourite arrangements for easy access.',
		download:
			'https://apps.apple.com/us/app/display-arranger/id6475056370?pt=121840887&ct=WorkItHDHAnalyticsWebsite&mt=8',
		type: 'mac',
		image: 'icons/DisplayArrangerIcon.webp',
		image_style: 'rounded',
		privacy_policy:
			'We do not collect or make use of any of the information you enter in Display Arranger.',
		help: `
			<p class="alert">Please connect at least one external display to your device or else Display Arranger will not be of any use.</p>
			<h4>Setting display positions</h4>
			<ol>
				<li>Arrange your displays by dragging the grey and blue rectangles around.</li>
				<li>Make them match the physical placement of your displays for the best experience.</li>
				<li>Once satisfied, save your setup by clicking on the tile labeled \"Save\" at the bottom of the window.</li>
			</ol>
			<h4>Using an existing arrangement</h4>
			<ol>
				<li>Once an arrangement is saved, tap on it's tile at the bottom of the window to load it.</li>
			</ol>
			<h4>Renaming an arrangement</h4>
			<ol>
				<li>Right click on it's tile at the bottom of the window.</li>
				<li>Click "Edit details"</li>
				<li>Enter a new name</li>
				<li>Click "Apply changes"</li>
			</ol>`
	},
	{
		title: 'Grammy for Youtube Music',
		subtitle: 'The best way to listen on Vision Pro',
		description:
			'Listen to Youtube Music on the Apple Vision Pro in the simplest way possible using Grammy. Background music playing and easy access in dedicated app.',
		download: 'https://apps.apple.com/us/app/grammy-for-youtube-music/id6477367507',
		type: 'vision',
		image: 'icons/GrammyIcon.webp',
		image_style: 'rounded',
		privacy_policy: `HDH Analytics does not collect any data about your usage of this app. However, this app enables access to Youtube Music. As such, all of Google's policies apply. Please see Youtube Music's privacy policy for more details.`,
		help: `Please see Youtube Music's help pages for instructions on how to use the app. This is a client to help you better access the app on Vision Pro. The functionnality remains the same.`
	},
	{
		title: 'iFavs',
		subtitle: 'File & Link Manager',
		description:
			'Organise and use all of your links, files, and apps using iFavs. With quick and convenient access from the menubar, your favorites are a click away.',
		download:
			'https://apps.apple.com/app/apple-store/id1523364813?pt=121840887&ct=iFavsHDHAnalyticsWebsite&mt=8',
		type: 'mac',
		image: 'icons/iFavsIcon.webp',
		image_style: 'regular',
		privacy_policy:
			'We do not collect or make use of any of the information you enter in iFavs. Your links, their shorthand names, and your preferences are stored locally on your device. However, your links and their shorthand names are also stored on your iCloud account if iCloud Sync* is enabled. We do not process any of your information and have no access to it. \nIn addition, if you wish to delete your data, you can navigate to Edit Favorites in iFavs and click delete on each of your links in order to remove them permanently from your device. This will also delete them from iCloud if iCloud Sync is enabled.\n*iCloud Sync can be found under Edit Favorites, on the right hand side of the window. iCloud support was introduced in version 2.0. Prior to this release, your information is only stored locally on your device.',
		help: `<h4>Adding a new favorite:</h4>
			<ol>
				<li>Click on the star (Top right corner of your screen)</li>
				<li>Click Add to Favorites…</li>
				<li>Enter the name of your link in the Name textbox</li>
				<li>Enter the URL(Link) of the website you wish to save in the URL textbox</li>
				<li>Click the Save button to save your favorite</li>
			</ol>
			
			
			<h4>Removing a favorite:</h4>
			<ol>
				<li>Click on the star (Top right corner of your screen)</li>
				<li>Click Edit Favorites…</li>
				<li>Find the website you wish to delete in the left hand list</li>
				<li>Click the x on the desired website’s row</li>
			</ol>

			<h4>Opening a favorite:</h4>
			<ol>
				<li>Click on the star (Top right of your screen)</li>
				<li>Once a website is added (See Adding a new website), locate it in the list</li>
				<li>Click on the desired website’s name</li>
			</ol>

			<h4>Moving a favorite:</h4>
			<ol>
				<li>Click on the star (Top right corner of your screen)</li>
				<li>Click Edit Favorites…</li>
				<li>Drag the website’s name to the desired location</li>
				<li>(Up arrow moves the favorite up one row)</li>
				<li>(Down arrow moves the favorite down one row)</li>
			</ol>

			<h4>Reset settings:</h4>
			<ol>
				<li>Click on the star. (Top right of your screen)</li>
				<li>Click on the Recommended Defaults button</li>
			</ol>
			
			<h4>Settings:</h4>
			<ul>
				<li>Launch application at login: Turn on app with your computer.</li>
				<li>Automatically add http://: Highly recommended, increases security.</li>
				<li>iCloud Sync: Synchronize favourites with your other Macs, also serves as backup.</li>
				<li>Enable startup prompt: Show introduction window next time app starts.</li>
				<li>Recommended Defaults: resets settings to recommended settings.</li>
				<li>Sync group: Group where favorites are stored. These are: Favorites, Home, Work, and Other.</li>
				<li>When changed, your favorites will automatically change to display those of the current group.</li>
			</ul>`
	},
	{
		title: 'Pedalboard',
		subtitle: 'Portable Effects',
		description:
			'Plug in an instrument and your ready to jam. Pedalboard allows you to play in realtime with various effects. Looking for a little customization? Every pedal is adjustable using intuitive knobs.',
		download:
			'https://apps.apple.com/app/apple-store/id1584890462?pt=121840887&ct=HDHAnalyticsWebsite&mt=8',
		type: 'ios',
		image: 'icons/PedalboardIcon.webp',
		image_style: 'rounded',
		privacy_policy:
			'HDH Analytics Inc. does not collect any of your data (presets, usage history, etc). All saved data is stored on your device.',
		help: `
			<h4>Turn effects on and off</h4>
			<p>Toggle pedals by tapping on the grey stomp buttons.</p>
			<h4>Customizing effects</h4>
			<p>Edit pedal parameters by tapping and holding on the pedal's graphic. Changes are applied automatically.</p>`
	},
	{
		title: 'WorkIt - 5x5 Puzzles',
		subtitle: 'Math puzzles',
		description:
			'5x5 Math Puzzles puts your arithmetic skills to the test with grid based puzzles. Multiple difficulty levels allows anyone to get started.',
		download:
			'https://apps.apple.com/app/apple-store/id1551729886?pt=121840887&ct=WorkItHDHAnalyticsWebsite&mt=8',
		type: 'ios',
		image: 'icons/5x5Icon.webp',
		image_style: 'rounded',
		privacy_policy:
			'5×5 is built using Unity. As such, Unity may collect some of your data. Unity’s privacy policy is available at https://unity3d.com/legal/privacy-policy.\nIn addition, 5×5 uses Unity’s Analytics feature. This allows us to understand how users interact with 5×5 and enhance the user experience. Unity’s Analytics privacy policy is available at https://unity3d.com/legal/privacy-policy.',
		help: "<h4>Replay tutorial</h4><p>Tap the tutorial button at the app's main menu.</p>"
	},
	{
		title: 'Two Truths One Lie',
		subtitle: 'iMessage game',
		description: 'Play Two Truths One Lie on iMessage with your friends.',
		download: 'https://apps.apple.com/us/app/two-truths-and-a-lie-imessage/id1601860378',
		type: 'ios',
		image: 'icons/TTOLIcon.webp',
		image_style: 'rounded',
		privacy_policy:
			'We do not record the truths and lies entered in Two Truths One Lie. Images are stored in the cloud for 7 days before being deleted. We use Firebase Analytics to collect analytics on user behaviour and events.',
		help: `<h4>Starting a new game</h4>
		<ol>
			<li>Open the iMessage App.</li>
			<li>Enter your three statements into the textfields.</li>
			<li>Select which statement is a lie using the segmented picker.</li>
			<li>To confirm and send, tap the blue button under the prompts.</li>
		</ol>
		<h4>Answering someone else</h4>
		<ol>
			<li>Tap on the receive message.</li>
			<li>Tap on the false statement.</li>
			<li>Tap on the send button.</li>
		</ol>`
	},
	{
		title: 'GeoSwapper',
		subtitle: 'Tile puzzles',
		description:
			'Guess animals, food, and landmarks from all over the world!\nNot sure what it is? Complete the puzzle to reveal a beautiful image.',
		download: 'https://apps.apple.com/us/app/geoswap-word-puzzle-game/id1594992798',
		type: 'ios',
		image: 'icons/GeoSwapperIcon.webp',
		image_style: 'rounded',
		privacy_policy:
			'GeoSwapper is built using Unity. As such, Unity may collect some of your data. Unity’s privacy policy is available at https://unity3d.com/legal/privacy-policy. \nIn addition, GeoSwapper uses Unity’s Analytics feature. This allows us to understand how users interact with GeoSwapper and enhance the user experience. Unity’s Analytics privacy policy is available at https://unity3d.com/legal/privacy-policy.',
		help: `<h4>The Goal</h4>
		<p>Complete puzzles by either correctly placing the puzzle pieces to reconstruct the image or by spelling out the subject of the photo.</p>
		<h4>Replay the Tutorial</h4>
		<ol>
			<li>Inside the app, tap on the settings button in the top left corner of the home page.</li>
			<li>Tap "Show Tutorial when I play", The tutorial will now play the next time you open a level.</li>
		</ol>`
	}
];
