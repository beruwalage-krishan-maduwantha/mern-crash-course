import { Route, Routes } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import CreatePage from './pages/Createpage';

function App() {
  const bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box minH="100vh" bg={bg}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;