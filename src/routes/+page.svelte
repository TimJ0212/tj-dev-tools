<script>
	import { messaging } from '$lib/firebase/firebase.app';
	import { onMessage } from 'firebase/messaging';

	onMessage(messaging, (payload) => {
		console.log('Message recieved: ', payload);
	});
</script>

<section
	class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
>
	<div
		class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
	>
		Best tools for software developers are now in town.
	</div>
	<div class="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
		Use them for free
	</div>
</section>
