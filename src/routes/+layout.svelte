<script>
    // import { base } from '$app/paths';

    import { onMount } from "svelte";

    let lang_toggle_flag = false;

    onMount(() => {
        // Custom Cursor
        var custom_cursor = document.getElementById("custom_cursor");
        var body = document.querySelector("body");
        var display_area = document.querySelector("iframe");

        function custom_show_cursor() {
            if (custom_cursor?.classList.contains("custom_cursor_hidden")) {
                custom_cursor?.classList.remove("custom_cursor_hidden");
            }
            custom_cursor?.classList.add("custom_cursor_visible");
        }

        function custom_hide_cursor() {
            if (custom_cursor?.classList.contains("custom_cursor_visible")) {
                custom_cursor?.classList.remove("custom_cursor_visible");
            }
            custom_cursor?.classList.add("custom_cursor_hidden");
        }

        // @ts-ignore
        function custom_mousemove(e) {
            custom_show_cursor();
            // @ts-ignore
            var custom_cursor_width = custom_cursor.offsetWidth * 0.5;
            // @ts-ignore
            var custom_cursor_height = custom_cursor.offsetHeight * 0.5;
            var custom_cursor_x = e?.clientX - custom_cursor_width;
            var custom_cursor_y = e?.clientY - custom_cursor_height;
            var custom_cursor_pos = `translate(${custom_cursor_x}px, ${custom_cursor_y}px)`;
            // @ts-ignore
            custom_cursor.style.transform = custom_cursor_pos;
        }

        window.addEventListener("mousemove", custom_mousemove);
        body?.addEventListener("mouseleave", custom_hide_cursor);

        // display area (iframe) event
        display_area?.addEventListener("mouseenter", (e) => {
            // @ts-ignore
            custom_cursor.style.display = "none";
        });
        display_area?.addEventListener("mouseleave", (e) => {
            custom_show_cursor();
            // @ts-ignore
            custom_cursor.style.display = "";
        });

        // @ts-ignore
        function custom_hover_cursor(e) {
            custom_cursor?.classList.add("custom_cursor_hover");
        }

        // @ts-ignore
        function custom_unhover_cursor(e) {
            custom_cursor?.classList.remove("custom_cursor_hover");
        }

        // @ts-ignore
        function custom_hover_text_cursor(e) {
            custom_cursor?.classList.add("custom_cursor_hover_text");
        }

        // @ts-ignore
        function custom_unhover_text_cursor(e) {
            custom_cursor?.classList.remove("custom_cursor_hover_text");
        }

        document.querySelectorAll("input").forEach((item) => {
            item.addEventListener("mouseover", custom_hover_text_cursor);
            item.addEventListener("mouseleave", custom_unhover_text_cursor);
        });

        document.querySelectorAll("div").forEach((item) => {
            if (item.classList.contains("hover")) {
                item.addEventListener("mouseover", custom_hover_cursor);
                item.addEventListener("mouseleave", custom_unhover_cursor);
            }
        });

        document.querySelectorAll("img").forEach((item) => {
            if (item.classList.contains("hover")) {
                item.addEventListener("mouseover", custom_hover_cursor);
                item.addEventListener("mouseleave", custom_unhover_cursor);
            }
        });

        document.querySelectorAll("a").forEach((item) => {
            if (item.classList.contains("hover")) {
                item.addEventListener("mouseover", custom_hover_cursor);
                item.addEventListener("mouseleave", custom_unhover_cursor);
            }
        });
    });
</script>

<link rel="stylesheet" href="css/font.css" />
<link rel="stylesheet" href="css/cursor.css" />
<link rel="stylesheet" href="css/style.css" />

<div id="custom_cursor" class="custom-cursor">
    <div class="custom-cursor-icon"></div>
</div>

<!-- Header Layout -->
<div class="header">
    <div class="header-body">
        <!-- Header Left Subgroup -->
        <div class="subgroup">
            <div id="header-logo" class="logo hover">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                    class="logo-group select-disable"
                    on:click={() =>
                        (window.location.href =
                            "https://dmslab-konkuk.github.io/website/")}
                >
                    <img src="img/konkuk_logo.svg" alt="" />
                    <div class="logo-text-group">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a class="header-text-title">DMS Laboratory</a>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a class="header-text-subtitle"
                            >Konkuk University, Seoul, Korea</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="subgroup">
            <div class="header-menu select-disable">
                <div class="menu-item hover">
                    <a href="https://dmslab-konkuk.github.io/website/education"
                        >Education</a
                    >
                </div>
                <div class="menu-item hover">
                    <a href="https://dmslab-konkuk.github.io/website/research"
                        >Research</a
                    >
                </div>
                <div class="menu-item hover">
                    <a href="https://dmslab-konkuk.github.io/website/people"
                        >People</a
                    >
                </div>
                <div class="menu-item hover">
                    <a
                        href="https://dmslab-konkuk.github.io/website/publication"
                        >Publication</a
                    >
                </div>
                <div class="menu-item hover">
                    <a href="https://dmslab-konkuk.github.io/website/project"
                        >Project</a
                    >
                </div>
                <div class="menu-item hover">
                    <a href="https://dmslab-konkuk.github.io/website/gallery"
                        >Gallery</a
                    >
                </div>
                <div class="menu-item hover">
                    <a href="https://github.com/dmslab-konkuk" target="_blank"
                        >Github</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End of Header -->

<slot />
