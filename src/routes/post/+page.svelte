<script>
    export let data;
</script>

<link rel="stylesheet" href="css/font.css">
<link rel="stylesheet" href="css/style.css">

<div class="content">
    <div class="t1">{data.title}</div>
    <div class="spacer" style="height: 10px;"></div>
    <div class="t2">{data.subtitle}</div>
    <div class="spacer" style="height: 10px;"></div>
    <div class="tag-block">
        {#each typeof data.tags === 'undefined' ? [] : data.tags.split(',') as tag}
            <!-- svelte-ignore a11y-missing-attribute -->
            <div><a>#{tag}</a></div>
        {/each}
    </div>
    <div class="spacer" style="height: 26px;"></div>
    <div class="post-content">

    </div>
</div>