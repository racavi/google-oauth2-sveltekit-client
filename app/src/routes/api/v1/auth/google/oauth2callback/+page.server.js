import { error, redirect } from '@sveltejs/kit';
import { BACKEND_GOOGLE_EXCHANGE_AUTHZ_CODE_FOR_TOKENS_ENDPOINT, CREDENTIALS_COOKIE_NAME } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, cookies, locals }) {
    const err = url.searchParams.get('error')
    if ( err ) {
        // console.log(`Error upon granting access to Google API: ${error}`)
        // return json({ message: 'Scope(s) not granted' }, { status: 401 })
        throw error( 401, 'Scope(s) not granted')
    }

    const code = url.searchParams.get('code')

    const tokens = await exchangeAuthorizationCodeForTokens(code)
    // console.log('tokens: ', tokens)

    locals.session = {
        credentials: tokens.access_token
    }
  
    cookies.set(CREDENTIALS_COOKIE_NAME, tokens.access_token, {
        httpOnly: true,
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 5 // 5m - 5 minutes
    });

    // throw redirect(302, '/test')
}

const exchangeAuthorizationCodeForTokens = async( code = '' ) => {
    // console.log('code', code)
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
        "code": code
    })

    try {
        const url = BACKEND_GOOGLE_EXCHANGE_AUTHZ_CODE_FOR_TOKENS_ENDPOINT

        const response = await fetch(url, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            // redirect: 'follow'
        })
        if(response.ok){
            return await response.json()
        }
        // console.log('There was a problem exchanging Authorization code, HTTP status:', response.status)
           
    } catch (error) {
        console.error('There was an error exchanging Authorization code:', error)
        return { access_token: '' }
    }
}
