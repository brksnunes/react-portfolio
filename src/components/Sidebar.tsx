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
import { frontend, backend, devops } from '../utils/constants';
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

      <Text fontSize='sm' align='left' mt='7'>
        FRONTEND
      </Text>
      <Flex wrap='wrap' gap={'8px'} mt='2' justify={'center'}>
        {frontend.map((item) => (
          <Badge key={item.name} bg={item.bg} color={item.color} fontSize='0.9rem'>
            {item.name}
          </Badge>
        ))}
      </Flex>

      <Text fontSize='sm' align='left' mt='7'>
        BACKEND
      </Text>
      <Flex wrap='wrap' gap={'8px'} mt='2' justify={'center'}>
      {backend.map((item) => (
          <Badge key={item.name} bg={item.bg} color={item.color} fontSize='0.9rem'>
            {item.name}
          </Badge>
        ))}
      </Flex>

      <Text fontSize='sm' align='left' mt='7'>
        DEVOPS
      </Text>
      <Flex wrap='wrap' gap={'8px'} mt='2' justify={'center'}>
      {devops.map((item) => (
          <Badge key={item.name} bg={item.bg} color={item.color} fontSize='0.9rem'>
            {item.name}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
}

export default Sidebar;
