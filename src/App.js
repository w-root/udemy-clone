import './App.css';
import LNavbar from './Layouts/LNavbar';
import LFooter from './Layouts/LFooter';
import { Buffer } from 'buffer';
import PageRoutes from './Router/PageRoutes';
import InstructorPageRoutes from './Router/InstructorPageRoutes';
import { useLocation } from "react-router-dom"

function App() {
  const location = useLocation();
  global.Buffer = Buffer;

  return (
    <div className="App">
      {
        location.pathname.includes("instructor") ?
          <InstructorPageRoutes></InstructorPageRoutes> :
          <div>
            <LNavbar></LNavbar>
            <PageRoutes></PageRoutes>
          </div>
      }
      <LFooter></LFooter>
    </div>
  );
}

export default App;
