import styles from './startup.module.scss';
import Button from '../../shared/uibuttons';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';
import Header from '../header/header';
import Menu from '../menu/menu';

function Startup() {

   // Kirjaudutaan sisään Google-tunnuksilla
   const auth = useAuth();

   const signIn = async () => {
       await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

    return(
        <div className={styles.startup}>
            <Router>
                <Header />
                    <div className={styles.startup_text}>
                        <p>Tervetuloa Millie BootsDragon -sovellukseen. Sovelluksessa voit lisätä "sähköiseen kirjastoosi" kaikki kirjat mitä omistat tai olet lukenut.
                           Kirjat lisätään yksitellen täyttäen lomakkeelle kysyttyjä kirjan tietoja. Kirjan lisättyäsi sinulla on myös mahdollisuus antaa kirjalle arvostelu,
                           mikä koostuu 5 kategoriasta, mitkä arvioidaan tähdin 0-5. Voit myös lisätä arvosteluun kirjallisen arvion tai muistiinpanoja kirjasta.
                           Sisään kirjautuaksesi tarvitset Google-tunnukset.</p>     
                    <div className={styles.startup_button}>
                        <Button primary onClick={signIn}>Kirjaudu</Button>
                    </div>
                    </div>
                <Menu />
            </Router>
        </div>
    );
}

export default Startup;