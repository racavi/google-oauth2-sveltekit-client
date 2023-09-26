import {
    CREDENTIALS_COOKIE_NAME,
} from '$env/static/private';


export const getSession = (event) => {
    // get cookies from request
    const { cookies } = event
    // get the user token from the cookie
    const credentials = cookies.get(CREDENTIALS_COOKIE_NAME)
    if(credentials) {
        return { credentials }
    }
    return null
}

