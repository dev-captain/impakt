import 'i18n';
import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
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
} from 'pages';
import MemberDashBoard from './pages/MemberDashBoard';
import SignIn from './pages/SignIn/SignIn';
// import Authentication from './middlewares/Authentication';

const App = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('light');
  }, [setColorMode]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

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
      <Route path="/register/:id" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/verify" element={<Verify />} />

      <Route
        path="/dashboard"
        element={
          // <Authentication>
          <MemberDashBoard />
          // </Authentication>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
