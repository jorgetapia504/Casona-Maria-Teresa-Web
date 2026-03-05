import { dbConnect } from "@/lib/mongoose";
import Quote from "@/models/Quote";
import { z } from "zod";

export async function GET() {
  try {
    await dbConnect();

    const cotizaciones = await Quote
      .find({})
      .sort({ createdAt: -1 })
      .lean();

    return Response.json(cotizaciones);
  } catch (error: any) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

const quoteSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(8),
  typeEvent: z.string().min(3),
  dateEvent: z.string(),
  quantity: z.string().min(2),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const validatedData = quoteSchema.parse(body)

    const quote = await Quote.create(validatedData);

    return Response.json(quote, { status: 201 });
  } catch (error: any) {
    return Response.json(
      { error: error.message },
      { status: 400 }
    );
  }
}