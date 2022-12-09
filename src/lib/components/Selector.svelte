<script>
	import '$lib/components/Circle.svelte';
	import Circle from './Circle.svelte';
	let activeSelector = 0;
</script>

<div class="relative w-72 h-72 ">
	<Circle number="1" class="1" />
	<Circle number="2" />
	<Circle number="3" />
</div>
