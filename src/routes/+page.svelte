<script>
	// Front-end data:
	// Вакансии не будут отображаться, если vacancies = [ ] (= пустой список)
	// Для отображения проектов нужно выставить значение переменной на "true":
	const show_projects = false;
	// Услуги
	const services = [
		{
			title: "Информационная и <span style='white-space:nowrap'>кибер-безопасность</span>",
			text: 'Мы готовы обеспечить вашему проекту профессиональный уровень информационной и кибер-безопасности.',
			src: 'services/cyber-security.svg'
		},
		{
			title: 'IT-консалтинг',
			text: 'ИТ-консалтинг — проектно-ориентированная деятельность, связанная с информационной поддержкой бизнес-процессов, позволяющая дать независимую экспертную оценку эффективности использования информационных технологий.',
			src: 'services/it-consulting.svg'
		},
		{
			title: 'Поставка программного и аппаратного обеспечения',
			text: 'Мы занимаемся поставкой качественного программного и аппаратного обеспечения в любое время по всему Казахстану.',
			src: 'services/software-shipment.svg'
		},
		{
			title: 'Услуги внедрения и системной интеграции',
			text: 'Мы обеспечим внедрение и системную интеграцию новых технологий в готовый проект, а также окажем техническую поддержку и сопровождение до конца процесса.',
			src: 'services/integration.svg'
		}
	];
	// Партнеры
	const partners = [
		{
			title: 'Asus',
			src: 'Asus.png'
		},
		{
			title: 'Dell Technologies',
			src: 'Dell.png'
		},
		{
			title: 'Fortinet',
			src: 'Fortinet.svg'
		},
		{
			title: 'Barracuda',
			src: 'Barracuda.svg'
		},
		{
			title: 'Hikvision',
			src: 'Hikvision.png'
		},
		{
			title: 'Kehuatech',
			src: 'Kehuatech.png'
		},
		{
			title: 'Socomec',
			src: 'Socomec.png'
		},
		{
			title: 'Fujitsu',
			src: 'Fujitsu.png'
		}
	];
	// Проекты
	const projects = [
		// Пример:
		{
			title: 'Название проекта',
		//	Описание
			description:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores cum rem voluptatibus aliquam nam delectus expedita. Quisquam ratione similique dolore necessitatibus, reprehenderit suscipit nesciunt quod culpa ipsam temporibus tempora.',
		//  // Путь к изображению относительно папки static/
			src: '/projects/software.svg'
		},
	];
	// Вакансии
	const vacancies = [
		// Пример:
		// {
		// 	title: 'Java-developer',
		// 	description: 'Разработка корпоративных приложений на базе Java EE'
		// },
	];

	// Scripts:
	import { onMount } from 'svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Scrollbar, Autoplay } from 'swiper';
	import { applyAction, deserialize } from '$app/forms';
	import 'swiper/css';
	import 'swiper/css/scrollbar';
	import svgBtn from '$lib/assets/imgs/svgBtn.svg';
	import icon from '$lib/assets/imgs/favicon.svg';
	import backgroundImg from '$lib/assets/imgs/background.jpg';

	onMount(() => {
		// Title text animation
		var textWrapper = document.querySelector('.title-text .first');
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			"<span class='letter inline-block'>$&</span>"
		);
		var textWrapper = document.querySelector('.title-text .second');
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			"<span class='letter inline-block'>$&</span>"
		);
		var textWrapper = document.querySelector('.title-text .third');
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			"<span class='letter inline-block'>$&</span>"
		);

		anime
			.timeline({ loop: true })
			.add({
				targets: '.title-text .first .letter',
				opacity: [0, 1],
				translateZ: 0,
				easing: 'easeOutQuad',
				duration: 950,
				delay: (el, i) => 45 * i
			})
			.add({
				targets: '.title-text .second .letter',
				opacity: [0, 1],
				translateZ: 0,
				easing: 'easeOutQuad',
				duration: 950,
				delay: (el, i) => 45 * i
			})
			.add({
				targets: '.title-text .third .letter',
				opacity: [0, 1],
				translateZ: 0,
				easing: 'easeOutQuad',
				duration: 950,
				delay: (el, i) => 45 * i
			})
			.add({
				targets: '.title-text',
				opacity: 0,
				duration: 1000,
				easing: 'easeOutExpo',
				delay: 2000
			});
	});

	// Feedback form display handling
	let is_form_active = false;
	function activateForm() {
		is_form_active = !is_form_active;
		document.querySelector('body').classList.add('overflow-hidden');
	}

	function deactivateForm() {
		is_form_active = !is_form_active;
		document.querySelector('body').classList.remove('overflow-hidden');
	}

	// Submit button disabled:
	let disabled = false;
	// Handle form submission
	async function handleSubmit(e) {
		disabled = true;
		const data = new FormData(this);
		const response = await fetch(this.action, {
			method: 'POST',
			body: data
		});
		const result = deserialize(await response.text());

		if (result.type === 'success') {
			alert('Письмо успешно отправлено!');
			applyAction(result);
			deactivateForm();
		} else if (result.type === 'invalid') {
			alert(result.data.message);
		} else {
			console.log(result.error.message);
			alert('Произошла ошибка на сервере!');
		}
		disabled = false;
	}
