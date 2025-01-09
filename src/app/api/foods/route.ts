import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  try {
    // Query the database for foods
    const result = await sql("SELECT * FROM foods");

    // Send the data as a JSON response
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching foods:", error);
    return NextResponse.json(
      { error: "Failed to fetch foods" },
      { status: 500 }
    );
  }
}
