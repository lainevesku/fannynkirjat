import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
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
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons/uibuttons';


function App() {

  const [data, setData] = useState([]);

  const kirjaCollectionRef = useFirestore().collection('kirja');
  const { data: kirjaCollection } = useFirestoreCollectionData(kirjaCollectionRef.orderBy("kirjailija", "asc"), {initialData: [], idField: "id"});


  useEffect(() => {
    setData(kirjaCollection);
  }, [kirjaCollection]);

  const handleKirjaSubmit = (newkirja) => {
   kirjaCollectionRef.doc(newkirja.id).set(newkirja);
  }

  const handleKirjaDelete = (id) => {
    kirjaCollectionRef.doc(id).delete();
  }

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
              <Arvostelut />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/add">
              <AddKirja onKirjaSubmit={handleKirjaSubmit} />
            </Route>
            <Route path="/edit/:id">
              <EditKirja onKirjaSubmit={handleKirjaSubmit} data={data} onKirjaDelete={handleKirjaDelete} />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
