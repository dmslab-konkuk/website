<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    // @ts-ignore
    function openPost(to) {
        // goto('/post?n=' + n,{replaceState:true});
        window.location.href = to;
    }

    onMount(() => {
        // post click event
        var post_components = document.getElementsByClassName("component");
        for (let i = 0; i < post_components.length; i++) {
            post_components[i].addEventListener('click', () => {
                if (post_components[i].id !== "") {
                    openPost(post_components[i].id);
                }
            });
        }
    });
</script>

<link rel="stylesheet" href="css/font.css">
<link rel="stylesheet" href="css/style.css">

<div class="content">
    <div class="t1">포트폴리오</div>
    <div class="spacer" style="height: 26px;"></div>
    <div class="h-gallery">
        <div class="component hover" id="post?n=0">
            <img src="database/img/dummy1.png" alt=""/>
            <div class="spacer" style="height: 6px;"></div>
            <div class="title">환경 인식을 키울 수 있게 도와주는 교육용 메타버스, '에코버스'</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="subtitle">국민은행 소프트웨어 경진대회(KBSC) 2021 대상(1위) 수상작</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="tag-block">
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#수상작</a></div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#메타버스</a></div>
            </div>
        </div>
        <div class="component hover" id="post?n=1">
            <img src="database/img/dummy2.png" alt=""/>
            <div class="spacer" style="height: 6px;"></div>
            <div class="title">GPT-3.5를 활용한 믿을 수 있는 리뷰 플랫폼 서비스, 'COARR GUIDE'</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="subtitle">공군창업경진대회(2023) 수상작 & 국방부창업경진대회(2023) 본선 입선작</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="tag-block">
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#수상작</a></div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#AI서비스</a></div>
            </div>
        </div>
        <div class="component">
            <img src="database/img/dummy3.png" alt=""/>
            <div class="spacer" style="height: 6px;"></div>
            <div class="title">택시 택배 플랫폼 서비스, '보내다'</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="subtitle">정부 규제 샌드박스 통한 새로운 택배 서비스</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="tag-block">
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#디자인</a></div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#프로젝트</a></div>
            </div>
        </div>
        <div class="component hover">
            <img src="" alt=""/>
            <div class="spacer" style="height: 6px;"></div>
            <div class="title">COMPONENT_TITLE_TEXT</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="subtitle">COMPONENT_SUBTITLE_TEXT</div>
            <div class="spacer" style="height: 6px;"></div>
            <div class="tag-block">
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#TAG1</a></div>
                <!-- svelte-ignore a11y-missing-attribute -->
                <div><a>#TAG2</a></div>
            </div>
        </div>
    </div>
    <div class="spacer" style="height: 48px;"></div>
    <div class="t1">수상작</div>
    <div class="spacer" style="height: 26px;"></div>
</div>