import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://legalrag-backend-whod.onrender.com";

export async function POST(request: NextRequest) {
  try {
    console.log("Proxy legal-guide: Starting request");
    const body = await request.json();

    console.log(
      "Proxy legal-guide: Forwarding to",
      `${API_BASE_URL}/api/tools/legal-guide`
    );
    const response = await fetch(`${API_BASE_URL}/api/tools/legal-guide`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Proxy legal-guide: Response status", response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      let errorMessage = `HTTP error! status: ${response.status}`;

      if (errorData.detail) {
        if (Array.isArray(errorData.detail)) {
          errorMessage = errorData.detail
            .map(
              (err: { loc?: string[]; msg: string }) =>
                `${err.loc?.join(".") || "field"}: ${err.msg}`
            )
            .join(", ");
        } else if (typeof errorData.detail === "string") {
          errorMessage = errorData.detail;
        } else {
          errorMessage = JSON.stringify(errorData.detail);
        }
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy legal-guide error:", error);
    return NextResponse.json(
      { error: "Failed to process legal guide request" },
      { status: 500 }
    );
  }
}
