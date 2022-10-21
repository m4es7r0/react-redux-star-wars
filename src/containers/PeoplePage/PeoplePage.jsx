import { useEffect, useState } from 'react';

import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getAPIResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api';

import PeopleList from '../../components/PeoplePage/PeopleList';
import loader from '../../static/loader.apng'

import styles from './PeoplePage.module.scss'

const PeoplePage = () => {
    const [people, setPeople] = useState([])

    const getResource = async (url) => {
        const res = await getAPIResource(url)
        const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)

            return { id, name, url, img }
        })
        setPeople(peopleList)
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, [])

    return (
        <div className={styles.page}>
            {
                people.length > 0
                ? <PeopleList people={people} />
                : <img src={loader} alt="loading..." className='loader' />
            }
        </div>
    )
}

export default PeoplePage