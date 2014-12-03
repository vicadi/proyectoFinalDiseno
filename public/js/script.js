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

	var contador;
	$('#todosPagos').click(function () {
		if(contador==0){
	       	$("#pago1").attr('checked', true);
	       	$("#pago2").attr('checked', true);
	       	$("#pago3").attr('checked', true);
	       	$("#pago4").attr('checked', true);
	       	$("#pago5").attr('checked', true);
	       	$("#pago6").attr('checked', true);
	       	$("#pago7").attr('checked', true);
	       	$("#pago8").attr('checked', true);
	       	$("#todosPagos").attr('checked', true);
	       	contador=1;
	    }else{
	       	$("#pago1").attr('checked', false);
	       	$("#pago2").attr('checked', false);
	       	$("#pago3").attr('checked', false);
	       	$("#pago4").attr('checked', false);
	       	$("#pago5").attr('checked', false);
	       	$("#pago6").attr('checked', false);
	       	$("#pago7").attr('checked', false);
	       	$("#pago8").attr('checked', false);
	       	$("#todosPagos").attr('checked', false);
	       	contador=0;
	    }
	});

	$('#todosProm').click(function () {
		if(contador==0){
	       	$("#prom1").attr('checked', true);
	       	$("#prom2").attr('checked', true);
	       	$("#prom3").attr('checked', true);
	       	$("#prom4").attr('checked', true);
	       	$("#prom5").attr('checked', true);
	       	$("#prom6").attr('checked', true);
	       	$("#prom7").attr('checked', true);
	       	$("#prom8").attr('checked', true);
	       	$("#todosProm").attr('checked', true);
	       	contador=1;
	    }else{
	       	$("#prom1").attr('checked', false);
	       	$("#prom2").attr('checked', false);
	       	$("#prom3").attr('checked', false);
	       	$("#prom4").attr('checked', false);
	       	$("#prom5").attr('checked', false);
	       	$("#prom6").attr('checked', false);
	       	$("#prom7").attr('checked', false);
	       	$("#prom8").attr('checked', false);
	       	$("#todosProm").attr('checked', false);
	       	contador=0;
	    }
	});
})

