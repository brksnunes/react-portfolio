/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, SimpleGrid, Heading, Spinner, Stack, Skeleton } from '@chakra-ui/react';
import { githubFetch } from '../api/githubFetch';
import { useQuery } from 'react-query';
import ProjectCard from './ProjectCard';

function MainSection() {
  const { isLoading, data } = useQuery('github_data', githubFetch);
  console.log('🚀 ~ file: MainSection.tsx:14 ~ MainSection ~ data:', data);

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
      <Heading as='h2' size='md' mt='3rem' mb='1rem'>
        PROJECTS
      </Heading>
      <SimpleGrid spacing={4} minChildWidth={['50%', '50%', '25%']}>
        {isLoading ? (
          <Stack>
          <Skeleton height='100px' />
          <Skeleton height='90px' />
          <Skeleton height='80px' />
          <Skeleton height='70px' />
          <Skeleton height='60px' />
          <Skeleton height='50px' />
        </Stack>
        ) : (
          data!.map((item) => <ProjectCard key={item.name} {...item} />)
        )}
      </SimpleGrid>
    </Flex>
  );
}

export default MainSection;
