import { Group, Text, Paper, Code } from '@mantine/core';
import { EXAMPLES } from '@/data';

type ExampleKey = keyof typeof EXAMPLES;

export default function ExampleContent({ selected }: { selected: ExampleKey | undefined }) {
  return (
    <>
      {selected!=undefined? (
        <Paper style={{ width: '80%' }} withBorder p="lg" radius="md" shadow="md">
          <Group justify="space-between" mb="xs">
            <Text fz="xl" fw={500}>
              {EXAMPLES[selected].title}
            </Text>
          </Group>
          <Text c="dimmed" fz="lg">
            {EXAMPLES[selected].description}
          </Text>
          <Code mt={10} block>
            {EXAMPLES[selected].code}
          </Code>
        </Paper>
      ) : (
        <Paper withBorder p="lg" radius="md" shadow="md">
          <Text fz="md" fw={500}>
            Please Select React Essential
          </Text>
        </Paper>
      )}
    </>
  );
}
