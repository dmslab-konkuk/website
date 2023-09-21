export const prerender = true;

export async function load({ fetch }) {

    let n = '-1';
    if (typeof window !== 'undefined') {
        const currentURL = new URL(window.location.href);
        const queryParams = currentURL.searchParams;
        // @ts-ignore
        n = queryParams.get('n');
    }

    let jdata = null;

    try {
        const response = await fetch('database/db.json'); 
        if (response.ok) {
            jdata = await response.json();
            if ('posts' in jdata) {
                if (jdata['posts'].length > parseInt(n) && parseInt(n) >= 0) {
                    return jdata['posts'][n];
                }
            }
        } else {
            console.error('Failed to fetch JSON data');
        }
    } catch (error) {
        console.error('Error fetching JSON data', error);
    }

    return JSON.parse("{\"title\": \"FAIL\"}");
}