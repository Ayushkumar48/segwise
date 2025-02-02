import connectDB from '$lib/db';

export async function handle({ event, resolve }) {
	try {
		await connectDB();

		const response = await resolve(event);
		return response;
	} catch (error) {
		console.error('Hook error:', error.message, error.stack);
		const response = await resolve(event);
		return response;
	}
}
