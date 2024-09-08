// import { streamText } from "ai";
// import { openai } from "@ai-sdk/openai";

// export async function POST(request: Request) {
//   const { messages } = await request.json();
//   const stream = await streamText({
//     model: openai("gpt-4o"),
//     system: "You are a helpful assistant.",
//     messages,
//   });
//   return stream.toAIStreamResponse();
// }

import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: 'You are a helpful assistant.',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}