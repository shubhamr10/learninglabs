import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";



const App = () => {
  return (
    <>
    <Directory />
    
    <Outlet/>
    </>
  );
}

export default App;
