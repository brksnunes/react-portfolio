import { Image, Flex, Text, Box } from '@chakra-ui/react'
import './styles/main.css'

function App() {
  return (
    <Flex justify='center' h='100vh' p={['1rem', '2rem', '5rem']}>
      <Flex 
        color='white' 
        direction={['column', 'row']} 
        bg='blackAlpha.400' 
        backdropFilter="auto" 
        backdropBlur="12px"
        w={{ base: '90vw', md: '80vw', lg: '80vw' }}
        border='1px' borderColor='red'
      >
        <Box w={['100%', '30vw', '20vw']} border='1px' borderColor='tomato' p={10}>
          <Text>Box 1</Text>
        </Box>
        <Box w={['100%', '60vw', '60vw']} border='1px' borderColor='tomato' p={10}>
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App
