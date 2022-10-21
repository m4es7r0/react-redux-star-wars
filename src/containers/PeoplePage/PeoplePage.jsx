import { useEffect, useState } from 'react';

import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getAPIResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api';

import PeopleList from '../../components/PeoplePage/PeopleList';
import Loader from '../../components/Loader/Loader';
import styles from './PeoplePage.module.scss'

const PeoplePage = () => {
    const [people, setPeople] = useState([])
    const [errorApi, setErrorApi] = useState(false)

    const getResource = async (url) => {
        const res = await getAPIResource(url)

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return { id, name, url, img }
            })

            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    const errorMessage = errorApi ? <h1>Error with server</h1> : null
    const content = !errorApi & people.length > 0 ? <PeopleList people={people} /> : !errorApi ? <Loader /> : null

    return (
        <div className={styles.page}>
            <h1>Navigate</h1>
            {errorMessage}
            {content}
        </div>
    )
}

export default PeoplePage