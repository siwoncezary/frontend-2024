import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        [
            {
                id: 1,
                title: "C#"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ])
}