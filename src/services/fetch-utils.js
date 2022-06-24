import { client } from "./client";

export async function getMagicCard() {
  const response = await client.from('magic').select('*');
  return response.data;
}

export async function getSingleMagicCard(id) {
  const response = await client.from('magic').select('*').match({ id });
  return response.data;
}