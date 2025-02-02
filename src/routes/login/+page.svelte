<script>
	import { goto } from '$app/navigation';
	import Login from '$lib/login/Login.svelte';
	import Signup from '$lib/login/Signup.svelte';
	import { toast } from 'svelte-sonner';
	let login = $state(true);
	let { form } = $props();
	$effect(() => {
		if (form?.success) {
			goto('/');
		} else {
			toast.error(form?.message);
		}
	});
</script>

{#if login}
	<Login bind:login />
{:else}
	<Signup bind:login />
{/if}
