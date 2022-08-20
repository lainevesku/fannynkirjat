import styles from './app.module.scss';
import Header from '../header/header';
import Content from '../content/content';
import Kirjat from '../../routes/kirjat/kirjat';
import Menu from '../menu/menu';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content>
        <Kirjat />
      </Content>
      <Menu />
    </div>
  );
}

export default App;
