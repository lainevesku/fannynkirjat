import styles from './infokirja.module.scss';
import { useParams } from "react-router-dom";
import Button from '../../shared/uibuttons';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

function InfoKirja(props) {

    const { id } = useParams();
    const index = props.data.findIndex(kirja => kirja.id === id);
    let kirja = props.data[index];

    return(
        <>
            <div className={styles.info}>
                <div className={styles.info_row}>
                    <div>Kirjailija:</div>
                    <div className={styles.info_kirja}>{kirja.kirjailija}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Kirjan nimi:</div>
                    <div className={styles.info_kirja}>{kirja.kirjanimi}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Alkuperäinen nimi:</div>
                    <div className={styles.info_kirja}>{kirja.kirjaalkunimi}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Kirjan ilmestymisvuosi:</div>
                    <div className={styles.info_kirja}>{kirja.vuosi}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Kirjan painos:</div>
                    <div className={styles.info_kirja}>{kirja.painos + "."}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Painoksen ilmestymisvuosi:</div>
                    <div className={styles.info_kirja}>{kirja.painosvuosi}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Sivujen määrä:</div>
                    <div className={styles.info_kirja}>{kirja.sivuja}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Kirjan genre(t):</div>
                    <div className={styles.info_kirja}>{kirja.genre}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Kirjan ulkoasu:</div>
                    <div className={styles.info_kirja}>{kirja.malli}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Kirjan sijainti:</div>
                    <div className={styles.info_kirja}>{kirja.sijainti}</div>            
                </div>

                <div className={styles.info_row}>
                    <div>Kirjan Tähdet</div>
                    <div className={styles.info_kirja}>
                    <Rating name="read-only" value={kirja.rating} readOnly /></div>            
                </div>

                <div className={styles.info_napit}>
                    <div>
                        <Link to={"/edit/"+kirja.id}><Button secondary>MUOKKAA</Button></Link>
                    </div>
                    <div>
                        <Link to={"/arvostele/"+kirja.id}><Button primary>ARVOSTELE</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoKirja;