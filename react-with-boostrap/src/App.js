import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyNavbar from "./components/MyNavbar";

function App() {

    // Dummy components for routing
    const Home = () => <h2>Home</h2>;
    const Link1 = () => <h2>Link1</h2>;
    const Link2 = () => <h2>Link2</h2>;
    const Action = () => <h2>Action</h2>;
    const AnotherAction = () => <h2>Another Action</h2>;
    const SomethingElse = () => <h2>Something Else</h2>;

  return (
      <Router>
        <MyNavbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/link1" element={<Link1 />} />
              <Route path="/link2" element={<Link2 />} />
              <Route path="/action" element={<Action />} />
              <Route path="/another-action" element={<AnotherAction />} />
              <Route path="/something-else" element={<SomethingElse />} />
          </Routes>
      </Router>
  );

}

export default App;
