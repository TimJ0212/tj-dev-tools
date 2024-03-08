<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { createEventDispatcher } from 'svelte';
	import { Check, Pencil1, Trash } from 'svelte-radix';

	export let text: string;
	let editing = false;
	const dispatch = createEventDispatcher();

	function edit() {
		editing = true;
		queueMicrotask(() => {
			document.getElementById('input')?.focus();
		});
	}

	function blur() {
		editing = false;
	}

	function remove() {
		dispatch('remove');
	}
</script>

{#if editing}
	<div class="flex">
		<textarea id="input" bind:value={text} on:blur={blur} class="mt-2 w-full" />
		<Button
			variant="outline"
			size="icon"
			class="ml-2 mt-4 hover:bg-primary hover:text-secondary"
			on:click={edit}
		>
			<Check class="absolute h-[1.2rem] w-[1.2rem]  dark:rotate-0 dark:scale-100" />
		</Button>
	</div>
{:else}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="mt-2 flex justify-between whitespace-pre-wrap break-words">
		<div class="w-full">
			{text}
		</div>
		<div class="flex print:hidden">
			<Button
				variant="outline"
				size="icon"
				class="mr-2 hover:bg-primary hover:text-secondary"
				on:click={edit}
			>
				<Pencil1 class="absolute h-[1.2rem] w-[1.2rem]  dark:rotate-0 dark:scale-100" />
			</Button>
			<Button variant="outline" size="icon" class="hover:bg-red-500 " on:click={remove}>
				<Trash class="absolute h-[1.2rem] w-[1.2rem]  dark:rotate-0 dark:scale-100" />
			</Button>
		</div>
	</div>
{/if}
