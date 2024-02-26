export const prerender = true;

export async function load({ fetch }) {
    const response = await fetch('database/db.json');
    const jdata = await response.json();
    return jdata;
}