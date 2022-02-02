import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home, KnowledgeBase, NotFound } from 'pages';

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
