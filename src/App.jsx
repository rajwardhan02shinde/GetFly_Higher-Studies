import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* Adding a Footer Component */}
<Footer/>
      

    </div>
  );
}

export default App;
