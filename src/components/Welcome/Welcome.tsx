import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

const reactDescription = [ "Fundamental", "Crucial", "Core" ]

export function Welcome() {
  const description = reactDescription[Math.floor(Math.random() * reactDescription.length)]
  return (
    <>
      <Title className={classes.title} ta="center" mt={25}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
        React Essentials
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
      {description} React concepts you will need for almost any app you are going to build!
      </Text>
    </>
  );
}
