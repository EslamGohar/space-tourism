import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Destination, Technology, Crew } from "./pages";
import { Navbar, Error } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/space-tourism/" element={<Home />} />
          <Route path="/space-tourism/destination" element={<Destination />} />
          <Route path="/space-tourism/crew" element={<Crew />} />
          <Route path="/space-tourism/technology" element={<Technology />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
