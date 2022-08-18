import styles from './app.module.scss';
import Kirja from '../kirja/kirja';

function App() {
  return (
    <div className={styles.app}>
      <Kirja />
      <Kirja />
      <Kirja />
      <Kirja />
    </div>
  );
}

export default App;
