import Segwise from '$lib/models/segwise.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const existingUser = await Segwise.scan('username').contains(username).exec();
		console.log(existingUser);
		if (existingUser.count === 0) {
			return fail(402, { success: false, message: 'User does not exists!' });
		}
		cookies.set('username', username, { path: '/' });
		return { success: true };
	},
	signup: async ({ cookies, request }) => {
		try {
			const data = await request.formData();
			const username = data.get('username');
			const name = data.get('name');
			const password = data.get('password');
			const existingUser = await Segwise.scan('username').contains(username).exec();
			console.log(existingUser.count);
			if (existingUser.count === 0) {
				const newUser = new Segwise({
					username,
					name,
					password
				});
				await newUser.save();
				cookies.set('username', username, { path: '/' });
				return { success: true };
			}
			return fail(402, { success: false, message: 'User already exists!' });
		} catch (err) {
			console.error(err);
		}
	}
};
