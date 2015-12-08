// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#boton1").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.68/libreria/buscarTodos.php",
			error: function(){
			 alert ('No se Pudo Conectar a la Base de Datos');
			}, 
			success: function(respuesta){
				
			var datosLibro = JSON.parse(respuesta);
			
		
			for (var x= 0; x<datosLibro.libros.length; x++)
			{
				$('#informacion').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/libreria/recursos/imagenes/fotos/'+datosLibro.libros[x].claveLib+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosLibro.libro[x].nombreLib +' </h1><h2> '+datosLibro.libros[x].autorLib+' </h2></div></div><div><h2>'+datosLibro.libros[x].yearlibro+' </h2><h2>'+datosLibro.libros[x].editorialLib+' </h2><h2>'+datosLibro.libros[x].precioLib+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#pagina1',{
				transition: 'pop'
			});
			}
		});
			
		});// tap boton1
		
		
		$("#btn_libro").on("tap", function (){
		$.ajax({
			type:"POST",
			 
			url:"http://192.168.1.68/libreria/buscarLibros.php",
			data: "libro=" + $('#txttitulo').val(), 
			error: function(){
			 alert ('No se Pudo Conectar  a la Base de Datos');
			}, 
			success: function(respuestalibro){
				
			var datosLibros = JSON.parse(respuestalibro);
			
		
			for (var x= 0; x<datosLibros.libros.length; x++)
			{
				$('#informacionlibro').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/libreria/recursos/imagenes/fotos/'+datosLibros.libros[x].claveLib+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosLibros.libros[x].nombreLib +' </h1><h2> '+datosLibros.libros[x].autorLib+' </h2></div></div><div><h2>'+datosLibros.libros[x].yearlibro+' </h2><h2>'+datosLibros.libros[x].editorialLib+' </h2><h2>'+datosLibros.libros[x].precioLib+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#libros',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn_libro
		
		
		$("#btn_autor").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.68/libreria/buscarAutor.php",
			data: "autor=" + $('#txtautor').val(),
			error: function(){
			 alert ('No se Pudo Conectar  a la Base de Datos');
			}, 
			success: function(respuestaautor){
				
			var datosautor = JSON.parse(respuestaautor);
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosautor.autores.length; x++)
			{
				$('#informacionautor').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.68/libreria/recursos/imagenes/fotos/'+datosautor.autores[x].claveLib+'.jpg" width="90"></div><div style="display:inline-block"><h1>'+ datosautor.autores[x].nombreLib +' </h1><h2> '+datosautor.autores[x].autorLib+' </h2></div></div><div><h2>'+datosautor.autores[x].yearlibro+' </h2><h2>'+datosautor.autores[x].editorialLib+'</h2><h2>'+datosautor.autores[x].precioLib+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#autor',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn_autor
}); 
});

