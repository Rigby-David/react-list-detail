import { client, checkError } from './client';

export async function getMagicCards() {
  const response = await client.from('magic').select('*');

  return checkError(response);
}

export async function getSingleMagicCard(id) {
  const response = await client.from('magic').select('*').match({ id }).single();

  return checkError(response);
}