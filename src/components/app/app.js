import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import 'firebase/firestore';
import 'firebase/auth';
import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Kirjat from '../../routes/kirjat/kirjat';
import Arvostelut from '../../routes/arvostelut/arvostelut';
import Settings from '../../routes/settings/settings';
import AddKirja from '../../routes/addkirja/addkirja';
import EditKirja from '../../routes/editkirja/editkirja';
import InfoKirja from '../../routes/infokirja/infokirja';
import InfoArvostelu from '../../routes/infoarvostelu/infoarvostelu';
import AddArvostelu from '../../routes/addarvostelu/addarvostelu';
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons/uibuttons';


function App() {

  const [data, setData] = useState([]);
  // const [sijaintilist, setSijaintilist] = useState([]); // Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 1
  

  const user = useUser();

  const kirjaCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('kirja');
  const { data: kirjaCollection } = useFirestoreCollectionData(kirjaCollectionRef.orderBy("kirjailija"), {initialData: [], idField: "id"}) ;

  const arvosteluCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('kirja');
  const { data: arvosteluCollection }  = useFirestoreCollectionData(arvosteluCollectionRef.orderBy("rating_koko", "desc"), {initialData: [], idField: "id"});

  /* Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 2
  const sijaintiCollectionRef = useFirestore().collection('user').doc(user.data.uid).collection('sijainti');
  const { data: sijaintiCollection } = useFirestoreCollectionData(sijaintiCollectionRef.orderBy("sijainti"), {initialData: []});
  */

  useEffect(() => {
    setData(kirjaCollection);
  }, [kirjaCollection]);

  /* Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 3
  useEffect(() => {
    const sijainti = sijaintiCollection.map(obj => obj.sijainti);
    setSijaintilist(sijainti);
  }, [sijaintiCollection]);
  */

  const handleKirjaSubmit = (newkirja) => {
   kirjaCollectionRef.doc(newkirja.id).set(newkirja);
  }

  const handleKirjaDelete = (id) => {
    kirjaCollectionRef.doc(id).delete();
  }

  /* Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 4
  const handleSijaintiSubmit = (newsijainti) => {
    sijaintiCollectionRef.doc().set({sijainti: newsijainti});
  }
  */

  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/">
              <Kirjat data={data} />
            </Route>
            <Route path="/arvostelut">
              <Arvostelut data={arvosteluCollection}/>
            </Route>
            <Route path="/settings">
              <Settings /*sijainti={sijaintilist} onSijaintiSubmit={handleSijaintiSubmit} Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 5 */ />
            </Route>
            <Route path="/add">
              <AddKirja onKirjaSubmit={handleKirjaSubmit} /*sijainti={sijaintilist} Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 6 */ />
            </Route>
            <Route path="/edit/:id">
              <EditKirja onKirjaSubmit={handleKirjaSubmit} data={data} /*sijainti={sijaintilist} Jos tulevaisuudessa sijaintiin omia lisäys mahdollisuuksia 7*/ onKirjaDelete={handleKirjaDelete} />
            </Route>
            <Route path="/info/:id">
              <InfoKirja data={data} />
            </Route>
            <Route path="/arvosteluinfo/:id">
              <InfoArvostelu data={data}/>
            </Route>
            <Route path="/arvostele/:id">
              <AddArvostelu onKirjaSubmit={handleKirjaSubmit} data={data} />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
