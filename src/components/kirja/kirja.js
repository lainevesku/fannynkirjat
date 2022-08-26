import styles from './kirja.module.scss';
import { FaExclamation } from 'react-icons/fa'

function Kirja(props) {
    return(
        <div className={styles.kirja}>
            <div className={styles.kirja_data}>
                <div>{props.data.kirjailija}</div>
                <div>{props.data.kirjanimi}</div>
                <div>{props.data.vuosi}</div>       
            </div>
            <div className={styles.kirja_linkki}>
                <FaExclamation />
            </div>
        </div>
    );
}

export default Kirja;