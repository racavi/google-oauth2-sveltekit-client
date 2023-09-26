import { redirect } from '@sveltejs/kit';
import { getSession } from './lib/server/session';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

    event.locals.session = getSession(event)
    // console.log('current session:', event.locals.session)

    if (event.url.pathname.startsWith('/test')) {
        if (!event.locals.session) {
            throw redirect(302, '/auth/google/authorize');
        }
    }

    return await resolve(event);

}
