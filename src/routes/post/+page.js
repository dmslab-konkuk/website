export const prerender = true;

import { error } from '@sveltejs/kit';

export async function load({ fetch }) {

    let n = '-1';
    if (typeof window !== 'undefined') {
        const currentURL = new URL(window.location.href);
        const queryParams = currentURL.searchParams;
        // @ts-ignore
        n = queryParams.get('n');
    }

    const response = await fetch('database/db.json'); 
    const jdata = await response.json();
    return jdata['posts'][parseInt(n)];

    // if ('posts' in jdata && jdata['posts'].length > parseInt(n) && parseInt(n) >= 0) {
        
    // } else {
    //     throw error(404, 'Not found');
    // }
}