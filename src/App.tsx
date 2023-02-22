import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import './styles/main.css';

function App() {
  return (
    <Flex justify='center' p={['1rem', '2rem', '5rem']}>
      <Flex
        color='white'
        direction={['column', 'row']}
        bg='blackAlpha.400'
        backdropFilter='auto'
        backdropBlur='10px'
      >
        <Box w={['100%', '35vw', '20vw']}>
          <Sidebar />
        </Box>
        <Box w={['100%', '55vw', '60vw']} bg='blackAlpha.500' p={10}>
          <MainSection />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
