<script>
    // import { base } from '$app/paths';

    import { onMount } from "svelte";

    let lang_toggle_flag = false;

    onMount(() => {
        function lang_toggle() {
            if (lang_toggle_flag) {
                document.getElementById("lang-popup")?.classList.add("hidden");
                lang_toggle_flag = false;
            } else {
                document
                    .getElementById("lang-popup")
                    ?.classList.remove("hidden");
                lang_toggle_flag = true;
            }
        }

        document
            .getElementById("lang-toggle-btn")
            ?.addEventListener("click", lang_toggle);

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
    });
</script>

<link rel="stylesheet" href="css/font.css" />
<link rel="stylesheet" href="/css/cursor.css" />
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
                <a href="/">DMS Laboratory</a>
            </div>

            <div class="header-menu">
                <div class="menu-item hover">
                    <a href="/portfolio">포트폴리오</a>
                </div>
                <div class="menu-item hover">
                    <a href="/">수상작</a>
                </div>
                <div class="menu-item hover">
                    <a href="/">연구/개발</a>
                </div>
                <div class="menu-item hover">
                    <a href="/">프로젝트</a>
                </div>
                <div class="menu-item hover">
                    <a href="/">공부</a>
                </div>
                <div class="menu-item hover">
                    <a href="/">뉴스/클립</a>
                </div>
                <div class="menu-item hover">
                    <a href="/">About Me</a>
                </div>
            </div>
        </div>

        <!-- Header Right Subgroup -->
        <div class="subgroup" style="position: relative;">
            <!-- Language Toggle Button -->
            <!--
            <div id="lang-toggle-btn" class="lang-toggle hover">
                <img class="lang-icon" src="./img/kor.svg" alt="" />
                <img
                    class="down-triangle"
                    src="./img/down_triangle.svg"
                    alt=""
                />
            </div> -->

            <!-- Search InputText -->
            <div class="search-box">
                <img src="./img/search_icon.svg" alt="" />
                <input
                    type="text"
                    id="search-inputtext"
                    placeholder="검색어를 입력하세요"
                />
            </div>

            <script>
                document
                    .getElementById("search-inputtext")
                    .addEventListener("keydown", function (event) {
                        if (event.key === "Enter") {
                            const keyword = event.target.value;
                            if (keyword === "" || keyword.length === 0) {
                                return;
                            }
                            window.location.href = "/search?keyword=" + keyword;
                        }
                    });
            </script>

            <!-- language select box -->
            <div class="lang-select-box hidden" id="lang-popup">
                <!-- <div class="lang-select-box hidden"> -->

                <div id="lang-btn-kor" class="lang-button">
                    <img src="./img/kor.svg" alt="" />
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="">KOR</a>
                </div>

                <div class="div-line"></div>

                <div id="lang-btn-en" class="lang-button">
                    <img src="./img/en-us.svg" alt="" />
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="">EN-US</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End of Header -->

<slot />
