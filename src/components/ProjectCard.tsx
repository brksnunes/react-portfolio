/* eslint-disable react/prop-types */
import {
  Link,
  Text,
  Button,
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@chakra-ui/react';
import { Node } from '../interfaces/IGithubReturn';

function ProjectCard({ name, description, homepageUrl, url }: Node) {
  return (
    <Card bg='whiteAlpha.300' color='white' size='sm' p='10px'>
      <CardHeader>
        <Heading size='sm'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter justify='center' gap='5' color='gray.700'>
        <Link href={homepageUrl ? homepageUrl : url} isExternal>
          <Button size='sm' colorScheme='whatsapp'>
            Live
          </Button>
        </Link>
        <Link href={url} isExternal>
          <Button size='sm' colorScheme='whatsapp'>
            Code
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
