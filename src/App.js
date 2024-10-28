import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Fab } from '@mui/material';
// import AddIcon from '@mui/icons-material/';
import Chat from '@mui/icons-material/Chat';
import { MuiTypography } from './components/MuiTypography';
import { MuiButtons } from './components/MuiButtons';
import { MuiTextFields } from './components/MuiTextFields';
import {CircularProgress} from '@mui/material';
import TestConnectionButton from './components/TestConnectionButton';

function App() {
  return (
    <div className="App">
      <h1>Hello There !</h1>
      <h1>This is Bessemer Trust's UI</h1>
      <TestConnectionButton />
      {/* <h1>Hello World!</h1>
      <div><Button variant='contained'color='success' >Test Connection</Button></div><br></br>
      <ButtonGroup variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button></ButtonGroup><br></br><br></br>
        <Fab color="primary" aria-label="add">
  <Chat />
</Fab>
    <MuiTypography /> */}
    {/* <MuiButtons /> */}
    {/* <MuiTextFields /> */}

    </div>
  );
}

export default App;
