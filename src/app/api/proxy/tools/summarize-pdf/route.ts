import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://legalrag-backend-whod.onrender.com";

export async function POST(request: NextRequest) {
  try {
    console.log("Proxy summarize-pdf: Starting request");
    const formData = await request.formData();

    console.log(
      "Proxy summarize-pdf: Forwarding to",
      `${API_BASE_URL}/api/tools/summarize-pdf`
    );
    const response = await fetch(`${API_BASE_URL}/api/tools/summarize-pdf`, {
      method: "POST",
      body: formData,
    });

    console.log("Proxy summarize-pdf: Response status", response.status);

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
    console.error("Proxy summarize-pdf error:", error);
    return NextResponse.json(
      { error: "Failed to process summarize PDF request" },
      { status: 500 }
    );
  }
}
