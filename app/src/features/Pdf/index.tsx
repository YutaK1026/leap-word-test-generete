"use client"
import { usePdf } from '@/features/Pdf/hooks/index';
import PdfComponent from '@/features/Pdf/presentations/pdf';

export default function PdfPage() {
  const { PDFViewer } = usePdf()

  return (
    <div className="h-screen">
      <PDFViewer width="100%" height="100%">
        <PdfComponent />
      </PDFViewer>
    </div>
  );
}