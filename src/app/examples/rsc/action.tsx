'use server';

import { streamUI } from 'ai/rsc';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

const LoadingComponent = ({ text }: { text: string }) => (
  <div className="animate-pulse p-4">getting {text}...</div>
);

const getWeather = async (location: string) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return '82°F️ ☀️';
};

interface WeatherProps {
  location: string;
  weather: string;
}

const WeatherComponent = (props: WeatherProps) => (
  <div className="border border-neutral-200 p-4 rounded-lg max-w-fit">
    The weather in {props.location} is {props.weather}
  </div>
);

export async function streamComponent(input: string,) {
  const result = await streamUI({
    model: openai('gpt-4o'),
    prompt: `You are assisant AI which will help the user with the tools in your diposal, tend to ${input}`,
    text: ({ content }) => <div>{content}</div>,
    tools: {
      getWeather: {
        description: 'Get the weather for a location',
        parameters: z.object({
          location: z.string(),
        }),
        generate: async function* ({ location }) {
          yield <LoadingComponent text="weather" />;
          const weather = await getWeather(location);
          return <WeatherComponent weather={weather} location={location} />;
        },
      },
      SayACompliment: {
        description: 'Say something positive to the user back',
        parameters: z.object({
          name: z.string(),
        }),
        generate: async function* ({ name }) {
          yield <LoadingComponent text="Joke INCOMING"  />;
          const compliment = await generateTextAction("London");
          return (
            <div className="border border-blue-300 p-4 rounded-lg bg-blue-50 text-blue-900 max-w-fit">
              {name}, {compliment}
            </div>
          );
        },
      },
    },
  });

  return result.value;
}


async function getCompliment(){
    return "You look amazing!"
}



import { streamText, generateText } from "ai";
import { createStreamableValue } from "ai/rsc";

export const generateTextAction = async (location: string) => {
  "use server";
  const { toolResults, toolCalls } = await generateText({
    model: openai("gpt-4o"),
    temperature: 0.8,
    prompt: `You are a funny chatbot. users location: ${location}`,
    tools: {
      weather: {
        description: "Get the weather for the user's location",
        parameters: z.object({
          location: z.string().describe("user's location"),
        }),
        execute: async ({ location }) => {
          const temperature = Math.floor(Math.random() * 31); // call external api for {location}
          return { temperature };
        },
      },
    },
  });
  if (toolResults && toolCalls) {
    const joke = await generateText({
      model: openai("gpt-4o"),
      prompt: `Tell me a joke that incorporates ${location} and it's current temperature (${toolResults[0].result.temperature})`,
    });
    return joke.text;
  }
};