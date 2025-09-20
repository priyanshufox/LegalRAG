# Legal RAG - MVP

A simple legal document research and analysis platform built with Next.js and FastAPI.

## Features

- **Document Upload**: Upload PDF, DOC, and DOCX files via drag-and-drop or file selection
- **Chat Interface**: Ask questions about uploaded documents in a ChatGPT-like interface
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface built with Tailwind CSS and shadcn/ui

## API Endpoints

The frontend connects to these backend endpoints:

- `POST /api/upload` - Upload documents
- `POST /api/query` - Query documents with natural language

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Pages

- **Home** (`/`) - Landing page with feature overview
- **Dashboard** (`/dashboard`) - Overview dashboard with navigation
- **RAG Interface** (`/rag`) - Main document upload and chat interface

## Components

- `RAGLayout` - Main layout with sidebar and chat area
- `DocumentUpload` - Drag-and-drop file upload component
- `ChatInterface` - ChatGPT-like chat interface for document queries

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **API Client**: Custom fetch-based client

## Environment Variables

Set the following environment variable to configure the API URL:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Development

The app is set up for rapid development with:

- Hot reload with Turbopack
- TypeScript support
- ESLint configuration
- Pre-configured component library