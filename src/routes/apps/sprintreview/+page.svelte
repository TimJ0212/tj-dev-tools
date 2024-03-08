<script lang="ts">
	import SprintReviewColumn from './SprintReviewColumn.svelte';
</script>

<div class="flex flex-col items-start justify-around md:flex-row print:flex-row">
	<SprintReviewColumn category="good"></SprintReviewColumn>
	<SprintReviewColumn category="improvement"></SprintReviewColumn>
	<SprintReviewColumn category="suggestions"></SprintReviewColumn>
</div>
