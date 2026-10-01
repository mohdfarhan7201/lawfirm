import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message } = data;

    // Server-side validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: Connect to email dispatch service (e.g. Resend, Nodemailer, SendGrid)
    // Example:
    // await resend.emails.send({
    //   from: 'chambers@adv-arjunsharma.legal',
    //   to: lawyerConfig.personal.email,
    //   subject: `New Legal Inquiry: ${subject} - ${name}`,
    //   text: `From: ${name} (${phone}, ${email})\n\n${message}`
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request recorded successfully.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process consultation request." },
      { status: 500 }
    );
  }
}
