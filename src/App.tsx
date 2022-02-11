import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home, Blog, NotFound, Event } from 'pages';

const App = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('light');
  }, [setColorMode]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/blog" element={<Blog />}>
        <Route path=":id" element={<Blog />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
