import Landing from "./pages/Landing";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ShiftingDropDown } from "./components/ui/ShiftingDropDown";

const App = () => {
  return (
    <Router>
      <ShiftingDropDown />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
