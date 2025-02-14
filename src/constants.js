import dotenv from 'dotenv';
// Load .env
dotenv.config();

export const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
