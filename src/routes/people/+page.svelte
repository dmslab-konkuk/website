<script>
    export let data;
</script>

<div class="content-center">
    <div class="spacer" style="height: 50px;"></div>
    <div class="t1">DMS Researchers</div>
    <div class="spacer" style="height: 50px;"></div>

    {#each typeof data.people === "undefined" ? [] : data.people.researchers as people_data}
        <div class="t2">{people_data.team}</div>
        <div class="spacer" style="height: 10px;"></div>
        {#if typeof people_data.description !== "undefined"}
            <div class="t3" style="font-weight: normal;">
                {people_data.description}
            </div>
        {/if}
        <div class="spacer" style="height: 20px;"></div>
        <!-- PhD and MS -->
        <div class="profile-container">
            {#each typeof people_data.teammate === "undefined" ? [] : people_data.teammate as team_data}
                {#if team_data.role.includes("ms") || team_data.role.includes("ms_intern") || team_data.role.includes("phd") || team_data.role.includes("phd_course")}
                    <div class="profile-card">
                        {#if team_data.profile === "none"}
                            <div class="profile-alt"></div>
                        {:else}
                            <img
                                class="profile-img"
                                src="http://dmslab-konkuk.github.io/img/people/{team_data.profile}"
                                alt=""
                            />
                        {/if}
                        {#if team_data.name_kor === "none"}
                            <p class="profile-name">{team_data.name_eng}</p>
                        {:else}
                            <p class="profile-name">
                                {team_data.name_eng} ({team_data.name_kor})
                            </p>
                        {/if}
                        <div class="profile-badge-container">
                            {#each typeof team_data.role === "undefined" ? [] : team_data.role.split(",") as role}
                                <!-- svelte-ignore a11y-missing-attribute -->
                                {#if role === "prof"}
                                    <div class="prof">Prof.</div>
                                {:else if role === "phd"}
                                    <div class="phd">PhD.</div>
                                {:else if role === "phd_course"}
                                    <div class="phd-course">PhD. Course</div>
                                {:else if role === "ms"}
                                    <div class="ms">M.S. Course</div>
                                {:else if role === "ms_intern"}
                                    <div class="ms-intern">M.S. Intern</div>
                                {:else if role === "bs"}
                                    <div class="bs">B.S. Course</div>
                                {:else}
                                    <div class="default">{role}</div>
                                {/if}
                            {/each}
                        </div>
                    </div>
                {/if}
            {/each}
        </div>

        <!-- BS and ETC -->
        <div class="profile-container">
            {#each typeof people_data.teammate === "undefined" ? [] : people_data.teammate as team_data}
                {#if !(team_data.role.includes("ms") || team_data.role.includes("ms_intern") || team_data.role.includes("phd") || team_data.role.includes("phd_course"))}
                    <div class="profile-card" style="margin-top: 30px;">
                        {#if team_data.profile === "none"}
                            <div class="profile-alt"></div>
                        {:else}
                            <img
                                class="profile-img"
                                src={team_data.profile}
                                alt=""
                            />
                        {/if}
                        {#if team_data.name_kor === "none"}
                            <p class="profile-name">{team_data.name_eng}</p>
                        {:else}
                            <p class="profile-name">
                                {team_data.name_eng} ({team_data.name_kor})
                            </p>
                        {/if}
                        <div class="profile-badge-container">
                            {#each typeof team_data.role === "undefined" ? [] : team_data.role.split(",") as role}
                                <!-- svelte-ignore a11y-missing-attribute -->
                                {#if role === "prof"}
                                    <div class="prof">Prof.</div>
                                {:else if role === "phd"}
                                    <div class="phd">PhD.</div>
                                {:else if role === "phd_course"}
                                    <div class="phd-course">PhD. Course</div>
                                {:else if role === "ms"}
                                    <div class="ms">M.S. Course</div>
                                {:else if role === "ms_intern"}
                                    <div class="ms-intern">M.S. Intern</div>
                                {:else if role === "bs"}
                                    <div class="bs">B.S. Course</div>
                                {:else}
                                    <div class="default">{role}</div>
                                {/if}
                            {/each}
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
        <div class="spacer" style="height: 100px;"></div>
    {/each}
</div>
