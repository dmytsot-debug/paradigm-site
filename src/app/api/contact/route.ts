import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(1),
  message: z.string().min(10),
  emergency: z.boolean().optional(),
});

// TODO: For production, send this through Resend, SendGrid, Postmark, or a
// form service (e.g. Formspree, Web3Forms). Add env vars to .env.local and
// to Vercel, e.g.:
//   RESEND_API_KEY=...
//   CONTACT_TO=info@paradigmplumbinggas.com
// Then replace the console.log below with an actual send.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input" },
        { status: 400 },
      );
    }
    console.log("[contact] new submission:", parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
