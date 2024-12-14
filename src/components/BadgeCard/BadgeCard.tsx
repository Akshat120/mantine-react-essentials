import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './BadgeCard.module.css';


export function BadgeCard({ title, description } : {
    title: string,
    description: string,
}) {

  return (
    <Card withBorder radius="md" p="md" mt={20} className={classes.card}>

      <Card.Section className={classes.section} mt="lg">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          {title} for you, if you enjoy
        </Text>
      </Card.Section>
    </Card>
  );
}