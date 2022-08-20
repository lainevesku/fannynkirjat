import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Kirjat from '../../routes/kirjat/kirjat';
import Menu from '../menu/menu';
import { ButtonAppContainer } from '../../shared/uibuttons/uibuttons';

function App() {
  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Kirjat />
        </Content>
        <Menu />
      </div>
    </ButtonAppContainer>
  );
}

export default App;
