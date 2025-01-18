import { NextResponse } from "next/server";

export async function GET() {
    const pdfUrl =
        "https://tjz9bs3cabrcz1j2.public.blob.vercel-storage.com/portfolio/Hazel%20Wang_Full-stack-uIEAFrwZiKK4panDsatxp9uUvaeJ6t.pdf";

    try {
        const response = await fetch(pdfUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch PDF");
        }

        const pdfBuffer = await response.arrayBuffer();

        return new NextResponse(pdfBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition":
                    'attachment; filename="Hazel_Wang_Full-stack.pdf"',
            },
        });
    } catch (error) {
        console.error("Error downloading PDF:", error);
        return NextResponse.json(
            { error: "Failed to download PDF" },
            { status: 500 }
        );
    }
}
