import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Navbar, Error } from "./components";
import { Home, Destination, Technology, Crew } from "./pages";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route index element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
