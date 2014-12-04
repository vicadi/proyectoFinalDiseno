$(document).ready(function(){
	$('#selectPlantilla').change(function(){
		console.log("entro");
		var seleccionPlantilla = $('#selectPlantilla').val();
			if(seleccionPlantilla=="plantilla1")
				$('#contenido #requerimientos table #reqPortafolio #imagenPlantilla').attr('src','/images/plantilla1.jpg');
			else if(seleccionPlantilla=="plantilla2")
				$('#contenido #requerimientos table #reqPortafolio #imagenPlantilla').attr('src','/images/plantilla2.jpg');
			else
				$('#contenido #requerimientos table #reqPortafolio #imagenPlantilla').attr('src','/images/plantilla3.jpg');
	});
})