</script>

<svelte:head>
	<title>TechWinService</title>
	<link
		href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="Информационно-технический консалтинг, ТОО ТехВинСервис, ВинСервис, Тех Вин Сервис, TechWinService"
	/>
</svelte:head>

<span id="top" />
<section class="mt-12 py-0 relative">
	<div class="py-36 relative min-h-[750px]">
		<img
			src={backgroundImg}
			class="absolute h-full top-0 object-cover -z-10 w-full"
			data-mode="smartcrop"
			data-enablehd="always"
			alt="Dark sand"
		/>
		<div class="3xl:mx-72 bg-gradient text-white mx-5 md:mx-[10%]">
			<div class="flex flex-col lg:flex-row">
				<div class="title-text text-3xl py-12 md:py-24 font-bold md:text-5xl mx-4 md:mx-8 max-w-lg">
					<p class="first mb-3">Добро пожаловать,</p>
					<p>
						<span class="second">Мы – </span>
						<br class="xs:hidden" />
						<span class="third">TechWinService</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-lightBackground relative">
	<span id="services" class="absolute -top-20" />
	<h1>Услуги</h1>
	<div class="container mx-auto overflow-auto">
		<div class="flex flex-row flex-wrap justify-center text-center">
			{#each services as { title, text, src }}
				<div
					class="flex-grow-0 flex-shrink-0 mb-8 flex-[100%] md:flex-[50%] xl:mb-0 xl:flex-[25%] min-h-[220px]"
				>
					<div
						class="relative group overflow-x-hidden mx-4 sm:text-sm md:text-base rounded-md bg-white h-full hover:bg-slate-600 transition-all duration-700 ease-in"
					>
						<div class="flex flex-col h-full p-4 lg:p-8">
							<img src="/{src}" alt="service icon" class="w-[50%] self-center" />
							<h3 class="font-bold my-auto block">{@html title}</h3>
						</div>
						<div
							class="absolute top-0 left-0 w-full h-full p-8 transition-all duration-500  translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-lightBackground text-secondary overflow-y-auto md:custom-scrollbar"
						>
							<h3 class="font-bold">{@html title}</h3>
							<p>{text}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="bg-gradient relative">
	<span id="partners" class="absolute -top-20" />
	<div class="my-12">
		<h1>Клиенты и партнеры</h1>
		<div class="slider bg-lightBackground xl:mx-4 max-h-[150px]">
			<Swiper
				modules={[Scrollbar, Autoplay]}
				breakpoints={{
					'@0.5': {
						slidesPerView: 2
					},
					'@0.75': {
						slidesPerView: 3
					},
					'@1.0': {
						slidesPerView: 4
					},
					'@1.25': {
						slidesPerView: 6
					},
					'@1.6': {
						slidesPerView: 8
					}
				}}
				scrollbar={{ draggable: true }}
				preloadImages={false}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				}}
			>
				{#each partners as { title, src }}
					<SwiperSlide>
						<div
							class="partners-card border border-slate-400 flex justify-center items-center text-black h-32 p-4 hover:p-2 transition-all duration-300"
						>
							<img src="partners/{src}" alt="partner: {title}" class="max-h-[100%]" />
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>
	</div>
</section>

{#if show_projects}
	<section class="relative">
		<span id="projects" class="absolute -top-20" />
		<h1>Проекты</h1>
		<div class="container max-w-5xl mx-auto flex flex-col">
			{#each projects as { title, description, src }, i}
				<div
					class="projects-card mx-0 md:mx-10 flex mb-20 flex-col {i % 2
						? 'md:flex-row-reverse'
						: 'md:flex-row'}"
				>
					<div class="mx-4 lg:mx-10 flex-[30%] flex-shrink-0 flex-grow-0 text-center">
						<img {src} alt={title} class="max-w-md inline min-h-[250px]" />
					</div>
					<div class="mt-8 md:mt-0">
						<h2 class="font-bold">{title}</h2>
						<p class="my-8">{description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<section class="relative bg-lightBackground">
	<span id="vacancies" class="absolute -top-20" />
	<h1>Вакансии</h1>
	<div class="container mx-auto">
		<hr />
		{#if vacancies.length > 0}
			{#each vacancies as { title, description }, i}
				<a href="/#contacts">
					<div
						class="items-center flex py-4 relative overflow-x-hidden group  [&_*]:transition-all [&_*]:duration-400"
					>
						<h3 class="w-1/2 group-hover:translate-x-4">{title}</h3>
						<p class="w-1/2 group-hover:-translate-x-4">{description}</p>
						<img
							class="h-4 absolute -right-4 opacity-0 group-hover:-translate-x-4 group-hover:opacity-30"
							src={svgBtn}
							alt="go to contacts"
						/>
					</div>
				</a>
				<hr />
			{/each}
		{:else}
			<div class="text-center my-4">На данный момент открытых вакансий нет.</div>
		{/if}
	</div>
</section>

<section class="relative">
	<span id="about" class="absolute -top-20" />
	<h1>О нас</h1>
	<div class="container mx-auto">
		<div class="[&_p]:my-1 mb-8">
			<h2 class="font-bold mb-4 text-secondary">TechWinService</h2>
			<h4>
				Системный интегратор в области информационной безопасности, фирма по
				информационно-техническому консалтингу
			</h4>
			<br />
			<p>
				Информационная инфраструктура любой современной организации непрестанно растет и
				развивается, становясь все сложнее.
			</p>
			<p>
				Вместе с тем ее безопасность влияет на все используемые информационные системы и
				поддерживаемые ими бизнес-процессы. Таким образом, повышение защищенности ИТ инфраструктуры
				решает базовые вопросы информационной безопасности организации, снижает риски угроз со
				стороны внешних злоумышленников, нарушения доступности и прочее.
			</p>
			<p class="font-bold">TWS обеспечивает и помогает:</p>
			<ul class="list-disc ml-6">
				<li>
					Клиентам – быть конкурентоспособными за счет использования современных информационных
					технологий.
				</li>
				<li>Сотрудникам – возможность самореализации в технологичной и развивающейся компании.</li>
			</ul>
			<p>
				TWS строит долгосрочные отношения с клиентами, поставщиками и сотрудниками. За короткий срок
				компания смогла стать партнером более чем 50 поставщиков программного и аппаратного
				обеспечения, имеет высочайшие партнерские статусы всех ключевых вендоров. TWS предлагает
				комплексные IT-решения: подготовка IT-стратегии, консалтинг, поставка программного и
				аппаратного обеспечения, управление проектами, услуги внедрения, системной интеграции,
				технической поддержки и сопровождения.
			</p>
		</div>
		<div class="hidden h-96 items-center">
			<div class="text-center w-full">Картинки</div>
		</div>
	</div>
</section>

<section class="bg-gradient">
	<div class="relative group">
		<span id="contacts" class="absolute -top-20" />
		<h1>Мы готовы заняться вашей идеей</h1>
		<button
			class="block px-8 py-3 mx-auto text-xl transition-all duration-300 rounded-sm bg-brandBlue md:bg-transparent md:group-hover:bg-brandBlue group-hover:text-primary"
			on:click={activateForm}
		>
			Свяжитесь с нами
		</button>
	</div>
	<div
		class="fixed bg-opacity-70 bg-slate-500 h-full w-full top-0 left-0 transition-all overflow-y-auto {is_form_active
			? 'z-50'
			: 'opacity-0 -z-10'}"
	>
		<button class="w-full h-full fixed z-0" on:click={deactivateForm} />
		<div
			class="w-full xs:w-[90%] lg:w-4/5 mx-auto my-12 sm:mt-24 p-8 sm:p-12 bg-lightBackground rounded-lg text-secondary relative"
		>
			<button
				on:click={deactivateForm}
				class="absolute right-2 top-2 md:right-5 md:top-5 w-8 h-8 group"
			>
				<span
					class="transition-all absolute left-0 w-8 h-0.5 bg-black -rotate-45 group-hover:bg-brandBlue"
				/>
				<span
					class="transition-all absolute left-0 w-8 h-0.5 bg-black rotate-45 group-hover:bg-brandBlue"
				/>
			</button>
			<div class="lg:mb-10">
				<div class="relative">
					<h2 class="text-center font-light mb-4 lg:mb-12">Отправьте нам письмо!</h2>
					<form
						action="/form"
						class="flex flex-col [&_input]:my-2 [&_label]:font-bold"
						on:submit|preventDefault={handleSubmit}
					>
						<label for="email">Ваша электронная почта</label>
						<input
							class="w-full lg:w-96 p-2 rounded-sm"
							aria-label="email"
							type="email"
							name="email"
							autocomplete="email"
							placeholder="your@email.com"
							required
						/>
						<label for="heading">Заголовок письма</label>
						<input
							class="w-full lg:w-96 p-2 rounded-sm"
							aria-label="heading"
							type="text"
							name="heading"
							value="Свяжитесь со мной по поводу ваших услуг"
							required
						/>
						<label for="text">Содержание письма</label>
						<textarea
							class="w-full p-2 rounded-sm my-2"
							rows="5"
							maxlength="1000"
							aria-label="text"
							name="text"
							value="Пожалуйста, свяжитесь со мной по поводу ваших услуг."
						/>
						<input
							type="submit"
							class="self-center text-center mt-max px-12 py-2 w-48 rounded-md bg-white hover:bg-slate-100 transition-all disabled:bg-slate-200"
							value={disabled ? '' : 'Отправить'}
							{disabled}
						/>
						<div
							class="w-36 h-36 flex align-center transition-opacity duration-300 animate-spin bg-footer rounded-full absolute top-1/2 self-center {disabled
								? 'opacity-100'
								: 'opacity-0 -z-10'} "
						>
							<img src={icon} class="w-36" alt="Loading" />
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
