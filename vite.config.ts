import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), hmr()]
});

function hmr() {
	return {
		name: 'hmr',
		enforce: 'post' as const,
		handleHotUpdate({ file, server }: any) {
			if (file.endsWith('.css') || file.endsWith('.png') || file.endsWith('.png')) {
				server.ws.send({
					type: 'full-reload',
					path: '*'
				});
			}
		}
	};
}
