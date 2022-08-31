import Button from '../../shared/uibuttons';
import firebase from 'firebase/app';
import { useAuth } from 'reactfire';

function Startup(props) {

   // Kirjaudutaan sisään Google-tunnuksilla
   const auth = useAuth();

   const signIn = async () => {
       await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

    return(
        <>
        <h1>TERVETULOA</h1>
        <div>Kirjaudu sisään google-tunnuksilla</div>
        <Button onClick={signIn}>Kirjaudu</Button>
        </>
    );
}

export default Startup;