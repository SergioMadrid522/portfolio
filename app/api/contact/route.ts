import EmailTemplate from "@/components/email-template/EmailTemplate";
import { validateContactForm } from "@/services/contactForm.service";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiUrl = process.env.RESEND_API_KEY;
const resend = new Resend(apiUrl);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validate = await validateContactForm(body);

    if (!validate.success) {
      return NextResponse.json({ error: validate.error }, { status: 400 });
    }

    const { name, company, email, message } = validate.res!.data;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["sergioac.madrid@hotmail.com"],
      subject: `New Mail From ${name}`,
      replyTo: email,
      react: EmailTemplate({
        name: name,
        company: company,
        email: email,
        message: message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Internal Error" },
      { status: 500 },
    );
  }
}
