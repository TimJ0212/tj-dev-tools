<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import EditableText from '$lib/my-components/EditableText.svelte';
	import type { ReviewCategory, ReviewEntry } from '../../module.svelte';

	export let category: ReviewCategory;

	let data: ReviewEntry[] = [];

	function addElement(): void {
		data = [...data, { text: 'Edit' }];
	}

	function remove(point: ReviewEntry): void {
		const index = data.indexOf(point, 0);

		if (index > -1) {
			data.splice(index, 1);
			data = data;
		}
	}
</script>

<Card.Root class="m-2 w-[30em]">
	<Card.Header>
		<Card.Title>{category}</Card.Title>
	</Card.Header>
	<Card.Content>
		{#each data as point (point)}
			<Card.Root class="my-2">
				<Card.Content>
					<EditableText bind:text={point.text} on:remove={() => remove(point)} />
				</Card.Content>
			</Card.Root>
		{/each}
		<Button class="mt-4 print:hidden" on:click={addElement}>+</Button>
	</Card.Content>
</Card.Root>
