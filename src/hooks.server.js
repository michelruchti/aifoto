import '$lib/clients/supabase';

import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { error } from '@sveltejs/kit';

const protectedRoutes = ['/dashboard', '/space', '/api'];
const guestRoutes = ['/login', '/callback'];

function checkIfStringStartsWith(str, substrs) {
	return substrs.some((el) => str.startsWith(el));
}

function redirect(location, body) {
	return new Response(body, {
		status: 302,
		headers: { location }
	});
}

export const handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);

	if (checkIfStringStartsWith(event.url.pathname, protectedRoutes)) {
		if (!session) {
			return redirect('/login', 'No authenticated user.');
		}
	}

	if (checkIfStringStartsWith(event.url.pathname, guestRoutes)) {
		if (session) {
			return redirect('/dashboard', 'Already signed in.');
		}
	}

	return resolve(event);
};
