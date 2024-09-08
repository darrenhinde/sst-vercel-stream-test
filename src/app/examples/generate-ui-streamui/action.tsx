import { ReactNode } from 'react';
import { createAI } from 'ai/rsc';

// Define the AI state and UI state types
export type ServerMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export type ClientMessage = {
  id: string;
  role: 'user' | 'assistant';
  display: ReactNode;
};

export const sendMessage = async (input: string): Promise<ClientMessage> => {
  "use server";
  // Implementation details go here
  // For now, returning a placeholder to satisfy the Promise<ClientMessage> return type
  return {
    id: Date.now().toString(),
    role: 'assistant',
    display: <div>Placeholder response</div>
  };
};

export type AIState = ServerMessage[];
export type UIState = ClientMessage[];

// Create the AI provider with the initial states and allowed actions
export const AI = createAI<AIState, UIState>({
  initialAIState: [],
  initialUIState: [],
  actions: {
    sendMessage,
  },
});