import { NextResponse } from 'next/server';

const sgMail = require('@sendgrid/mail')


export async function POST(req, res) {
    try {
        const body = await req.json();
        console.log("Body received")
        console.log(body)
        const { username, email, phone, message } = body
        console.log(email)
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: 'soumajyoti12@gmail.com', // Change to your recipient
            from: email, // Change to your verified sender
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}