const API_BASE_URL ='https://legalrag-backend-whod.onrender.com';


export interface UploadResponse {
  message: string;
  file_id: string;
}

export interface QueryRequest {
  query: string;
}

export interface QueryResponse {
  answer: string;
  sources?: string[];
}

export interface ExtractEventsDatesResponse {
  events: string | Array<{date: string, event: string}>;
  dates?: string[];
  timeline?: string;
}

export interface SummarizePdfResponse {
  summary: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      // Handle FastAPI validation errors properly
      let errorMessage = `HTTP error! status: ${response.status}`;
      
      if (errorData.detail) {
        if (Array.isArray(errorData.detail)) {
          // FastAPI validation errors are arrays
          errorMessage = errorData.detail.map((err: { loc?: string[]; msg: string }) => 
            `${err.loc?.join('.') || 'field'}: ${err.msg}`
          ).join(', ');
        } else if (typeof errorData.detail === 'string') {
          errorMessage = errorData.detail;
        } else {
          errorMessage = JSON.stringify(errorData.detail);
        }
      }
      
      throw new Error(errorMessage);
    }

    return response.json();
  }

  private getAuthHeaders(): HeadersInit {
    // For MVP, no authentication needed
    return {};
  }


  // Document upload endpoint
  async uploadDocument(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.baseURL}/api/upload`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      // Handle FastAPI validation errors properly
      let errorMessage = `HTTP error! status: ${response.status}`;
      
      if (errorData.detail) {
        if (Array.isArray(errorData.detail)) {
          // FastAPI validation errors are arrays
          errorMessage = errorData.detail.map((err: { loc?: string[]; msg: string }) => 
            `${err.loc?.join('.') || 'field'}: ${err.msg}`
          ).join(', ');
        } else if (typeof errorData.detail === 'string') {
          errorMessage = errorData.detail;
        } else {
          errorMessage = JSON.stringify(errorData.detail);
        }
      }
      
      throw new Error(errorMessage);
    }

    return response.json();
  }

  // Query endpoint
  async queryDocuments(query: QueryRequest): Promise<QueryResponse> {
    console.log('Sending query request:', query);
    try {
      const response = await this.request<QueryResponse>('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
        body: JSON.stringify(query),
      });
      console.log('Query response:', response);
      return response;
    } catch (error) {
      console.error('Query request failed:', error);
      throw error;
    }
  }

  // Extract events and dates from PDF
  async extractEventsDates(file: File): Promise<ExtractEventsDatesResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.baseURL}/api/tools/extract-events-dates`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      let errorMessage = `HTTP error! status: ${response.status}`;
      
      if (errorData.detail) {
        if (Array.isArray(errorData.detail)) {
          errorMessage = errorData.detail.map((err: { loc?: string[]; msg: string }) => 
            `${err.loc?.join('.') || 'field'}: ${err.msg}`
          ).join(', ');
        } else if (typeof errorData.detail === 'string') {
          errorMessage = errorData.detail;
        } else {
          errorMessage = JSON.stringify(errorData.detail);
        }
      }
      
      throw new Error(errorMessage);
    }

    return response.json();
  }

  // Summarize PDF
  async summarizePdf(file: File): Promise<SummarizePdfResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${this.baseURL}/api/tools/summarize-pdf`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: this.getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      let errorMessage = `HTTP error! status: ${response.status}`;
      
      if (errorData.detail) {
        if (Array.isArray(errorData.detail)) {
          errorMessage = errorData.detail.map((err: { loc?: string[]; msg: string }) => 
            `${err.loc?.join('.') || 'field'}: ${err.msg}`
          ).join(', ');
        } else if (typeof errorData.detail === 'string') {
          errorMessage = errorData.detail;
        } else {
          errorMessage = JSON.stringify(errorData.detail);
        }
      }
      
      throw new Error(errorMessage);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
