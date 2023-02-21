/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Text,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react';
import { githubFetch } from '../api/githubFetch';
import { useQuery } from 'react-query';
import ProjectCard from './ProjectCard';

function MainSection() {
  const { isLoading, data } = useQuery('github_data', githubFetch);
  
  if (isLoading) return "Loading...";
  return (
    <Flex direction='column'>
      <Heading as='h2' size='md'>
        ABOUT ME
      </Heading>
      <Text mt='5'>
        Hello, i'm Rodrigo Nunes. I have a degree in System Analysis and
        Development at UMC (Universidade de Mogi das Cruzes) - 2017, currently a
        Web Development student at Trybe and a tech lover. I love everything
        tech, from hardware to software. On my spare time, i like experimenting
        with electronics, 3D printing random things and messing around with
        Linux. Also as a hobby, i like experimenting with Docker and
        Self-Hosting, mainly to understand and learn how Docker works and to
        have fun with it. I have experience with Linux systems, such as Ubuntu
        Server, Debian based distros, Fedora, CentOS and Arch, basic experience
        with wired and wireless networks, basic experience with Java and C# and
        MySQL and PostgreSQL databases. I look forward to build exciting
        projects, collaborate whenever i can, learn new stuff and have fun while
        doing it!
      </Text>
      <Heading as='h2' size='md' mt='2rem' mb='1rem'>
        PROJECTS
      </Heading>
      <SimpleGrid spacing={4} minChildWidth='320px'>
        { data.edges.map((item) => (
          <ProjectCard key={item.node.name} data={item} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default MainSection;
