import PeopleCard from '../PeopleCard/PeopleCard';

import cn from 'classnames';
import styles from './PeopleList.module.scss'

const PeopleList = ({ people }) => {
    return (
        <ul className={cn(styles.list, 'container')}>
            {people.map((person) => <PeopleCard person={person} key={person.name} />)}
        </ul>
    )
}

export default PeopleList