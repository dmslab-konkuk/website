<link rel="stylesheet" href="/css/style.css">

<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    onMount(() => {
        console.log(document);
    })
</script>

<slot>

</slot>