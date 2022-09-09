import styles from './arvostelu.module.scss';
import { FaExclamation } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

function Arvostelu(props) {
    return(
        <div className={styles.kirja}>
            <div className={styles.kirja_data}>
                <div>{props.data.rating_koko > 0 ? props.data.kirjanimi : "" }</div>
                <div>{props.data.rating_koko > 0 ? props.data.kirjailija : ""}</div>
                <div>{props.data.rating_koko > 0 ? <Rating value={props.data.rating_koko} precision={0.5} readOnly></Rating> : ""}</div>       
            </div>
            <div className={styles.kirja_linkki}>
                <Link to={"/arvosteluinfo/"+props.data.id}><FaExclamation /></Link>
            </div>
        </div>
    );
}

export default Arvostelu;