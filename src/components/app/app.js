import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Kirjat from '../../routes/kirjat/kirjat';
import Arvostelut from '../../routes/arvostelut/arvostelut';
import Settings from '../../routes/settings/settings';
import AddKirja from '../../routes/addkirja/addkirja';
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons/uibuttons';
import testdata from '../../testdata';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(testdata);
  }, []);

  const handleKirjaSubmit = (newkirja) => {
    let storeddata = data.slice();
    storeddata.push(newkirja);
    setData(storeddata);
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
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
