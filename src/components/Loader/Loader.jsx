import loader from '../../static/loader.apng'
import styles from './Loader.module.scss'

const Loader = () => {
    return <img src={loader} alt="loading..." className={styles.loader} />
}

export default Loader