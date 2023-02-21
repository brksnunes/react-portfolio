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

function ProjectCard({ data }) {
  const { node } = data;
  return (
    <Card bg='blackAlpha.500' color='white'>
    <CardHeader>
      <Heading size='sm'>{node.name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{node.description}</Text>
    </CardBody>
    <CardFooter>
    <Link href={node.url} isExternal>
        <Button>Live</Button>
      </Link>
      <Link href={node.url} isExternal>
        <Button>Code</Button>
      </Link>
    </CardFooter>
  </Card>
  )
}

export default ProjectCard