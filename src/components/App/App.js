import { useEffect, useState } from 'react'
import { AppContainer } from './AppStyle'
import { HomePage } from '../../pages/home'
import { AboutPage } from '../../pages/about'
import { Routes, Route} from 'react-router-dom';
import { NavBar } from '../../components'

export const App = () => {

  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (isDark)
    {
      setTheme('dark');
    } else
    {
      setTheme('light');
    }
  }, [isDark])


  return (
    <AppContainer data-theme={theme}>
      <NavBar theme={isDark} setTheme={setIsDark}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </AppContainer>
  );
};