import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function downloadAsImage(elementId: string, fileName: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 1.2, // Further reduced scale while maintaining quality
      useCORS: true, // Allow cross-origin images
      backgroundColor: null, // Preserve transparency
      logging: false, // Disable logging
      imageTimeout: 0, // No timeout for images
      removeContainer: true // Clean up temporary elements
    });

    const link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = canvas.toDataURL('image/png', 0.8); // Added quality parameter
    link.click();
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

export async function downloadAsPDF(elementId: string, fileName: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 1.2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false, // Disable logging
      imageTimeout: 0, // No timeout for images
      removeContainer: true,
      onclone: (clonedDoc) => {
        // Optimize cloned document if needed
        return clonedDoc;
      }
    });

    // Compress image data with quality setting
    const imgData = canvas.toDataURL('image/png', 0.8);

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true // Enable PDF compression
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Calculate optimal ratio while maintaining readability
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight) * 0.95;
    
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = (pdfHeight - imgHeight * ratio) / 2;
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio, '', 'FAST');
    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}