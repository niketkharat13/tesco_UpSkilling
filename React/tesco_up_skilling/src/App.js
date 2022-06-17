import './App.css';
import HOC from './topics/hoc';
import RenderProps from './topics/renderprops/parent';
import Layouteffect from './topics/layouteffetct/index';
import Contaienr from './styled-component/basic'
import { GloabalStyles } from './styled-component/global';
import { ThemeProvider } from 'styled-components';
  import {MyContext} from './topics/contextAPI/xonntext';
import DashBoard from './topics/contextAPI/Dashboard';
function App() {
  const theme = {
    colors: {
      button : '#b24040 '
    }
  }
  return (
    <>
    <MyContext.Provider value={{
      name: 'Niket K',
      position: 'ASL'
    }}>

      <ThemeProvider theme={theme}>
        <GloabalStyles/>
        <HOC/>
        <RenderProps/>
        <Layouteffect />  
        <Contaienr bg="blue"/>
        <DashBoard/>
      </ThemeProvider>
    </MyContext.Provider>
    </>
  );
}

export default App;
