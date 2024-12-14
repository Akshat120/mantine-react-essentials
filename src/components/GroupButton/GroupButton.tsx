import { Button, Group, Text, Paper } from '@mantine/core';
import './GroupButton.module.css';
import { useState } from 'react';
import { Code } from '@mantine/core';

const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};

type ExampleKey = keyof typeof EXAMPLES;

export function GroupButton() {
  const [selected, setSelected] = useState<ExampleKey | ''>('');  // Allow '' as an initial value

  function handleClick(selectedValue: ExampleKey) {
    setSelected(selectedValue);
  }

  return (
    <>
      <Group justify="center" p="md" mt={20}>
        Examples
        <Button variant={selected === 'components' ? 'filled' : 'transparent'} onClick={() => handleClick('components')}>Components</Button>
        <Button variant={selected === 'jsx' ? 'filled' : 'transparent'} onClick={() => handleClick('jsx')}>JSX</Button>
        <Button variant={selected === 'props' ? 'filled' : 'transparent'} onClick={() => handleClick('props')}>Props</Button>
        <Button variant={selected === 'state' ? 'filled' : 'transparent'} onClick={() => handleClick('state')}>State</Button>
      </Group>
      <Group preventGrowOverflow justify="center" p="md" mt={20} __size={200}>
      {selected!=''? (
        
          <Paper withBorder p="lg" radius="md" shadow="md">
            <Group justify="space-between" mb="xs">
              <Text fz="xl" fw={500}>
                {EXAMPLES[selected].title}
              </Text>
            </Group>
            <Text c="dimmed" fz="lg">
            {EXAMPLES[selected].description}
            </Text>
            <Code block>{EXAMPLES[selected].code}</Code>
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
