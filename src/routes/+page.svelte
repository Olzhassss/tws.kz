<script>
const services = [
    {
        "title": "Услуга",
        "text": "Услуга 1",
        "src": "svg.svg"
    },
    {
        "title": "Услуга",
        "text": "Услуга 2",
        "src": "svg.svg"
    },
    {
        "title": "Услуга",
        "text": "Услуга 3",
        "src": "svg.svg"
    },
    {
        "title": "Услуга",
        "text": "Услуга 4",
        "src": "svg.svg"
    },
];

const projects=[
    {
        "title":"Название проекта",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores cum rem voluptatibus aliquam nam delectus expedita. Quisquam ratione similique dolore necessitatibus, reprehenderit suscipit nesciunt quod culpa ipsam temporibus tempora.",
        "src":"/software.svg"
    },
    {
        "title":"Название проекта",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores cum rem voluptatibus aliquam nam delectus expedita. Quisquam ratione similique dolore necessitatibus, reprehenderit suscipit nesciunt quod culpa ipsam temporibus tempora.",
        "src":"/software.svg"
    },
    {
        "title":"Название проекта",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores cum rem voluptatibus aliquam nam delectus expedita. Quisquam ratione similique dolore necessitatibus, reprehenderit suscipit nesciunt quod culpa ipsam temporibus tempora.",
        "src":"/software.svg"
    },
]

const vacancies=[
    {
        "title":"Java-developer",
        "description":"Разрабатывать корпоративные приложения на базе Java EE",
    },
    {
        "title":"Java-developer",
        "description":"Разрабатывать корпоративные приложения на базе Java EE",
    },
    {
        "title":"Java-developer",
        "description":"Разрабатывать корпоративные приложения на базе Java EE",
    },
    {
        "title":"Java-developer",
        "description":"Разрабатывать корпоративные приложения на базе Java EE",
    },
]


import svgBtn from "$lib/assets/imgs/svgBtn.svg"
</script>

<svelte:head>
    <title>TWS.KZ</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" />
</svelte:head>

<section class="mt-12 py-0 relative">
    <div  class="py-36 relative min-h-[750px]">
        <img src="https://softwareag.scene7.com/is/image/softwareagprod/sag-ss-06:Large?wid=1260&amp;hei=720&amp;dpr=off" data-src="https://softwareag.scene7.com/is/image/softwareagprod/sag-ss-06" class="absolute h-full top-0 object-cover -z-10 w-full" data-mode="smartcrop" data-enablehd="always" alt="Living Connections">

        <div id ="topdiv"  class="3xl:mx-72 py-24 bg-gradient">
            <div class="grid grid-cols-2">
                <div class="font-bold text-5xl col-span-1 px-5">
                    Lorem ipsum dolor
                </div>
                <div class="selector col-span-1">

                </div>
            </div> 
        </div>
    </div>
</section>

<section class="bg-lightBackground relative" >
    <span id="services" class="absolute -top-20"></span>
    <h1>Услуги</h1>
    <div class="container mx-auto max-w-5xl">
        <div class="grid grid-cols-4 ">
            {#each services as {title, text, src} }
            <div class="col-span-1 mx-auto">
                <div class="relative group overflow-x-hidden p-12 rounded-md bg-white">
                    <img src="/{src}" alt="image" class="block">
                    <h3 class="bold">{text}</h3>
                    <div class="absolute top-0 left-0 w-full h-full p-4 transition-all duration-500 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 bg-gradient text-gray-300">
                        <h3 class="bold">{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>

<section class="bg-gradient relative" >
    <span id="partners" class="absolute -top-20"></span>
    <div class="my-12">
        <h1>Клиенты и партнеры</h1>
        <div class="slider flex">
            <div class="partners-card mx-2">partner</div>
            <div class="partners-card mx-2">partner</div>
            <div class="partners-card mx-2">partner</div>
            <div class="partners-card mx-2">partner</div>
            <div class="partners-card mx-2">partner</div>
            <div class="partners-card mx-2">partner</div>
            <div class="partners-card mx-2">partner</div>
            <div class="partners-card mx-2">partner</div>
        </div>
    </div>
</section>

<section class="relative">
    <span id="projects" class="absolute -top-20"></span>
    <h1>Проекты</h1>
    <div class="container max-w-5xl mx-auto flex flex-col">
        {#each projects as {title, description, src},i }
        <div class="projects-card mx-10 flex mb-20 {(i%2)?"flex-row-reverse":""}">
            <div class="mx-10 flex-[30%] flex-shrink-0 flex-grow-0">
                <img src="{src}" alt="project img">
            </div>
            <div class="">
                <h2 class="font-bold">{title}</h2>
                <p class="my-8">{description}</p>
                <p>link?</p>
            </div>
        </div>
        {/each}
    </div>
</section>

<section class="relative bg-lightBackground">
    <span id="vacancies" class="absolute -top-20"></span>
    <h1>Вакансии</h1>
    <div class="container mx-auto">
        <hr>
        {#each vacancies as {title, description},i }
        <div class="items-center flex py-4 relative overflow-x-hidden group  [&_*]:transition-all [&_*]:duration-400">
            <h3 class="w-1/2 group-hover:translate-x-4">{title}</h3>
            <p class="w-1/2 group-hover:-translate-x-4">{description}</p>
            <img class="h-4 absolute -right-4 opacity-0 group-hover:-translate-x-4 group-hover:opacity-30" src="{svgBtn}" alt="see vacancy details">
        </div>
        <hr>
        {/each}
    </div>
</section>

<section class="relative">
    <span id="about" class="absolute -top-20"></span>
    <h1>О нас</h1>
    <div class="container mx-auto">
        <h2 class="font-bold">TWS.KZ</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi quas, exercitationem impedit, perferendis porro molestias maiores possimus ut deserunt eum repellat ipsum! Illum aut fugiat enim consequatur veritatis sit?</p>
        <div class="grid grid-cols-3 my-8 [&_h4]:font-light">
            <div>
                <h1 class="text-left mb-2 font-bold">30+</h1>
                <h4>созданных проектов</h4>
            </div>
            <div>
                <h1 class="text-left mb-2 font-bold">5 лет</h1>
                <h4>на рынке</h4>
            </div>
            <div>
                <h1 class="text-left mb-2 font-bold">200+</h1>
                <h4>сотрудников в компании</h4>
            </div>
        </div>
        <div class="h-96 items-center flex">
            <div class="text-center w-full"> Картинки</div>
        </div>
    </div>
</section>


<section class="bg-lightBackground relative group" >
    <span id="contacts" class="absolute -top-20"></span>
    <h1>Мы готовы заняться вашей идеей</h1>
    <button class="block px-8 py-3 mx-auto transition-all duration-300 rounded-sm group-hover:bg-purple-200 group-hover:text-primary">Узнайте о нас больше</button>
</section>