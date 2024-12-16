import { Welcome } from '../components/Welcome/Welcome';
import { BadgeCard } from '@/components/BadgeCard/BadgeCard';
import { GroupButton } from '@/components/GroupButton/GroupButton';
import { Group } from '@mantine/core';
import { CORE_CONCEPTS } from '../data'
import { Fragment } from 'react/jsx-runtime';

export function HomePage() {
  return (
    // <>  same as <Fragment>
    <>
      <Welcome />
      <Group justify="center" p="md" mt={20}>
      {CORE_CONCEPTS.map((concept)=><BadgeCard key={concept.title} {...concept}/>)}
      </Group>
      <GroupButton/>
    </>
  );
}
