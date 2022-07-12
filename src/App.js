import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lesson1 from './views/lesson-1';
import Lesson2 from './views/lesson-2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lesson-1">
          <Route index element={<Lesson1 />} />
        </Route>
        <Route path="/lesson-2" >
          <Route index element={<Lesson2 />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/lesson-1" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
