'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, X, CheckCircle, AlertCircle } from 'lucide-react';
import { apiClient, UploadResponse } from '@/lib/api';

interface DocumentUploadProps {
  onUploadSuccess?: (response: UploadResponse) => void;
}

export default function DocumentUpload({ onUploadSuccess }: DocumentUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{name: string, status: 'success' | 'error', message: string}>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    for (const file of files) {
      if (!isValidFile(file)) {
        setUploadedFiles(prev => [...prev, {
          name: file.name,
          status: 'error',
          message: 'Invalid file type. Please upload PDF, DOC, or DOCX files.'
        }]);
        continue;
      }

      setUploading(true);
      setUploadedFiles(prev => [...prev, {
        name: file.name,
        status: 'success',
        message: 'Uploading...'
      }]);

      try {
        const response = await apiClient.uploadDocument(file);
        setUploadedFiles(prev => prev.map(f => 
          f.name === file.name 
            ? { name: file.name, status: 'success', message: 'Uploaded successfully' }
            : f
        ));
        
        if (onUploadSuccess) {
          onUploadSuccess(response);
        }
      } catch (error) {
        setUploadedFiles(prev => prev.map(f => 
          f.name === file.name 
            ? { name: file.name, status: 'error', message: error instanceof Error ? error.message : 'Upload failed' }
            : f
        ));
      } finally {
        setUploading(false);
      }
    }
  };

  const isValidFile = (file: File): boolean => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validTypes.includes(file.type) && file.size <= 10 * 1024 * 1024; // 10MB limit
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(f => f.name !== fileName));
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5" />
          <span>Upload Documents</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            isDragOver
              ? 'border-primary bg-primary/5'
              : 'border-slate-300 hover:border-primary hover:bg-slate-50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileDialog}
        >
          <FileText className="h-12 w-12 mx-auto mb-4 text-slate-400" />
          <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
          <p className="text-sm text-slate-500 mb-4">
            Support for PDF files up to 10MB
          </p>
          <Button variant="outline" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Choose Files'}
          </Button>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Uploaded Files:</h4>
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {file.status === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className={`text-xs ${
                      file.status === 'success' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {file.message}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(file.name)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
