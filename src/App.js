import './App.css';
import LNavbar from './Layouts/LNavbar';
import LFooter from './Layouts/LFooter';

import { Buffer } from 'buffer';
import Routers from './Router/Routers';

function App() {
  global.Buffer = Buffer;
  return (
    <div className="App">
      <LNavbar></LNavbar>
      <Routers></Routers>
      <LFooter></LFooter>
    </div>
  );
}

export default App;
