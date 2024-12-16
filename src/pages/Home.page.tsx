import { Welcome } from '../components/Welcome/Welcome';
import { GroupButton } from '@/components/GroupButton/GroupButton';
import CoreConcepts from '@/components/CoreConcepts/CoreConcepts';

export function HomePage() {
  return (
    // <>  same as <Fragment>
    <>
      <Welcome />
      <CoreConcepts/>
      <GroupButton/>
    </>
  );
}
