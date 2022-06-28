import { client } from './client';

export async function getMagicCards(from = 0, to = 20) {
  const response = await client.from('magic').select('*').range(from, to);

  return response.data;
}

export async function getSingleMagicCard(id) {
  const response = await client.from('magic').select('*').match({ id }).single();

  return response.data;
}