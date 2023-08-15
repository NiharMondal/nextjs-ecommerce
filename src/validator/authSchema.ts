
import vine from "@vinejs/vine";

export const registerSchema = vine.object({
	username: vine.string().minLength(4).trim(),
	email: vine.string().email().trim(),
	password: vine.string().minLength(4).confirmed().trim(),
	password_confirmation: vine.string().trim(),
});






