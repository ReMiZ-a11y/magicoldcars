import { type ClientConfig } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '5qeu3qx6';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const useCdn = process.env.NODE_ENV === 'production';

const config: ClientConfig = {
  projectId: projectId!,  // <-- "!" mówi TS: to na pewno string
  dataset: dataset!,
  apiVersion: '2023-03-09',
  useCdn,
  token: process.env.SANITY_PROJECT_API_TOKEN, // undefined jest akceptowalne
  perspective: 'published',
};

export default config;
