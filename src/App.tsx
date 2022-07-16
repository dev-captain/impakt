/* eslint-disable @typescript-eslint/no-unused-vars */
import 'i18n';
import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  Home,
  KnowledgeBase,
  NotFound,
  Event,
  Contact,
  Onboarding,
  LeaderBoard,
  DownloadSCreen,
  ChangePassword,
  RecoveryPassword,
  Verify,
  SignUp,
  MemberDashboard,
  SignIn,
} from 'pages';
import Authentication from './middlewares/Authentication';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
  const { setColorMode } = useColorMode();
  const location = useLocation();

  const onRouteChanged = () => {
    // force overflow unset if it's hidden on other then / page
    if (location.pathname !== '/') {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'unset';
      }
    }
  };

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  useEffect(() => {
    setColorMode('light');
  }, [setColorMode]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ScrollToTop>
            <Home />
          </ScrollToTop>
        }
      />

      <Route path="/knowledge-base" element={<KnowledgeBase />}>
        <Route path=":article" element={<KnowledgeBase />} />
      </Route>

      <Route path="/events" element={<Event />}>
        <Route path=":slug" element={<Event />} />
      </Route>

      <Route path="/onboarding" element={<Onboarding />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/leader-board" element={<LeaderBoard />} />
      <Route path="/download" element={<DownloadSCreen />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/recover-password" element={<RecoveryPassword />} />

      <Route path="/register" element={<SignUp />}>
        <Route path=":id" element={<SignUp />} />
      </Route>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/verify" element={<Verify />} />

      <Route
        path="/dashboard"
        element={
          <Authentication>
            <MemberDashboard />
          </Authentication>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
