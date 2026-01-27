import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Committees = lazy(() => import('./pages/Committees'));
const Invited = lazy(() => import('./pages/Invited'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Dates = lazy(() => import('./pages/Dates'));
const Submission = lazy(() => import('./pages/Submission'));
const Venue = lazy(() => import('./pages/Venue'));
const SpecialSession = lazy(() => import('./pages/SpecialSession'));

// Minimal loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-sage-200 border-t-sage-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router basename="/biomap/">
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </Router>
  )
}

export default App
