import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// initiate payment
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Parse JSON body from request
    const { email, amount } = await req.json();

    if (!email || !amount) {
      throw new Error(
        "Invalid request body. 'email' and 'amount' are required."
      );
    }

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount,
      },
      {
        headers: {
          Authorization: `Bearer sk_test_c41073d45e0a3af2a48f871aacd572fd94f6db8b`,
          "Content-Type": "application/json",
        },
      }
    );

    // Return success response
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error initializing payment:", error);

    // Return error response
    return NextResponse.json(
      { error: `Payment initialization failed ${error}` },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest): Promise<NextResponse> {
  const { reference } = await req.json();
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer sk_test_c41073d45e0a3af2a48f871aacd572fd94f6db8b`,
        },
      }
    );

    // Return success response
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Error verifying payment:", error);

    // Return error response
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
