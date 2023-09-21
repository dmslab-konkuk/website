<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    onMount(() => {
        
    });
</script>

<link rel="stylesheet" href="css/font.css">
<link rel="stylesheet" href="css/style.css">

<!-- Header Layout -->
<div class="header">

    <div class="header-body">

        <!-- Header Left Subgroup -->
        <div class="subgroup">

            <div id="header-logo" class="logo hover">
                <a href="/">Hoeun Lee’s Portfolio</a>
            </div>

            <div class="header-menu">
                <div class="menu-item hover">
                    <a href="/">포트폴리오</a></div>
                <div class="menu-item hover">
                    <a href="/">수상작</a></div>
                <div class="menu-item hover">
                    <a href="/">연구/개발</a></div>
                <div class="menu-item hover">
                    <a href="/">프로젝트</a></div>
                <div class="menu-item hover">
                    <a href="/">뉴스/클립</a></div>
                <div class="menu-item hover">
                    <a href="/">About Me</a></div>
            </div>

        </div>

        <!-- Header Right Subgroup -->
        <div class="subgroup" style="position: relative;">

            <!-- Language Toggle Button -->
            <div id="lang-toggle-btn" class="lang-toggle hover">
                <img class="lang-icon" src="./img/kor.svg" alt="">
                <img class="down-triangle" src="./img/down_triangle.svg" alt="">
            </div>

            <!-- Search InputText -->
            <div class="search-box">
                <img src="./img/search_icon.svg" alt="">
                <input type="text" id="search-inputtext" placeholder="검색어를 입력하세요"/>
            </div>

            <!-- language select box -->
            <div class="lang-select-box hidden" id="lang-popup">
            <!-- <div class="lang-select-box hidden"> -->

                <div id="lang-btn-kor" class="lang-button">
                    <img src="./img/kor.svg" alt="">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="">KOR</a>
                </div>
                
                <div class="div-line"></div>

                <div id="lang-btn-en" class="lang-button">
                    <img src="./img/en-us.svg" alt="">
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="">EN-US</a>
                </div>

            </div>

        </div>

    </div>

</div>
<!-- End of Header -->

<slot>

</slot>