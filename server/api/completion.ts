import {
  OpenAIStream,
  StreamingTextResponse,
  experimental_StreamData,
} from 'ai';
import OpenAI from 'openai';

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openAIKey;
  if (!apiKey) throw new Error('Missing OpenAI API key');
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  return defineEventHandler(async (event: any) => {
    const { prompt } = await readBody(event);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [{ role: 'user', content: prompt }],
    });

    const data = new experimental_StreamData();

    data.append({ test: 'value' });

    const stream = OpenAIStream(response, {
      onFinal(completion) {
        data.close();
      },
      experimental_streamData: true,
    });

    return new StreamingTextResponse(stream, {}, data);
  });
});
