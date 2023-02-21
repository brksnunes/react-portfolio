import {
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  Divider,
  Badge,
} from '@chakra-ui/react';
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
      <Text as='b' fontSize='lg' align='center' mt='2'>
        Rodrigo Nunes da Silva
      </Text>
      <Text fontSize='sm' align='center' mt='1'>
        Full Stack Web Developer
      </Text>
      <Flex justify={'center'} gap='3' mt='2' w='100%'>
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
      <Divider mt='4' />
      {/* // Skills */}
      <Text fontSize='sm' align='left' mt='7'>
        FRONTEND
      </Text>
      <Flex wrap='wrap' gap={'8px'} mt='2' justify={'center'}>
        <Badge fontSize='0.9rem' bg='#f12' color='white'>
          HTML
        </Badge>
        <Badge fontSize='0.9rem'>CSS</Badge>
        <Badge fontSize='0.9rem'>REACT</Badge>
        <Badge fontSize='0.9rem'>REDUX</Badge>
        <Badge fontSize='0.9rem'>CONTEXT API</Badge>
        <Badge fontSize='0.9rem'>JEST</Badge>
      </Flex>

      {/* // Skills */}
      <Text fontSize='sm' align='left' mt='7'>
        BACKEND
      </Text>
      <Flex wrap='wrap' gap={'8px'} mt='2' justify={'center'}>
        <Badge fontSize='0.9rem'>JAVASCRIPT</Badge>
        <Badge fontSize='0.9rem'>TYPESCRIPT</Badge>
        <Badge fontSize='0.9rem'>NODE.JS</Badge>
        <Badge fontSize='0.9rem'>MYSQL</Badge>
        <Badge fontSize='0.9rem'>MONGODB</Badge>
        <Badge fontSize='0.9rem'>SEQUELIZE</Badge>
        <Badge fontSize='0.9rem'>MONGOOSE</Badge>
      </Flex>

      {/* // Skills */}
      <Text fontSize='sm' align='left' mt='7'>
        DEVOPS
      </Text>
      <Flex wrap='wrap' gap={'8px'} mt='2' justify={'center'}>
        <Badge fontSize='0.9rem'>DOCKER</Badge>
        <Badge fontSize='0.9rem'>LINUX</Badge>
        <Badge fontSize='0.9rem'>BASH</Badge>
        <Badge fontSize='0.9rem'>AWS</Badge>
        <Badge fontSize='0.9rem'>DIGITAL OCEAN</Badge>
        <Badge fontSize='0.9rem'>PORTAINER</Badge>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
