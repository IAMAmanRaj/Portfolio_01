import Projects from "./components/ui/Projects";

import Landing from "./pages/Landing";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ShiftingDropDown } from "./components/ui/ShiftingDropDown";
import TermsandConditions from "./pages/TermsandConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <ShiftingDropDown />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Landing />} />
        <Route path="/terms&conditions" element={<TermsandConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
