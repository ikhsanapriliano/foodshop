import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Routes/Home";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route exact path="/foodshop" element={<HomePage />} />
          <Route path="menu" element={<Menu />}>
            <Route path="makanan" element={<Outlet />} />
            <Route path="minuman" element={<Outlet />} />
            <Route path="cemilan" element={<Outlet />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
