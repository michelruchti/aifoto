import { StorageClient } from '@supabase/storage-js';
import { SECRET_SUPABASE_KEY } from '$env/static/private';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
const STORAGE_URL = `${PUBLIC_SUPABASE_URL}/storage/v1`;

export const storageClient = new StorageClient(STORAGE_URL, {
	apikey: SECRET_SUPABASE_KEY,
	Authorization: `Bearer ${SECRET_SUPABASE_KEY}`
});
