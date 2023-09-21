<script>
    let count = 0;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h3>Counter : {count}</h3>
<button on:click={() => count++}>Increase</button>
<button on:click={() => count--}>Decrease</button>