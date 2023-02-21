import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import './styles/main.css';

function App() {
  return (
    <Flex justify='center' p={['1rem', '2rem', 'rem']}>
      <Flex 
        color='white' 
        direction={['column', 'row']} 
        bg='blackAlpha.400' 
        backdropFilter="auto" 
        backdropBlur="12px"
        w={{ base: '90vw', md: '90vw', lg: '90vw' }}
      >
        <Box w={['100%', '30vw', '25vw']}>
          <Sidebar />
        </Box>
        <Box w={['100%', '60vw', '65vw']} bg='blackAlpha.500' p={10} >
         <MainSection />
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
