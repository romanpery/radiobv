
$(document).ready(function(){

	Play('http://78.129.193.82:9814/;','audio');

	$("#prev-res").click(function(event){
		event.preventDefault();
		var isFirst = $(".active-res").is(":first-child");
		if(!isFirst){
			$(".active-res").addClass("hide").removeClass("active-res").prev().removeClass("hide").addClass("active-res");
		}
	});

	$("#next-res").click(function(event){
		event.preventDefault();
		var isLast = $(".active-res").is(":last-child");
		if(!isLast){
			$(".active-res").addClass("hide").removeClass("active-res").next().removeClass("hide").addClass("active-res");
		}
	});

	/*Consultar todos los programas*/
	/*LISTA DE LOS PROGRAMAS DEL LUNES FM*/
	var programaLu1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaLu2 = new Programa("00:02","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaLu3 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaLu4 = new Programa("06:06","06:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaLu5 = new Programa("06:30","06:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	

	var listaProgramasLu = [programaLu1,programaLu2,programaLu3,programaLu4,programaLu5];

	/*LISTA DE LOS PROGRAMAS DEL MARTES FM*/
	var programaMa1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaMa2 = new Programa("00:02","01:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMa3 = new Programa("01:00","02:00","Testimonio de oídas","Música nueva en voz de sus creadores","http://www.radio.unam.mx/wp-content/uploads/2017/05/TestimonioOidas-1.jpg","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaMa4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaMa5 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	
	var listaProgramasMa = [programaMa1,programaMa2,programaMa3,programaMa4,programaMa5];


	/*LISTA DE LOS PROGRAMAS DEL MIERCOLES FM*/
	var programaMi1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaMi2 = new Programa("00:02","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMi3 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaMi4 = new Programa("06:06","06:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaMi5 = new Programa("06:30","06:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	

	var listaProgramasMi = [programaMi1,programaMi2,programaMi3,programaMi4,programaMi5];


	/*LISTA DE LOS PROGRAMAS DEL JUEVES FM*/
	var programaJu1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaJu2 = new Programa("00:02","01:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaJu3 = new Programa("01:00","02:00","Testimonio de oídas","Música nueva en voz de sus creadores","http://www.radio.unam.mx/wp-content/uploads/2017/05/TestimonioOidas-1.jpg","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaJu4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaJu5 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	

	var listaProgramasJu = [programaJu1,programaJu2,programaJu3,programaJu4,programaJu5];


	/*LISTA DE LOS PROGRAMAS DEL VIERNES FM*/
	var programaVi1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaVi2 = new Programa("00:02","01:00","Carpe noctem","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CarpeNoctem.jpg","http://www.radio.unam.mx/");
	var programaVi3 = new Programa("01:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaVi4 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaVi5 = new Programa("06:06","06:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	

	var listaProgramasVi = [programaVi1,programaVi2,programaVi3,programaVi4,programaVi5];


	/*LISTA DE LOS PROGRAMAS DEL SABADO FM*/
	var programaSa1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaSa2 = new Programa("00:02","21:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaSa3 = new Programa("08:00","9:00","Sintomas de la Enfermedad","Programa de contenido de la Neurosis","https://www.neuroticosanonimosbvoax.org.mx/wp-content/uploads/2020/06/radiosintomas.png","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaSa4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaSa5 = new Programa("20:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	

	var listaProgramasSa = [programaSa1,programaSa2,programaSa3,programaSa4,programaSa5];


	/*LISTA DE LOS PROGRAMAS DEL DOMINGO FM*/
	var programaDo1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaDo2 = new Programa("00:02","01:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaDo3 = new Programa("01:00","02:00","Testimonio de oídas","Música nueva en voz de sus creadores","http://www.radio.unam.mx/wp-content/uploads/2017/05/TestimonioOidas-1.jpg","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaDo4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaDo5 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	
	var listaProgramasDo = [programaDo1,programaDo2,programaDo3,programaDo4,programaDo5];


	/*CODIGO PARA ELEGIR LA LISTA DEL DIA*/

	var d = new Date();
	var days = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
	var dia = days[d.getDay()];

	// del 0 - 6, donde 0 es
	switch(dia){
		case 'domingo':
			var listaProgramas = listaProgramasDo;
			break;
		case 'lunes':
			var listaProgramas = listaProgramasLu;
			break;
		case 'martes':
			var listaProgramas = listaProgramasMa;
			break;
		case 'miercoles':
			var listaProgramas = listaProgramasMi;
			break;
		case 'jueves':
			var listaProgramas = listaProgramasJu;
			break;
		case 'viernes':
			var listaProgramas = listaProgramasVi;
			break;
		case 'sabado':
			var listaProgramas = listaProgramasSa;
	}

	// se crea el html de los programas
	var result = crearHTML(listaProgramas);

	$("#list-res").prepend(result);
});

/* Objeto Programa */
function Programa(horaInicio,horaFin,nombre,descripcionPrograma,urlImage,urlPrograma){
	this.horaInicio = horaInicio;
	this.horaFin = horaFin;
	this.nombre = nombre;
	this.descripcionPrograma = descripcionPrograma;
	this.urlImage = 'background-image: url("' + urlImage + '"); background-size: cover; background-position: center;';
	this.urlPrograma = urlPrograma;
}

function addZero(i){
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function crearHTML(listaProgramas){
	var d = new Date();
	var horaActual = addZero(d.getHours()) + ":" +  addZero(d.getMinutes());

	var saveIndex = 0;
	var programLive = new Programa();

	var listProgramasBefore = [];
	var listProgramasAfter = [];

	for (var i = 0; i < listaProgramas.length; i++) {
		if(i != (listaProgramas.length - 1)){
			if(horaActual == listaProgramas[i].horaInicio || (horaActual > listaProgramas[i].horaInicio && horaActual < listaProgramas[i+1].horaInicio)){
				programLive = listaProgramas[i];
				saveIndex = i;
			}
		}else{
			if(horaActual == listaProgramas[i].horaInicio || (horaActual > listaProgramas[i].horaInicio)){
				programLive = listaProgramas[i];
				saveIndex = i;
			}
		}
	}

	for(var i = 0; i < listaProgramas.length; i++){
		if(i < saveIndex){
			listProgramasBefore.push(listaProgramas[i]);
		}else if(i > saveIndex){
			listProgramasAfter.push(listaProgramas[i]);
		}
	}

	/*===========================================================*/
	/*Inicia codigo para version responsive*/

	var htmlResponsive = "";
	for(var i = 0; i < listaProgramas.length; i++){
		if(i != (listaProgramas.length - 1)){
			if(horaActual == listaProgramas[i].horaInicio || (horaActual > listaProgramas[i].horaInicio && horaActual < listaProgramas[i+1].horaInicio)){
				var programA = listaProgramas[i];
				var contentPA = "<div class='program-content'><div class='row'><div class='col-xs-6'><h3><span class='label label-custom'><span style='" + programLive.urlImage + "'>EN VIVO</span></span></h3><h4><span class='label label-custom'><span style='" + programLive.urlImage + "'>96.1 FM</span></span></h4></div><div class='col-xs-6 text-right horario'>" + programA.horaInicio + " - " + programA.horaFin + "</div></div><div class='row'><a target='_parent' href='" + programA.urlPrograma + "'><div class='col-xs-12 titulo'>" + programA.nombre + "</div></a></div><div class='row'><div class='col-xs-12 descripcion'>" + programA.descripcionPrograma + "</div></div></div>";
				htmlResponsive = htmlResponsive + "<li class='active-res live' style='" + programA.urlImage + "'>" + contentPA + "</li>";
			}else{
				var programA = listaProgramas[i];
				var contentPA = "<div class='program-content'><div class='row'><div class='col-xs-12 text-right horario'>" + programA.horaInicio + " - " + programA.horaFin + "</div></div><div class='row'><a target='_parent' href='" + programA.urlPrograma + "'><div class='col-xs-12 titulo'>" + programA.nombre + "</div></a></div><div class='row'><div class='col-xs-12 descripcion'>" + programA.descripcionPrograma + "</div></div></div>";
				htmlResponsive = htmlResponsive + "<li class='hide' style='" + programA.urlImage + "'>" + contentPA + "</li>";
			}
		}else{
			if(horaActual == listaProgramas[i].horaInicio || (horaActual > listaProgramas[i].horaInicio)){
				var programA = listaProgramas[i];
				var contentPA = "<div class='program-content'><div class='row'><div class='col-xs-6'><h4><span class='label label-custom'><span style='" + programA.urlImage + "'>EN VIVO</span></span></h4></div><div class='col-xs-6 text-right horario'>" + programA.horaInicio + " - " + programA.horaFin + "</div></div><div class='row'><a target='_parent' href='" + programA.urlPrograma + "'><div class='col-xs-12 titulo'>" + programA.nombre + "</div></a></div><div class='row'><div class='col-xs-12 descripcion'>" + programA.descripcionPrograma + "</div></div></div>";
				htmlResponsive = htmlResponsive + "<li class='active-res live' style='" + programA.urlImage + "'>" + contentPA + "</li>";
			}else{
				var programA = listaProgramas[i];
				var contentPA = "<div class='program-content'><div class='row'><div class='col-xs-12 text-right horario'>" + programA.horaInicio + " - " + programA.horaFin + "</div></div><div class='row'><a target='_parent' href='" + programA.urlPrograma + "'><div class='col-xs-12 titulo'>" + programA.nombre + "</div></a></div><div class='row'><div class='col-xs-12 descripcion'>" + programA.descripcionPrograma + "</div></div></div>";
				htmlResponsive = htmlResponsive + "<li class='hide' style='" + programA.urlImage + "'>" + contentPA + "</li>";
			}
		}
	}
	var htmlA = '<li class="hide mensaje"><div class="row" style="position: relative;top: 50%;"><div class="col-md-12 titulo text-center">Inicio de la programación</div></div></li>';
	var htmlD = '<li class="hide mensaje"><div class="row" style="position: relative;top: 50%;"><div class="col-md-12 titulo text-center">Fin de la programación</div></div></li>';
	return htmlA + htmlResponsive + htmlD;
}
