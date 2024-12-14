import { Welcome } from '../components/Welcome/Welcome';
import { BadgeCard } from '@/components/BadgeCard/BadgeCard';
import { GroupButton } from '@/components/GroupButton/GroupButton';

import { Group } from '@mantine/core';

const CORE_CONCEPTS = [
  {
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export function HomePage() {
  return (
    <>
      <Welcome />
      <Group justify="center" p="md" mt={20}>
      <BadgeCard {...CORE_CONCEPTS[0]}/>
      <BadgeCard {...CORE_CONCEPTS[1]}/>
      <BadgeCard {...CORE_CONCEPTS[2]}/>
      <BadgeCard {...CORE_CONCEPTS[3]}/>
      </Group>
      <GroupButton/>
    </>
  );
}
