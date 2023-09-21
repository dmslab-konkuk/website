<!-- <link rel="stylesheet" href="/css/style.css"> -->

<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log(document);
    })
</script>

<h3>BASE: {base}</h3>

<nav>
    <a href="{base}/">Home</a>
    <a href="{base}/post">Post</a>
</nav>

<slot>

</slot>