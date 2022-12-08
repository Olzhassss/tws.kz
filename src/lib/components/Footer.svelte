<script>
    import logo from '$lib/assets/imgs/logo-white.png';
    const soc_media_icons=[
        {
            "src":"/soc_media_icons/fb.svg",
            "alt":"facebook",
            "href":"https://www.facebook.com"
        },
        {
            "src":"/soc_media_icons/ln.svg",
            "alt":"linked-in",
            "href":"https://www.linkedin.com"
        },
    ]
    let year = new Date().getFullYear();
</script>

<footer>
    <div class="footer bg-[#414141] py-6 md:py-16 text-gray-400 [&_a]:underline [&_a:hover]:decoration-transparent [&_a]:transition-all">
        <div class="container mx-auto py-12 mb-12 items-center flex flex-col md:flex-row">
            <img class="h-20 md:mr-12" src="{logo}" alt="">
            <div class="my-12 text-center md:text-left md:my-0">
                <h3><a href="mailto:sales@tws.kz" class="underline">sales@tws.kz</a></h3>
                <br class="md:hidden">
                <h3><a href="tel:+77781018007">+7-778-101-80-07</a></h3>
            </div>
            <div class="mx-auto md:mr-0">
                <div class="flex ">
                    {#each soc_media_icons as {src, alt, href} }
                    <div class="mx-1">
                        <a href="{href}">
                            <img src="{src}" alt="{alt}">
                        </a>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
        <hr class="w-10/12 mx-auto border-gray-400">
        <div class="container pt-6 mx-auto">
            <span>© {year} Tech WinService</span>
            <span class="float-right ">Developed by <a href="https://www.linkedin.com/in/olzhas-t-986ba323a/" class="">Olzhas</a></span>
        </div>
    </div>
</footer>