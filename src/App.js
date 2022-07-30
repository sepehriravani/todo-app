import MyDay from "./components/myDay";
import { motion } from "framer-motion";
import Planned from "./pages/Planned";
import Filter from "./pages/Filter";
import Archive from "./pages/Archive";
import AddTask from "./components/AddTask";
import EditStats from "./components/EditStats";
import About from "./pages/About";
import AboutLinkIcon from "./components/AboutLinkIcon";
import { TodoProvider } from "./Context/TodoContext";
import {
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <>
      <TodoProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<MyDay />} />
            <Route path="/planned" element={<Planned />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<MyDay />} />
          </Routes>
          <AboutLinkIcon />
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
