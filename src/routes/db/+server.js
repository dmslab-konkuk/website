export const prerender = true;

import { parse } from 'url';

export async function GET({ fetch, request }) {
    const { query } = parse(request.url, true);
    const { n } = query;

    return new Response(JSON.stringify({title: 'Title : ' + n, content: 'Content : ' + n}));
}