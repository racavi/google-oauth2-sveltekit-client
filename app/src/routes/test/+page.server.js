/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    const session = locals?.session;
    return {
        session
    }
}
