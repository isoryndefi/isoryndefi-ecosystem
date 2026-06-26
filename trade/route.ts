import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    tx: "trade_transaction_hash"
  });
}
