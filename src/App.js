import MyDay from "./components/myDay";
import {
  Route,
  Routes,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container">
              <MyDay />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
