import { Group } from '@mantine/core';
import { BadgeCard } from '@/components/BadgeCard/BadgeCard';
import { CORE_CONCEPTS } from '../../data'


export default function CoreConcepts() {
    return <>
    <Group justify="center" p="md" mt={20}>
      {CORE_CONCEPTS.map((concept)=><BadgeCard key={concept.title} {...concept}/>)}
      </Group>
    </>
}