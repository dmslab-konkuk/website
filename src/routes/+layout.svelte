<script>
    import { base } from '$app/paths';

    console.log("BASE: " + base);
</script>

<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/post">Post</a>
</nav>

<slot>

</slot>