import cn from 'classnames';
import styles from './App.module.scss';

const App = () => {
  return (
    <>
      <h1 className={cn(styles.app, styles.text)}>hello</h1>
    </>
  );
}

export default App;
