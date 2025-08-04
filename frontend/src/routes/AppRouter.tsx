import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import About from '../pages/About';
import Layout from "../components/Layout/Layout.tsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default AppRouter;