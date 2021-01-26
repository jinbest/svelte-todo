import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'first app'
	}
});

export default app;