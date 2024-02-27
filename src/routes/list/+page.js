// export const prerender = true;

import { error } from '@sveltejs/kit';

export async function load({ fetch, url }) {
    const section = url.searchParams.get('s');

    if (section === null) {
        throw error(404, 'Not found');
    }
    var section_idx = parseInt(section);
    console.log(section_idx);

    const response = await fetch('database/db.json');
    const jdata = await response.json();

    // 각 섹션에 따라 다른 데이터를 반환합니다.
    let return_value;
    switch (section_idx) {
        case 0: // posts
            return_value = jdata['posts'];
            break;
        case 1: // awards
            return_value = jdata['awards'];
            break;
        case 2: // research
            return_value = jdata['research'];
            break;
        case 3: // projects
            return_value = jdata['projects'];
            break;
        case 4: // news
            return_value = jdata['news'];
            break;
        default:
            throw error(404, 'Not found');
    }

    // props를 통해 데이터를 반환합니다.
    return return_value;
}