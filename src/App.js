import MyDay from "./components/myDay";

import Planned from "./pages/Planned";
import Filter from "./pages/Filter";
import Archive from "./pages/Archive";
import AddTask from "./shared/addTask";
import {
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <AddTask />
      <Routes>
        <Route exact path="/" element={<MyDay />} />
        <Route path="/planned" element={<Planned />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;
