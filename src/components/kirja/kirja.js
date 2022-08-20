import styles from './kirja.module.scss';
import { FaExclamation } from 'react-icons/fa'

function Kirja(props) {
    return(
        <div className={styles.kirja}>
            <div className={styles.kirja_data}>
                <div>Haruki Murakami</div>
                <div>Norwegian Wood</div>
                <div>1987</div>       
            </div>
            <div className={styles.kirja_linkki}>
                <FaExclamation />
            </div>
        </div>
    );
}

export default Kirja;