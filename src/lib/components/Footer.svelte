<script>
    import logo from '$lib/assets/imgs/logo.svg';
    // import fb from '../images/logo-facebook.png';
    // import inst from '../images/logo-instagram.png';
    // import ln from '../images/logo-linkedin.png';
    const soc_media_icons=[
        {
            "src":"/soc_media_icons/fb.svg",
            "alt":"facebook",
            "href":"facebook.com"
        },
        {
            "src":"/soc_media_icons/fb.svg",
            "alt":"facebook",
            "href":"facebook.com"
        },
        {
            "src":"/soc_media_icons/fb.svg",
            "alt":"facebook",
            "href":"facebook.com"
        },
    ]
    let year = new Date().getFullYear();
</script>

<footer>
    <div class="footer bg-gradient py-16 text-secondary">
        <div class="container mx-auto py-12 items-center flex">
            <img class="h-20  mr-6" src="{logo}" alt="">
            <div class="">
                <h3 class="font-bold">Казахстан</h3>
                <p>Ул. , офис 000.</p>
            </div>
            <div class="ml-auto">
                <h5 class="font-bold">email@gmail.com</h5>
                <div class="flex ">
                    {#each soc_media_icons as {src, alt, href} }
                    <div class="">
                        <a href="{href}">
                            <img src="{src}" alt="{alt}">
                        </a>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
        <hr class="w-10/12 mx-auto border-gray-400">
        <p class="container mx-auto pt-6">© {year} TWS</p>
    </div>
</footer>