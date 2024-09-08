'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { streamComponent } from './action';

export default function Page() {
  const [input, setInput] = useState('');
  const [components, setComponents] = useState<React.ReactNode[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newComponent = await streamComponent(input);
    setComponents(prevComponents => [...prevComponents, newComponent]);
  };

  return (
    <div>
      <div>
        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message"
        />
        <Button type="submit">Stream Component</Button>
      </form>
      
    </div>
  );
}