<script>
	import Header from '$lib/src/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import '../app.css';
	let { children } = $props();
</script>

<Toaster />
<div class="flex h-screen w-screen flex-col items-start justify-start">
	<div class="h-[10%] w-full">
		<Header />
	</div>
	<div class="h-[90%] w-full">
		{@render children()}
	</div>
</div>
