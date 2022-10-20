
export const getAPIResource = async (url) => {
    try {
        const res = await fetch(url)
        const body = await res.json()

        if (!res.ok) {
            console.error('Could not fetch.', res.status)
        }

        return body
    } catch (error) {
        throw new Error(error)
    }
}

// (async () => {
//     const body = await getAPIResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     console.log(body)
// })();