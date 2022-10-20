import { useEffect } from 'react';

import PeoplePage from '../PeoplePage';

import { getAPIResource } from '../../utils/network'

import styles from './App.module.scss';

const App = () => {

  useEffect(() => {
    getAPIResource('https://swapi.dev/api/people')
      .then(res => console.log(res))
  }, [])

  return (
    <div>
      <h1 className={styles.app}>Hello</h1>
      <PeoplePage />
    </div>
  );
}

export default App;
