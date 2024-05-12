function generatePDF() { // Función para generar un PDF a partir de los datos del formulario
    var doc = new jsPDF(); // Crea un nuevo documento PDF

    var img = new Image(); // Cargar una imagen
    img.src = 'img/LOL.jpg'; //  ruta de la imagen

    img.onload = function() { // Esperar a que la imagen se cargue antes de dibujarla en el documento PDF
        // Configurar la opacidad de la imagen
        var options = { // Configurar la opacidad de la imagen
            opacity: 100 // Ajusta el valor de opacidad
        };

        // Dibujar la imagen en el documento PDF
        doc.addImage(img, 'JPEG', 100, 100, 100, 100, '', 'FAST', options); // Ajusta las coordenadas y el tamaño de la imagen

        //Valores del formulario
        var fname = document.getElementById("fname").value; // Nombre
        var lname = document.getElementById("lname").value; //Apellido
        var email = document.getElementById("email").value; //Correo electronico
        var rfc = document.getElementById("rfc").value; // Registro Federal de Contribuyentes

        var margin = 10; // Margen en píxeles
        var pageWidth = doc.internal.pageSize.width; //Configuracion de la anchura
        var pageHeight = doc.internal.pageSize.height; //Configuracion de la altura
        doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin);  // Dibujar un rectángulo en el PDF

        doc.setTextColor(0, 0, 0); // Color negro
        doc.setFontSize(12); // Tamaño de fuente

        // Agregar texto al PDF con los datos del formulario
        doc.text("Datos Registrados correctamente: ", 55 ,20); //Titulo
        doc.text("Nombre: " + fname, 15, 35); //Nombre
        doc.text("Apellido: " + lname, 15, 45); //Apellido
        doc.text("Direccion de correo Electronico: " + email, 15, 55); // Correo electrónico
        doc.text("Numero de registro federal de " + "Contribuyentes: " + rfc, 15, 65); //RFC

        doc.save("Formulario.pdf"); // Guardar el PDF con un nombre específico
    }; //Cierre
}
