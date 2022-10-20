import { useEffect, useState } from 'react';

import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getAPIResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api';

import loader from '../../static/loader.apng'
import cn from 'classnames';
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
        <ul className={cn(styles.list)}>
            {people.length > 0 ?
                people.map(({ name, img }) => {
                    return (
                        <li key={name}>
                            <div className={cn(styles.card)}>
                                <img src={img} alt={name} />
                                <p>{name}</p>
                            </div>
                        </li>
                    )
                }) : <img src={loader} alt="loading..." width={100} height={100} />}
        </ul>
    )
}

export default PeoplePage