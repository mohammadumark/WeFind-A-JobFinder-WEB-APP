import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Settings from './pages/Settings';

import Buttons from './pages/UiElements/Buttons';
import JobsScreen from './components/JobScreen';
import AppliedJob from './components/AppliedJob';
import ProfileScreen from './components/ProfileScreen';
import Companies from './components/Companies';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Jobs" />
              <JobsScreen />
            </>
          }
        />
        <Route
          path="/applied-jobs"
          element={
            <>
              <PageTitle title="Applied Jobs" />
              <AppliedJob />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <ProfileScreen />
            </>
          }
        />
        <Route
          path="/companies"
          element={
            <>
              <PageTitle title="Companies" />
              <Companies/>
            </>
          }
        />
       
    
  
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
