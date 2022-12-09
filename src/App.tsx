import 'i18n';
import { Routes, Route } from 'react-router-dom';
import {
  // Home,
  NotFound,
  Event,
  Contact,
  Onboarding,
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
  Landing,
} from 'pages';
import { Common, S } from 'components';
import { useEffect } from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import { BrowserTracing } from '@sentry/tracing';
import * as Sentry from '@sentry/react';

import Authentication from './middlewares/Authentication';
import ErrorBoundary from './components/common/ErrorBoundary';
// import GroupDetailMiddleWare from './middlewares/GroupDetailMiddleware';
import GroupInvite from './pages/GroupInvite/index';
import routes from './data/routes';

Sentry.init({
  dsn: 'https://482e35ccc1c3471b86af0c359112f6ad@o522080.ingest.sentry.io/4504274587549696',
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const App = () => {
  useEffect(() => {
    LogRocket.init('qmt5ka/impakt');
    setupLogRocketReact(LogRocket);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Common.ScrollToTop>
            <Landing />
          </Common.ScrollToTop>
        }
      />

      <Route path="/events" element={<Event />}>
        <Route path=":slug" element={<Event />} />
      </Route>

      <Route path="/onboarding" element={<Onboarding />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/download" element={<DownloadSCreen />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/recover-password" element={<RecoveryPassword />} />

      <Route path="/invite" element={<GroupInvite />} />

      <Route path="/register" element={<SignUp />}>
        <Route path=":id" element={<SignUp />} />
        <Route path="bonus" element={<SignUp />} />
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
        path={routes.dashboard}
        element={
          <Authentication>
            <ErrorBoundary>
              <MemberDashboard />
            </ErrorBoundary>
          </Authentication>
        }
      >
        <Route path="" element={<S.General />} />
        <Route path="r" element={<S.Referrals />} />
        <Route path="g">
          <Route path="" element={<S.Group />} />
          {/* <Route path="create-group" element={<S.CreateGroup isStandalone />} /> */}
          <Route path=":id" element={<S.GroupDetail />}>
            <Route path="event/:eventId" />
            <Route path="post/:postId" />
            <Route path="event/:eventId/join" />
          </Route>
        </Route>
        <Route path="reward-history" element={<S.RewardHistory />} />
        <Route path="statistics" element={<S.Statistics />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
