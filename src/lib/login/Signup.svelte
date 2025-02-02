<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import eyeclose from '$lib/assets/eyeclose.svg';
	import eyeopen from '$lib/assets/eyeopen.svg';
	import { enhance } from '$app/forms';
	let eyeOpen = $state(false);
	let { login = $bindable() } = $props();
</script>

<form
	class="mt-[-30px] flex h-full w-full flex-col items-center justify-center gap-8"
	method="POST"
	action="?/signup"
	use:enhance
>
	<div class="grid w-80 max-w-sm items-center gap-1.5">
		<Label for="name">Name</Label>
		<Input type="name" id="name" placeholder="name" />
	</div>
	<div class="grid w-80 max-w-sm items-center gap-1.5">
		<Label for="username">Username</Label>
		<Input type="username" id="username" placeholder="username" />
	</div>
	<div class="grid w-80 max-w-sm items-center gap-1.5">
		<Label for="password">Password</Label>
		<div class="relative">
			<Input type={eyeOpen ? 'text' : 'password'} id="password" placeholder="password" />
			<button
				class="absolute right-2 top-1/2 -translate-y-1/2 border-l border-gray-300 pl-2"
				onclick={(e) => {
					e.preventDefault();
					eyeOpen = !eyeOpen;
				}}
				type="button"
			>
				<img src={eyeOpen ? eyeopen : eyeclose} alt="eye" class="h-5 w-5" />
			</button>
		</div>
	</div>
	<div class="flex w-80 flex-row justify-start"><Button type="submit">Login</Button></div>
	<div>
		Already have an account, <span>
			<button
				type="button"
				class="font-[600] duration-300 hover:underline"
				onclick={() => (login = true)}
			>
				login here
			</button>
		</span>
	</div>
</form>
