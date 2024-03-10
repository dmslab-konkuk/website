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

<div class="main-gallery-viewer">
    <img src="img/test.jpg" alt="" />
</div>

<div class="content">
    <div class="t1">Introduction to DMS Research Group</div>
    <p>
        The DMS research group is currently concentrating on research and
        development related to Smart Mobility Systems and Bio-Medical/Healthcare
        intelligent Services based on deep learning-based AI technologies on
        distributed systems
    </p>

    <div class="spacer" style="height: 26px;"></div>
    <div class="t2">Distributed System Technology</div>
    <p>
        By utilizing Cloud Platform Technology, we are currently focusing on the
        development of “Intelligent Cloud Platform (IFC) for Smart Mobility
        systems and Healthcare Assistant systems, which is the core of the 4th
        Industrial Revolution. In particular, we are researching automatic AI
        platform provisiong service for “Intelligent Cooperative Heatlcare
        Assistant Agents for oldery people” and “Digital Twin Systems for Urban
        Air Mobility” application fields. We also research and develop stable
        and scalable system architecture and intelligent system operation
        management service.
    </p>

    <div class="spacer" style="height: 26px;"></div>
    <div class="t2">Artificial Intelligence Technology</div>
    <p>
        Various studies are in progress in relation to AI technology based on
        deep learning.
        <li>
            Intelligent and efficient path planning and control based on Deep
            Reinforcement Learning (DRL),
        </li>
        <li>
            Distributed Control technology for Swarm Mobility using Distributed
            Multiagent DRL technology,
        </li>
        <li>
            Human Pose and Activity recognition technology based on Visual
            Transformer,
        </li>
        <li>
            Object Detection, Face and Emotion Recognition technology using
            computer vision and widely used deep learning vision models such as
            CNN, YoLo, ResNet, MobileNet, etc.
        </li>
        <li>
            NLP Research on Knowledge-based Open-Domain Conversational QA and
            Dialog based on Transformer-based encoder/decoder languate models,
        </li>
        <li>
            Research on QA dataset creation competing Question Generation and
            Question Answering language models,
        </li>
        <li>
            Intelligent Chatbot technology supporting long-term conversation
            using Open Domain Knowledge etc.
        </li>
    </p>

    <div class="spacer" style="height: 26px;"></div>
    <div class="t2">Core Research Focus</div>
    <p>
        <li>
            Intelligent Mobility Control Technologies based on Multi-Agent Deep
            Reinforcement Learning and Attentions between agents
        </li>
        <li>
            Human Pose, Activity, Face, Emotion Recognition models based on deep
            learning for computer vision
        </li>
        <li>
            Open-Domain Converstational QA and Dialog systems based on Graph
            Knowledge and Self-Attention models
        </li>
        <li>
            Multi-Modal Situation Detection and Context Regonition Servies for
            Healthcare Assistant
        </li>
        <li>
            Automatic provisioning and intelligent operation management
            technologies for intelligent cloud platforms (IaaS, PaaS, SaaS,
            FaaS)
        </li>
        <li>
            Hierarchical Distributed Intelligent Fog and Cloud Cooperative
            Service Platform technology based on Offloading/Caching technolog
        </li>
        <li>
            Distributed system quality evaluation technology based on stochastic
            reward net and discrete event simulation
        </li>
        <li>
            Efficient and reusable SW Architecture design technology suitable
            for domain function and quality requirements
        </li>
    </p>

    <div class="spacer" style="height: 26px;"></div>
    <div class="t2">Contact</div>
    <p>
        <li>
            Office: Konkuk University New Engineering Building 1207 (건국대학교
            신공학관 1207호)
        </li>
        <li>Email: dkmin@konkuk.ac.kr (Prof. Dugki Min, Ph.D)</li>
    </p>
    <div class="spacer" style="height: 40px;"></div>
</div>
