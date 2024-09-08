'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { streamComponent } from './actions';

export default function Page() {
  const [component, setComponent] = useState<React.ReactNode>();

  return (
    <div>
      <h2>Testing</h2>
      <form
        onSubmit={async e => {
          e.preventDefault();
          setComponent(await streamComponent());
        }}
      >
        <Button className='bg-gray-500'>Stream Component</Button>
      </form>
      <div>{component}</div>
    </div>
  );
}