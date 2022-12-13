import { StorageClient } from '@supabase/storage-js';
import { SECRET_SUPABASE_KEY } from '$env/static/private';
import { env } from '$env/dynamic/public';
const STORAGE_URL = `${env.VITE_PUBLIC_SUPABASE_URL}/storage/v1`;

export const storageClient = new StorageClient(STORAGE_URL, {
	apikey: SECRET_SUPABASE_KEY,
	Authorization: `Bearer ${SECRET_SUPABASE_KEY}`
});
