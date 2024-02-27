<script>
    export let data;
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    // @ts-ignore
    function openPost(to) {
        // goto('/post?n=' + n,{replaceState:true});
        window.location.href = to;
    }

    onMount(() => {
        // post click event
        var post_components = document.getElementsByClassName("component");
        for (let i = 0; i < post_components.length; i++) {
            post_components[i].addEventListener("click", () => {
                if (post_components[i].id !== "") {
                    openPost(post_components[i].id);
                }
            });
        }
    });
</script>

<link rel="stylesheet" href="css/font.css" />
<link rel="stylesheet" href="css/style.css" />

<div class="content">
    <div class="t1">포트폴리오</div>
    <div class="spacer" style="height: 26px;"></div>
    <div class="h-gallery">
        {#each typeof data.posts === "undefined" ? [] : data.posts.data as post_content}
            <div class="component hover" id="post?n={post_content.id}">
                <img src={post_content.title_image} alt="" />
                <div class="spacer" style="height: 6px;"></div>
                <div class="title">{post_content.title}</div>
                <div class="spacer" style="height: 6px;"></div>
                <div class="subtitle">{post_content.subtitle}</div>
                <div class="spacer" style="height: 6px;"></div>
                <div class="tag-block">
                    {#each typeof post_content.tags === "undefined" ? [] : post_content.tags.split(",") as tag}
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <div><a>#{tag}</a></div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>

    <div class="spacer" style="height: 48px;"></div>

    <div class="t1">수상작</div>
    <div class="spacer" style="height: 26px;"></div>
    <div class="h-gallery">
        {#each typeof data.awards === "undefined" ? [] : data.awards.data as post_content}
            <div class="component hover" id="post?n={post_content.id}">
                <img src={post_content.title_image} alt="" />
                <div class="spacer" style="height: 6px;"></div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <div class="title">
                    <!-- <a class="ranking-badge">{post_content.award_title}</a> -->
                    <a>{post_content.title}</a>
                </div>
                <div class="spacer" style="height: 6px;"></div>
                <div class="subtitle">{post_content.subtitle}</div>
                <div class="spacer" style="height: 6px;"></div>
                <div class="tag-block">
                    {#each typeof post_content.tags === "undefined" ? [] : post_content.tags.split(",") as tag}
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <div><a>#{tag}</a></div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>

    <div class="spacer" style="height: 48px;"></div>

    <div class="t1">연구/개발</div>
    <div class="spacer" style="height: 26px;"></div>
    <div class="h-gallery">
        {#each typeof data.research === "undefined" ? [] : data.research.data as post_content}
            <div class="component hover" id="post?n={post_content.id}">
                <img src={post_content.title_image} alt="" />
                <div class="spacer" style="height: 6px;"></div>
                <div class="title text-truncate">{post_content.title}</div>
                <div class="spacer" style="height: 6px;"></div>
                <div class="subtitle">{post_content.subtitle}</div>
                <div class="spacer" style="height: 6px;"></div>
                <div class="tag-block">
                    {#each typeof post_content.tags === "undefined" ? [] : post_content.tags.split(",") as tag}
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <div><a>#{tag}</a></div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>

    <div class="spacer" style="height: 40px;"></div>
</div>
