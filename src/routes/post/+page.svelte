<script>
    export let data;
</script>

<link rel="stylesheet" href="css/font.css" />
<link rel="stylesheet" href="css/style.css" />

<div class="content">
    <div class="t1">{data.title}</div>
    <div class="spacer" style="height: 10px;"></div>
    <div class="t2">{data.subtitle}</div>
    <div class="spacer" style="height: 10px;"></div>
    <div class="tag-block">
        {#each typeof data.tags === "undefined" ? [] : data.tags.split(",") as tag}
            <!-- svelte-ignore a11y-missing-attribute -->
            <div><a>#{tag}</a></div>
        {/each}
    </div>
    <div class="spacer" style="height: 26px;"></div>
    <div class="post-content">
        <div class="post-content">
            {#each typeof data.contents === "undefined" ? [] : data.contents.split("\n") as content}
                {#if content.startsWith("img:")}
                    <!-- <img src={content.split("img:")[1]} /> -->
                    <img
                        src={content.replace("img:", "")}
                        alt=""
                        style="max-width: 100%;"
                    />
                {:else if content.startsWith("h2:")}
                    <h2 style="margin-top:36px; margin-bottom:26px;">
                        {content.replace("h2:", "")}
                    </h2>
                {:else}
                    <p>{content}</p>
                {/if}
            {/each}
        </div>
    </div>
</div>
