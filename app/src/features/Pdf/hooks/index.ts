import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const usePdf = () => {

  const pdfDownloadHandler = (documentId: string) => {
    const target = document.getElementById(documentId)
    if (target === null) return;
    html2canvas(target, {
      scale: 2.5,
      height: 100
    }).then((canvas) => {
      const imgData = canvas.toDataURL('img/png', 1.0);
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 5, 10, canvas.width/18, canvas.height/18);
      pdf.save(`test.pdf`);
    });
  };
  
  return {
    pdfDownloadHandler
  }
}
