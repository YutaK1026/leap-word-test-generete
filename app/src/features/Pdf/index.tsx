"use client"
import { usePdf } from '@/features/Pdf/hooks/index';
import { PdfComponent } from '@/features/Pdf/presentations/pdf';

export function PdfPage() {
  const { pdfDownloadHandler } = usePdf()
  
  return (
    <>
      <PdfComponent />
      <button type='button' onClick={() => {pdfDownloadHandler("pdf-id")}}>
        PDFファイルをダウンロードするボタン
      </button>
    </>
  );

}