import './App.css';
import LNavbar from './Layouts/LNavbar';
import LFooter from './Layouts/LFooter';
import PageRoutes from './Router/PageRoutes';
import InstructorPageRoutes from './Router/InstructorPageRoutes';
import { useLocation } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();
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
      <ToastContainer />
      <LFooter></LFooter>
    </div>
  );
}

export default App;
