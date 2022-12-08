import { invalid, error } from "@sveltejs/kit";
import * as nodemailer from "nodemailer"
import z from "zod";

const emailSchema = z.object({
    email: z.string().email(),
    heading: z.string().min(2).max(150),
    text: z.string()
})

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        
        const formObj = Object.fromEntries( formData );
        const result = emailSchema.safeParse(formObj);

        console.log(result)
        if (!result.success){
            return invalid(500, {
                error: true,
                message: "Форма заполнена неверно!"
            });
        }

        const { email, heading, text } = result.data
        
        let transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "OlzhasOlzhasov",
              pass: "hwsnhzzwreyfvoyy",
            },
        });

        
        try {
            let info = await transporter.sendMail({
                from: '"Olzhas Olzhasov" <OlzhasOlzhasov@yandex.ru>', // sender address
                to: '"Olzhas Olzhasov" <OlzhasOlzhasov@yandex.ru>', // list of receivers
                subject: heading, // subject line
                html: "<b>Мы получили письмо от "+email+" со следующим текстом:</b><br><br>"+text, // plain text body
            });
            console.log(info);
        } catch (err) {
            throw error(500, {
                message: err
            });
        }


        
        return { success: true }
    }
}