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
    <Card bg='blackAlpha.500' color='white'>
      <CardHeader>
        <Heading size='sm'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <Link href={homepageUrl ? homepageUrl : url} isExternal>
          <Button>Live</Button>
        </Link>
        <Link href={url} isExternal>
          <Button>Code</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
