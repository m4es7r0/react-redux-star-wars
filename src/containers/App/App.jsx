import PeoplePage from '../PeoplePage';

import styles from './App.module.scss';

const App = () => {
  return (
    <div>
      <h1 className={styles.app}>Hello</h1>
      <PeoplePage />
    </div>
  );
}

export default App;
