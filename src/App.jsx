import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Committees from './pages/Committees';
import Invited from './pages/Invited';
import Schedule from './pages/Schedule';
import Dates from './pages/Dates';
import Submission from './pages/Submission';
import Venue from './pages/Venue';
import SpecialSession from './pages/SpecialSession';

function App() {
  return (
    <Router basename="/biomap/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="committees" element={<Committees />} />
          <Route path="invited" element={<Invited />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="dates" element={<Dates />} />
          <Route path="submission" element={<Submission />} />
          <Route path="venue" element={<Venue />} />
          <Route path="special-session" element={<SpecialSession />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

