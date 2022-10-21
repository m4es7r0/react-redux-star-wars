import { LazyLoadImage } from 'react-lazy-load-image-component'

import cn from 'classnames'
import styles from './PeopleCard.module.scss'

const PeopleCard = ({ person }) => {
    return (
        <li key={person.name}>
            <a
                className={cn(styles.card)}
                href={person.url}
                target={'_blank'}
                rel="noreferrer">
                <LazyLoadImage src={person.img} alt={person.name} effect='blur'/>
                <p>{person.name}</p>
            </a>
        </li>
    )
}

export default PeopleCard