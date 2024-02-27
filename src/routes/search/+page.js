// export const prerender = true;

import { error } from '@sveltejs/kit';

export async function load({ url }) {
    const text = url.searchParams.get('keyword');

    return { text };
}