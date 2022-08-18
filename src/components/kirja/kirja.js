import styles from './kirja.module.scss';

function Kirja(props) {
    return(
        <div className={styles.kirja}>
            <div className={styles.kirja_data}>
                <div>Haruki Murakami</div>
                <div>Norwegian Wood</div>
                <div>1987</div>       
            </div>
        </div>
    );
}

export default Kirja;