<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import ThemeToggle from '$lib/my-components/ThemeToggle.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
</script>

<div class="flex h-screen flex-col">
	<header class="flex justify-between p-5 print:hidden">
		<div><a href="/">Dev Tools</a></div>
		<div class="flex">
			<Button href="/apps/sprintreview" class="mx-2">Sprint-Review</Button>
			<Button href="/apps/moscow" class="mx-2">MoSCoW</Button>
			<Separator orientation="vertical" class="ml-2 mr-4" />
			<ThemeToggle></ThemeToggle>
		</div>
	</header>
	<slot class="flex-grow">
		<ModeWatcher />
	</slot>

	<footer class="mt-auto print:hidden">Build by T</footer>
</div>
