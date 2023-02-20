import { Image, Flex, Text, Box } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import './styles/main.css';

function App() {
  return (
    <Flex justify='center' h='100vh' p={['1rem', '2rem', 'rem']}>
      <Flex 
        color='white' 
        direction={['column', 'row']} 
        bg='blackAlpha.400' 
        backdropFilter="auto" 
        backdropBlur="12px"
        w={{ base: '90vw', md: '90vw', lg: '90vw' }}
      >
        <Box w={['100%', '30vw', '25vw']} p={5} bg='blackAlpha.500'>
          <Sidebar />
        </Box>
        <Box w={['100%', '60vw', '65vw']} p={10}>
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
