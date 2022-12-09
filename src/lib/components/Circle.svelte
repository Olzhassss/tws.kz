<script>
	export let number;
	function extendCircle(e) {
		document.getElementById(`custom-circle-${number}`).style.clipPath = 'poly';
	}
</script>

<div class="circle circle-{number}" id="custom-circle-{number}" on:mouseenter={extendCircle}>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
