import {
    BACKEND_GOOGLE_GET_AUTHORIZATION_URL,
} from '$env/static/private';

export const getGoogleAuthorizationUrl = async () => {
    try {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        const response = await fetch(BACKEND_GOOGLE_GET_AUTHORIZATION_URL, requestOptions)
        const responsePayload = await response.json()
        return responsePayload.authorizationUrl
    } catch (error) {
        console.warn("Error requesting google's authorization URL: ", error);
        return '';
    }
}
