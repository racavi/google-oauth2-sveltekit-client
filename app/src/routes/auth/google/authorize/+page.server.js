import { getGoogleAuthorizationUrl } from '$lib/server/auth'

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    return {
        authorizationUrl: await getGoogleAuthorizationUrl()
    }

}