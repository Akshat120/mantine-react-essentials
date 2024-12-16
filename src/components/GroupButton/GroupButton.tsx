import { Button, Group, Text, Paper } from '@mantine/core';
import { useState, useEffect } from 'react';
import { Code } from '@mantine/core';
import { EXAMPLES } from '@/data';

type ExampleKey = keyof typeof EXAMPLES;

export function GroupButton() {
  const [selected, setSelected] = useState<ExampleKey | ''>('');  // Allow '' as an initial value

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
      {selected!=''? (
        
          <Paper style={{ width: '80%'}} withBorder p="lg" radius="md" shadow="md">
            <Group justify="space-between" mb="xs">
              <Text fz="xl" fw={500}>
                {EXAMPLES[selected].title}
              </Text>
            </Group>
            <Text c="dimmed" fz="lg">
            {EXAMPLES[selected].description}
            </Text>
            <Code mt={10} block>{EXAMPLES[selected].code}</Code>
          </Paper>
        
      ):  
      <Paper withBorder p="lg" radius="md" shadow="md">
          <Text fz="md" fw={500}>
            Please Select React Essential
          </Text>
      </Paper>
      }
      </Group>
    </>
  );
}
