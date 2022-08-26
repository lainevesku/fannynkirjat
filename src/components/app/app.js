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
import data from '../../testdata';

function App() {
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
              <AddKirja />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
