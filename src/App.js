import './App.css';
import LNavbar from './Layouts/LNavbar';
import Home from './Pages/Home';
import LFooter from './Layouts/LFooter';
import Routers from './Router/Routers';


function App() {
  return (
    <div className="App">
      <LNavbar></LNavbar>
      <Routers></Routers>
      <LFooter></LFooter>
    </div>
  );
}

export default App;
