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
  SignIn,
  MemberDashboard,
  NFT,
  TermsOfUse,
  Whitelist,
} from 'pages';
import { Common, S } from 'components';

import Authentication from './middlewares/Authentication';
import ErrorBoundary from './components/common/ErrorBoundary';

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
          <Common.ScrollToTop>
            <Home />
          </Common.ScrollToTop>
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
      <Route path="/nft" element={<NFT />} />
      <Route path="/whitelist" element={<Whitelist />} />
      <Route
        path="/terms-of-use"
        element={
          <Common.ScrollToTop>
            <TermsOfUse />
          </Common.ScrollToTop>
        }
      />

      <Route
        path="dashboard"
        element={
          <Authentication>
            <ErrorBoundary>
              <MemberDashboard />
            </ErrorBoundary>
          </Authentication>
        }
      >
        <Route path="" element={<S.General />} />
        <Route path="referrals" element={<S.Referrals />} />
        <Route path="groups">
          <Route path="" element={<S.Group />} />
          <Route path="create-group" element={<S.CreateGroup />} />
          <Route path="group/:id" element={<S.GroupDetail />} />
          <Route path="join-group/:id" element={<S.JoinGroup />} />
        </Route>
        <Route path="reward-history" element={<S.RewardHistory />} />
        <Route path="statistics" element={<S.Statistics />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
