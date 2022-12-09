import { invalid, error } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';
import z from 'zod';
import email_html from './mail2.html?raw';
import {
	SECRET_NODEMAILER_HOST,
	SECRET_NODEMAILER_USER,
	SECRET_NODEMAILER_PASS,
	SECRET_NODEMAILER_FROM_EMAIL
} from '$env/static/private';

const emailSchema = z.object({
	email: z.string().email(),
	heading: z.string().min(2).max(150),
	text: z.string()
});

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const formObj = Object.fromEntries(formData);
		const result = emailSchema.safeParse(formObj);

		if (!result.success) {
			return invalid(500, {
				error: true,
				message: 'Форма заполнена неверно!'
			});
		}

		const { email, heading, text } = result.data;

		let transporter = nodemailer.createTransport({
			host: SECRET_NODEMAILER_HOST,
			port: 465,
			secure: true, // true for 465, false for other ports
			auth: {
				user: SECRET_NODEMAILER_USER,
				pass: SECRET_NODEMAILER_PASS
			}
		});

		try {
			let info1 = await transporter.sendMail({
				from: SECRET_NODEMAILER_FROM_EMAIL, // sender address
				to: SECRET_NODEMAILER_FROM_EMAIL, // list of receivers
				subject: heading, // subject line
				html: '<b>Мы получили письмо от ' + email + ' со следующим текстом:</b><br><br>' + text // plain text body
			});
			await transporter.sendMail({
				from: SECRET_NODEMAILER_FROM_EMAIL,
				to: email,
				subject: 'Благодарим за обращение в Tech WinService!',
				html: email_html
			});
			console.log(info1);
		} catch (err) {
			throw error(500, {
				message: err
			});
		}

		return { success: true };
	}
};
