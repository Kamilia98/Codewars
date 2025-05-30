import { fetch } from './preloaded';
interface Joke {
  id: number;
  setup: string;
  punchLine: string;
}
interface SayJokeResult {
  saySetup: () => string;
  sayPunchLine: () => string;
}

export async function sayJoke(
  apiUrl: string,
  jokeId: number
): Promise<SayJokeResult> {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const jokes: Joke[] = data.jokes;
  if (!jokes) throw new Error(`No jokes at url: ${apiUrl}`);
  const jok = jokes.find((joke) => joke.id === jokeId);
  if (!jok) throw new Error(`No jokes found id: ${jokeId}`);
  return {
    saySetup: () => jok?.setup,
    sayPunchLine: () => jok?.punchLine,
  };
}
