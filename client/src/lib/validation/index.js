import * as z from "zod";

export const SignUpValidation = z.object({
    Name: z.string().min(2, { message: 'Your name must 2 characters or more.'}),
    Gallery: z.string().min(4, { message: 'Your gallery title can not contain spaces and must be between 4-30 characters.'}).max(30, { message: "The name of your gallery must be less than 30 characters." }),
    Email: z.string().email().min(4, {message: 'Email looks good.'}),
    Password: z.string().min(8, { message: 'Your password must contain at least 8 characters'}),
})