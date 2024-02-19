import styles from './styles.module.css';
import { HomePage } from '../../../pages/home'
import { Routes, Route} from 'react-router-dom';

export const App = () => {
  return (
    
    <div className={styles.main}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  
  );
};