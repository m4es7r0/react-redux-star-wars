import {
    HTTPS,
    SWAPI_ROOT,
    SWAPI_PEOPLE,
    URL_IMG_PERSON,
    GUIDE_IMG_EXTENSION
} from '../constants/api'

const getId = (url, category) => parseInt(url.replace(HTTPS + SWAPI_ROOT + category, ''))

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXTENSION}`