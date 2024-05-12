function generatePDF() {
    //Crear una instancia en jsPDF
    var doc = new jsPDF();
// Utiliza html2pdf para convertir el contenido del documento actual (document.body) en un archivo PDF
    // y guarda el archivo con el nombre 'myDocument.pdf'
    html2pdf().from(document.body).save('myDocument.pdf')  

}  
// Llama a la función generatePDF() para generar el PDF cuando se carga la página
  generatePDF();
