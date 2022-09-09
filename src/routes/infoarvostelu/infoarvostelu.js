import styles from './infoarvostelu.module.scss';
import { useParams } from 'react-router-dom';
import { Button } from '../../shared/uibuttons';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';

function InfoArvostelu(props) {

    const { id } = useParams();
    const index = props.data.findIndex(kirja => kirja.id === id);
    let kirja = props.data[index];

    return(
    <div className={styles.info}>
        <h2>KIRJA ARVOSTELU</h2>
        <h3>{kirja.kirjanimi}</h3>
        <h3>{kirja.kirjailija}</h3>
        <div className={styles.info_row}>
                <div>
                    <div>Kieli</div>
                    <Rating
                    name="rating_kieli"
                    value={kirja.rating_kieli}
                    precision={0.5}
                    readOnly
                    />
                </div>
                <div>
                    <div>Hahmot</div>
                    <Rating 
                    name="rating_hahmot"
                    value={kirja.rating_hahmot} 
                    precision={0.5}
                    readOnly
                    />
                </div>            
        </div>

        <div className={styles.info_row}>
                <div>
                    <div>Juoni</div>
                    <Rating
                    name="rating_juoni"
                    value={kirja.rating_juoni}
                    precision={0.5}
                    readOnly
                    />
                </div>
                <div>
                    <div>Aikansa edellä</div>
                    <Rating 
                    name="rating_aika"
                    value={kirja.rating_aika} 
                    precision={0.5}
                    readOnly
                    />
                </div>            
        </div>

        <div className={styles.info_row}>
                <div>
                    <div>Kokonaisuus</div>
                    <Rating
                    name="rating_koko"
                    value={kirja.rating_koko}
                    precision={0.5}
                    readOnly
                    />
                </div>            
        </div>

        {kirja.arvostelu === "" ? "" :
        <div className={styles.info_teksti}>
            {kirja.arvostelu}
        </div> }

        <div className={styles.info_napit}>
                    <div>
                        <Link to={"/info/"+kirja.id}><Button primary>KIRJAN TIEDOT</Button></Link>
                    </div>
                    <div>
                        <Link to={"/arvostele/"+kirja.id}><Button primary>MUOKKAA</Button></Link>
                    </div>
                </div>
    </div>
    );
}

export default InfoArvostelu;