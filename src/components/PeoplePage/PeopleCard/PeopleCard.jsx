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
                <img src={person.img} alt={person.name} />
                <p>{person.name}</p>
            </a>
        </li>
    )
}

export default PeopleCard