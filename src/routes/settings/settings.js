import styles from './settings.module.scss';
import { useUser, useAuth } from "reactfire";
import Button from "../../shared/uibuttons/uibuttons";
import { useHistory } from "react-router-dom";

function Settings() {

    const user = useUser();
    const auth = useAuth();
    const history = useHistory();

    const signOut = async () => {
        await auth.signOut();
        history.push('.');
        window.location.reload();
    }
/*  Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 1
    const handleSijaintiSubmit = (event) => {
        event.preventDefault();
        const newsijainti = event.target.elements.sijainti.value;
        props.onSijaintiSubmit(newsijainti);
        event.target.elements.sijainti.value = "";
    }
*/
    return(
        <div className={styles.settings}>
            <h2>Asetukset</h2>
            <div>
                <div>
                    <img src={user.data.photoURL} alt=""/>
                </div>
                <div>
                    {user.data.displayName} <br /> {user.data.email}
                </div>
                <Button secondary onClick={signOut}>Kirjaudu ulos</Button>
            </div>
           {/* Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 2
           <h3>Sijainti lista</h3>
            <div>
                { props.sijainti.map((sijainti) => <div key={sijainti}>{sijainti}</div> )}
                <form onSubmit={handleSijaintiSubmit}>
                    <div>
                        <input type="text" name="sijainti" />
                        <Button type="submit" primary>LISÄÄ</Button>
                    </div>
                </form>
    </div>*/}
        </div>
    );
}

export default Settings;