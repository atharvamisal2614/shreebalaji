import nodemailer from "nodemailer";
export default async function handler(req, res) {
    if(req.method === 'POST'){
        const { name, email, phone, message } = req.body;

        try {
            const transporter= nodemailer.createTransport({
                host: "smtp.gmail.com",
                service:"gmail",
                port: 465,
                secure: true,
                auth: {
                    user:process.env.USER_EMAIL,
                    pass:process.env.USER_PASS
                }
            })
            const mailOptions = {
                from: process.env.USER_EMAIL,
                to: process.env.USER_EMAIL,
                subject:`New mail from ${email}`,
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:${message}`
            }
           await transporter.sendMail(mailOptions)
           res.status(200).json({ message: "Email sent successfully" });
        }
        catch(error) {
            res.status(500).json({message : "Failed to send mail..."})
        }
    }
}