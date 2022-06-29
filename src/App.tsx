import 'i18n';
import { useEffect, useState } from 'react';
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
import MemberDashboard from './pages/MemberDashBoard';
import SignIn from './pages/SignIn/SignIn';
import Authentication from './middlewares/Authentication';

const App = () => {
  const { setColorMode } = useColorMode();
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
    document.body.classList.add('scroll');

    return scroll;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const timeout = setTimeout(() => {
      setScroll(false);
      document.body.classList.remove('scroll');
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [handleScroll]);

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
