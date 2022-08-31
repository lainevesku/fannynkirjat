import { useUser, useAuth } from "reactfire";
import Button from "../../shared/uibuttons/uibuttons";
import { useHistory } from "react-router-dom";

function Settings(props) {

    const user = useUser();
    const auth = useAuth();
    const history = useHistory();

    const signOut = async () => {
        await auth.signOut();
        history.push('.');
        window.location.reload();
    }

    return(
        <>
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
        </>
    );
}

export default Settings;