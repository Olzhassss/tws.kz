<script>
	import logoImg from '$lib/assets/imgs/logo.png';
	import icon from '$lib/assets/imgs/favicon.svg';
	let is_header_active = false;
	let windowInnerWidth;
	let windowInnerHeight;
	function burgerHandler() {
		if (windowInnerWidth < 767.98) {
			is_header_active = !is_header_active;
		}
	}
</script>

<svelte:window bind:innerWidth={windowInnerWidth} bind:innerHeight={windowInnerHeight} />

<header class="fixed w-full z-40 py-3 bg-white text-primary shadow-md">
	<div class="container mx-auto">
		<div class="flex items-center justify-between relative flex-wrap">
			<a
				href="/#top"
				class="w-36 lg:flex-shrink-0"
				on:click={(e) => {
					if (is_header_active) burgerHandler();
				}}
			>
				<img src={logoImg} class="block max-h-14" alt="logo" />
			</a>
			<ul class="whitespace-nowrap mt-0 hidden md:flex">
				<li class="nav-link"><a href="/#about">О компании</a></li>
				<li class="nav-link"><a href="/#services">Услуги</a></li>
				<li class="nav-link"><a href="/#projects">Проекты</a></li>
				<li class="nav-link"><a href="/#partners">Партнеры</a></li>
				<li class="nav-link"><a href="/#vacancies">Вакансии</a></li>
				<li class="nav-link"><a href="/#contacts">Связаться</a></li>
			</ul>
			<button
				class:active={is_header_active}
				on:click={burgerHandler}
				class="md:hidden h-[44px] w-12 flex items-center justify-center"
			>
				<span
					class="block w-8 h-0.5 bg-primary relative transition-all duration-200 {is_header_active
						? 'rotate-45'
						: ''}"
				/>
				<span
					class="block w-8 h-0.5 absolute content-none top-3 bg-primary transition-all duration-200 {is_header_active
						? '-rotate-45 top-[21px]'
						: ''}"
				/>
				<span
					class="block w-8 h-0.5 absolute content-none bottom-3 bg-primary transition-all duration-200 {is_header_active
						? '-rotate-45 bottom-[21px]'
						: ''}"
				/>
			</button>
		</div>
		<nav
			class="w-1/3 mt-3 absolute -right-full transition-all duration-500 bg-white shadow-lg"
			class:active={is_header_active}
			style="height:{windowInnerHeight}px;"
		>
			<div class="flex flex-col justify-between h-full">
				<ul class="mt-0 [&_li]:p-4 [&_li]:text-lg">
					<a on:click={burgerHandler} href="/#about"><li class="nav-link">О компании</li></a>
					<a on:click={burgerHandler} href="/#services"><li class="nav-link">Услуги</li></a>
					<a on:click={burgerHandler} href="/#projects"><li class="nav-link">Проекты</li></a>
					<a on:click={burgerHandler} href="/#vacancies"><li class="nav-link">Вакансии</li></a>
					<a on:click={burgerHandler} href="/#contacts"><li class="nav-link">Контакты</li></a>
					<a on:click={burgerHandler} href="/#partners"><li class="nav-link">Партнеры</li></a>
				</ul>
				<img src={icon} class="block mx-auto mb-[88px] " alt="logo icon" />
			</div>
		</nav>
	</div>
</header>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={burgerHandler}
	class="fixed w-full h-full bg-black {is_header_active
		? 'opacity-20 z-30'
		: 'opacity-0 -z-0'} left-0 top-0 transition-all"
/>
