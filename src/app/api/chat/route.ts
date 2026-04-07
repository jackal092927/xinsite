import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      status: "not_implemented",
      message:
        "Assistant backend is intentionally deferred for now. This endpoint is reserved for future web chat / voice assistant implementation.",
    },
    { status: 501 },
  );
}
