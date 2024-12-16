import { Button, Group, Text, Paper } from '@mantine/core';
import { useState, useEffect } from 'react';
import { Code } from '@mantine/core';
import { EXAMPLES } from '@/data';
import ExampleContent from '../ExampleContent/ExampleContent';

type ExampleKey = keyof typeof EXAMPLES;

export function GroupButton() {
  const [selected, setSelected] = useState<ExampleKey | undefined>(undefined);  // Allow '' as an initial value

  function handleClick(selectedValue: ExampleKey) {
    setSelected(selectedValue);
  }

  // Use useEffect to handle scrolling after state has updated
  useEffect(() => {
    if (selected) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Optional for smooth scrolling
      });
    }
  }, [selected]);
  return (
    <>
      <Group justify="center" p="md" mt={20}>
      <Text variant='gradient' fz="xl" fw={500} gradient={{ from: 'pink', to: 'yellow' }}>
           Examples
      </Text>
        <Button color='white' variant={selected === 'components' ? 'gradient' : 'outline'} gradient={{ from: 'pink', to: 'yellow' }} onClick={() => handleClick('components')}>Components</Button>
        <Button color='white' variant={selected === 'jsx' ? 'gradient' : 'outline'} gradient={{ from: 'pink', to: 'yellow' }}  onClick={() => handleClick('jsx')}>JSX</Button>
        <Button color='white' variant={selected === 'props' ? 'gradient' : 'outline'} gradient={{ from: 'pink', to: 'yellow' }} onClick={() => handleClick('props')}>Props</Button>
        <Button color='white' variant={selected === 'state' ? 'gradient' : 'outline'} gradient={{ from: 'pink', to: 'yellow' }} onClick={() => handleClick('state')}>State</Button>
      </Group>
      <Group preventGrowOverflow justify="center" p="md" mt={20} __size={200}>
      <ExampleContent selected={selected} />
      </Group>
    </>
  );
}
