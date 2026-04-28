import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Best practice for SMTP
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Lead: ${name} (Shree Venkateshwara)`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #333;">New Lead from Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 15px; background: #f9f9f9; border-left: 4px solid #000;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // --- Auto-reply to User ---
    const autoReplyOptions = {
      from: `"Shree Venkateshwara" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for your enquiry | Shree Venkateshwara",
      html: `
        <div style="font-family: sans-serif; padding: 30px; max-width: 600px; margin: auto; border: 1px solid #f0f0f0;">
          <h1 style="font-size: 24px; color: #000; letter-spacing: -1px; text-transform: uppercase;">Thank you, ${name}.</h1>
          <p style="color: #666; line-height: 1.6;">We have received your enquiry and our executive handlers will get back to you shortly regarding your interest.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 2px;">Shree Venkateshwara Real Estate</p>
          <p style="font-size: 11px; color: #999;">Nagpur, Maharashtra</p>
        </div>
      `,
    };
    
    // Send auto-reply in background (don't await so main lead is faster)
    transporter.sendMail(autoReplyOptions).catch(err => console.error("Auto-reply error:", err));
    // -------------------------

    // --- Google Sheets Integration ---
    try {
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptURL) {
        await fetch(scriptURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
      }
    } catch (sheetError) {
      console.error("Google Sheets Error:", sheetError);
      // We don't fail the whole request if only the sheet fails
    }
    // ---------------------------------

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
