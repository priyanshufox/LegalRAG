import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://legalrag-backend-whod.onrender.com";

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join("/");
    const contentType = request.headers.get("content-type");

    let body: FormData | string;
    let headers: HeadersInit = {};

    if (contentType?.includes("application/json")) {
      // Handle JSON requests (like legal-guide)
      body = await request.text();
      headers = {
        "Content-Type": "application/json",
      };
    } else {
      // Handle FormData requests (like file uploads)
      body = await request.formData();
    }

    const response = await fetch(`${API_BASE_URL}/api/tools/${path}`, {
      method: "POST",
      headers,
      body,
    });

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
    console.error("Proxy tools error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
