import { Flex, Image, Text, IconButton, Button, Divider, Badge, SimpleGrid} from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
function Sidebar() {
  return (
    <Flex direction='column' p={5}>
      <Image
        borderRadius='full'
        boxSize='100%'
        w='160px'
        alignSelf='center'
        src='https://avatars.githubusercontent.com/u/18584397?u=9700f359efed1a5299b21c28ae0f9e4e2c6046a6&v=4'
        alt='Very Handsome man'
      />
      <Text as='b' fontSize='lg' align='center' mt='2'>Rodrigo Nunes da Silva</Text>
      <Text  fontSize='sm' align='center' mt='1'>Full Stack Web Developer</Text>
      <Flex justify={ 'center'} gap='3' mt='2' w='100%'> 
      <IconButton
        variant='outline'
        colorScheme='white'
        aria-label='Send email'
        isRound
        icon={<FiGithub />}
      />
      <IconButton
        variant='outline'
        colorScheme='white'
        aria-label='Send email'
        isRound
        icon={<FiLinkedin />}
      />
      <IconButton
        variant='outline'
        colorScheme='white'
        aria-label='Send email'
        isRound
        icon={<FiMail />}
      />
      </Flex>
      <Button colorScheme='white' variant='outline' mt='5' w='100%'>
      Get my CV
    </Button>
      <Divider mt='4'/>
    {/* // Skills */}
    <Text  fontSize='sm' align='left' mt='7'>FRONTEND</Text>
    <Flex wrap='wrap' gap={'5px'} mt='2' justify={ 'center'}>
      <Badge>HTML</Badge>
      <Badge>CSS</Badge>
      <Badge>REACT</Badge>
      <Badge>REDUX</Badge>
      <Badge>CONTEXT API</Badge>
      <Badge>JEST</Badge>
    </Flex>


    {/* // Skills */}
    <Text  fontSize='sm' align='left' mt='7'>BACKEND</Text>
    <Flex wrap='wrap' gap={'5px'} mt='2' justify={ 'center'}>
      <Badge>JAVASCRIPT</Badge>
      <Badge>TYPESCRIPT</Badge>
      <Badge>NODE.JS</Badge>
      <Badge>MYSQL</Badge>
      <Badge>MONGODB</Badge>
      <Badge>SEQUELIZE</Badge>
      <Badge>MONGOOSE</Badge>
    </Flex>

        {/* // Skills */}
        <Text  fontSize='sm' align='left' mt='7'>DEVOPS</Text>
    <Flex wrap='wrap' gap={'5px'} mt='2' justify={ 'center'}>
      <Badge>DOCKER</Badge>
      <Badge>LINUX</Badge>
      <Badge>BASH</Badge>
      <Badge>AWS</Badge>
      <Badge>DIGITAL OCEAN</Badge>
      <Badge>PORTAINER</Badge>
    </Flex>


    </Flex>
  )
}

export default Sidebar