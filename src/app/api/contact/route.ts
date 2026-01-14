import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, honeypot } = await req.json();

    // Basic validation and spam protection
    if (honeypot) {
      return Response.json({ error: "Spam blocked" }, { status: 200 });
    }
    
    if (!name || !email || !subject || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
      return Response.json({ 
        error: "Email service is not configured. Please contact the administrator." 
      }, { status: 500 });
    }

    const result = await resend.emails.send({
      from: "Portfolio <hello@dhirajshelke.com>", 
      to: ["dhirajshelke.hotmail@gmail.com"],
      replyTo: email,
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent from portfolio contact form`,
    });
    
    console.log('Email sent successfully:', result);
    
    return Response.json({ 
      success: true, 
      message: "Message sent successfully!" 
    });
  } catch (err) {
    console.error('Email sending failed:', err);
    
    // Handle different types of errors
    if (err instanceof SyntaxError) {
      return Response.json({ error: "Invalid request format" }, { status: 400 });
    }
    
    // Return more detailed error for debugging
    const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again later.";
    
    console.error('Error details:', err);
    
    return Response.json({ 
      error: errorMessage
    }, { status: 500 });
  }
}