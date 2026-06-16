import { FileText, Download, Eye } from "lucide-react";

export interface PDFDocumentCardProps {
  name: string;
  fy?: string;
  pdfUrl: string;
}

export function PDFDocumentCard({ name, fy, pdfUrl }: PDFDocumentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start sm:items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6 text-[#e31e24]" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-[#0a1628] leading-snug">
            {name}
          </h3>
          {fy && (
            <span className="inline-block mt-2 px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md">
              {fy}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0 sm:ml-auto">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[#0a1628] border border-gray-200 rounded-md hover:bg-gray-50 transition"
        >
          <Eye className="w-4 h-4" />
          View
        </a>
        <a
          href={pdfUrl}
          download
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0a1628] rounded-md hover:bg-[#1a2d4a] transition"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      </div>
    </div>
  );
}
