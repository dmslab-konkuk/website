export const prerender = true;

import { error } from '@sveltejs/kit';

export async function load({ fetch }) {

    let n = '0';
    if (typeof window !== 'undefined') {
        const currentURL = new URL(window.location.href);
        const queryParams = currentURL.searchParams;
        // @ts-ignore
        n = queryParams.get('n');
        console.log(n);
    } else {
        console.log("no window");
    }

    const response = await fetch('database/db.json');
    const jdata = await response.json();
    return jdata['posts']['data'][parseInt(n)];

    // if ('posts' in jdata && jdata['posts'].length > parseInt(n) && parseInt(n) >= 0) {

    // } else {
    //     throw error(404, 'Not found');
    // }
}