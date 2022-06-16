import './App.css';
import HOC from './topics/hoc';
import RenderProps from './topics/renderprops/parent';
import Layouteffect from './topics/layouteffetct/index';
import Contaienr from './styled-component/basic'
import { GloabalStyles } from './styled-component/global';
import { ThemeProvider } from 'styled-components';
function App() {
  const theme = {
    colors: {
      button : '#b24040 '
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <GloabalStyles/>
        <HOC/>
        <RenderProps/>
        <Layouteffect />  
        <Contaienr bg="blue"/>
      </ThemeProvider>
    </>
  );
}

export default App;
