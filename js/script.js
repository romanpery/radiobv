
$(document).ready(function(){

	Play('http://78.129.193.82:9814:9814/;','audio');

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
	var programaLu6 = new Programa("06:40","06:55","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaLu7 = new Programa("06:55","07:00","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaLu8 = new Programa("07:00","10:00","Primer movimiento","El mundo desde la Universidad.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_Primermovimiento.jpg","http://www.radio.unam.mx/album/primermovimiento/");
	var programaLu9 = new Programa("10:00","11:00","Xochikozkatl. Collar de flores","Hacemos revista del México profundo","http://www.radio.unam.mx/wp-content/uploads/2018/05/index_CollardeFlores.jpg","http://www.radio.unam.mx/programa_unam/xochikozkatl-collar-flores/");
	var programaLu10 = new Programa("11:00","11:50","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaLu11 = new Programa("11:50","11:55","En su tinta","¡Todos los escritores saben mejor en su tinta!","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_Ensutinta.jpg","http://www.radio.unam.mx/album/tinta/");
	var programaLu12 = new Programa("11:55","13:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaLu13 = new Programa("13:00","15:00","Prisma RU","Noticiario radiofónico universitario.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PrismaRU.jpg","http://www.radio.unam.mx/album/prismaru/");
	var programaLu14 = new Programa("15:00","15:15","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaLu15 = new Programa("15:15","16:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaLu16 = new Programa("16:00","16:05","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaLu17 = new Programa("16:05","16:30","Habitare","Agenda ambiental inaplazable","http://www.radio.unam.mx/wp-content/uploads/2019/05/Habitare_600.jpg","http://www.radio.unam.mx/programa_unam/habitare/");
	var programaLu18 = new Programa("16:30","17:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaLu19 = new Programa("17:00","17:30","Ensayo sobre la ceguera","","http://www.radio.unam.mx/wp-content/uploads/2020/06/ensayo_ceguera_slider.jpg","http://www.radio.unam.mx/programa_unam/ensayo-la-ceguera/");
	var programaLu20 = new Programa("17:30","17:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaLu21 = new Programa("17:40","18:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaLu22 = new Programa("18:00","18:30","Con-Ciencia. Psicología y Sociedad","","http://www.radio.unam.mx/wp-content/uploads/2018/05/Con-Ciencia_index.jpg","http://www.radio.unam.mx/programa_unam/ciencia-psicologia-sociedad/");
	var programaLu23 = new Programa("18:30","19:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaLu24 = new Programa("19:00","20:00","Panorama del jazz","El jazz es su especialidad","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PanoramadeJazz.jpg","http://www.radio.unam.mx/programa_unam/panorama-del-jazz/");
	var programaLu25 = new Programa("20:00","23:00","Resistencia modulada","Revista radiofónica hecha por y para jóvenes","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_ResistenciaModulada.jpg","http://www.radio.unam.mx/album/resistencia/");
	var programaLu26 = new Programa("23:00","24:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");

	var listaProgramasLu = [programaLu1,programaLu2,programaLu3,programaLu4,programaLu5,programaLu6,programaLu7,programaLu8,programaLu9,programaLu10,programaLu11,programaLu12,programaLu13,programaLu14,programaLu15,programaLu16,programaLu17,programaLu18,programaLu19,programaLu20,programaLu21,programaLu22,programaLu23,programaLu24,programaLu25,programaLu26];

	/*LISTA DE LOS PROGRAMAS DEL MARTES FM*/
	var programaMa1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaMa2 = new Programa("00:02","01:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMa3 = new Programa("01:00","02:00","Testimonio de oídas","Música nueva en voz de sus creadores","http://www.radio.unam.mx/wp-content/uploads/2017/05/TestimonioOidas-1.jpg","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaMa4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaMa5 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaMa6 = new Programa("06:06","06:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaMa7 = new Programa("06:30","06:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaMa8 = new Programa("06:40","06:55","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaMa9 = new Programa("06:55","07:00","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaMa10 = new Programa("07:00","10:00","Primer movimiento","El mundo desde la Universidad.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_Primermovimiento.jpg","http://www.radio.unam.mx/album/primermovimiento/");
	var programaMa11 = new Programa("10:00","10:12","Las esquinas del azar","Diálogos con Óscar de la Borbolla","http://www.radio.unam.mx/wp-content/uploads/2020/02/esquinas_del_azar_slider.png","http://www.radio.unam.mx/programa_unam/las-esquinas-del-azar-dialogos-oscar-la-borbolla/");
	var programaMa12 = new Programa("10:12","11:50","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMa13 = new Programa("11:50","11:55","Cartelera musical","Actividades de Música UNAM","http://www.radio.unam.mx/wp-content/uploads/2017/05/CarteleraMusical.jpg","");
	var programaMa14 = new Programa("11:55","13:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaMa15 = new Programa("13:00","15:00","Prisma RU","Noticiario radiofónico universitario.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PrismaRU.jpg","http://www.radio.unam.mx/album/prismaru/");
	var programaMa16 = new Programa("15:00","15:15","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaMa17 = new Programa("15:15","16:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaMa18 = new Programa("16:00","16:05","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaMa19 = new Programa("16:05","17:00","Derecho a Debate","En la cultura de la legalidad participamos todos","http://www.radio.unam.mx/wp-content/uploads/2018/05/Derechoadebate_index.jpg","http://www.radio.unam.mx/programa_unam/derecho-a-debate/");
	var programaMa20 = new Programa("17:00","17:30","Ensayo sobre la ceguera","","http://www.radio.unam.mx/wp-content/uploads/2020/06/ensayo_ceguera_slider.jpg","http://www.radio.unam.mx/programa_unam/ensayo-la-ceguera/");
	var programaMa21 = new Programa("17:30","17:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaMa22 = new Programa("17:40","18:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMa23 = new Programa("18:00","18:30","Hipócrates 2.0","","http://www.radio.unam.mx/wp-content/uploads/2017/08/Hipocrates.jpg","http://www.radio.unam.mx/programa_unam/hipocrates-2-0/");
	var programaMa24 = new Programa("18:30","19:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaMa25 = new Programa("19:00","20:00","Panorama del jazz","El jazz es su especialidad","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PanoramadeJazz.jpg","http://www.radio.unam.mx/programa_unam/panorama-del-jazz/");
	var programaMa26 = new Programa("20:00","23:00","Resistencia modulada","Revista radiofónica hecha por y para jóvenes","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_ResistenciaModulada.jpg","http://www.radio.unam.mx/album/resistencia/");
	var programaMa27 = new Programa("23:00","24:00","Islas resonantes","Pensar el mundo a través del sonido","http://www.radio.unam.mx/wp-content/uploads/2019/02/IslasResonantes600px.jpg","http://www.radio.unam.mx/programa_unam/islas-resonantes/");

	var listaProgramasMa = [programaMa1,programaMa2,programaMa3,programaMa4,programaMa5,programaMa6,programaMa7,programaMa8,programaMa9,programaMa10,programaMa11,programaMa12,programaMa13,programaMa14,programaMa15,programaMa16,programaMa17,programaMa18,programaMa19,programaMa20,programaMa21,programaMa22,programaMa23,programaMa24,programaMa25,programaMa26,programaMa27];


	/*LISTA DE LOS PROGRAMAS DEL MIERCOLES FM*/
	var programaMi1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaMi2 = new Programa("00:02","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMi3 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaMi4 = new Programa("06:06","06:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaMi5 = new Programa("06:30","06:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaMi6 = new Programa("06:40","06:55","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaMi7 = new Programa("06:55","07:00","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaMi8 = new Programa("07:00","10:00","Primer movimiento","El mundo desde la Universidad.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_Primermovimiento.jpg","http://www.radio.unam.mx/album/primermovimiento/");
	var programaMi9 = new Programa("10:00","10:12","Resiliente","Resiliente es el relato de las geografías que resisten y reconstruyen la paz.","http://www.radio.unam.mx/wp-content/uploads/2020/05/Resiliente.jpg","http://www.radio.unam.mx/programa_unam/resiliente/");
	var programaMi10 = new Programa("10:12","11:50","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMi11 = new Programa("11:50","11:55","En su tinta","¡Todos los escritores saben mejor en su tinta!","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_Ensutinta.jpg","http://www.radio.unam.mx/album/tinta/");
	var programaMi12 = new Programa("11:55","13:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaMi13 = new Programa("13:00","15:00","Prisma RU","Noticiario radiofónico universitario.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PrismaRU.jpg","http://www.radio.unam.mx/album/prismaru/");
	var programaMi14 = new Programa("15:00","15:15","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaMi15 = new Programa("15:15","16:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaMi16 = new Programa("16:00","16:05","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaMi17 = new Programa("16:05","16:30","El árbol de las ideas","Arte, ciencia y filosofía para la vida","http://www.radio.unam.mx/wp-content/uploads/2017/09/Elarbol_delasIdeas.jpg","http://www.radio.unam.mx/programa_unam/arbol-las-ideas/");
	var programaMi18 = new Programa("16:30","17:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaMi19 = new Programa("17:00","17:30","Ensayo sobre la ceguera","","http://www.radio.unam.mx/wp-content/uploads/2020/06/ensayo_ceguera_slider.jpg","http://www.radio.unam.mx/programa_unam/ensayo-la-ceguera/");
	var programaMi20 = new Programa("17:30","17:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaMi21 = new Programa("17:40","18:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaMi22 = new Programa("18:00","19:00","Hacia una nueva música","Música de concierto contemporánea","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HaciaNuevaMusica.jpg","http://www.radio.unam.mx/album/nuevamusica/");
	var programaMi23 = new Programa("19:00","20:00","Panorama del jazz","El jazz es su especialidad","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PanoramadeJazz.jpg","http://www.radio.unam.mx/programa_unam/panorama-del-jazz/");
	var programaMi24 = new Programa("20:00","23:00","Resistencia modulada","Revista radiofónica hecha por y para jóvenes","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_ResistenciaModulada.jpg","http://www.radio.unam.mx/album/resistencia/");
	var programaMi25 = new Programa("23:00","24:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");

	var listaProgramasMi = [programaMi1,programaMi2,programaMi3,programaMi4,programaMi5,programaMi6,programaMi7,programaMi8,programaMi9,programaMi10,programaMi11,programaMi12,programaMi13,programaMi14,programaMi15,programaMi16,programaMi17,programaMi18,programaMi19,programaMi20,programaMi21,programaMi22,programaMi23,programaMi24,programaMi25];


	/*LISTA DE LOS PROGRAMAS DEL JUEVES FM*/
	var programaJu1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaJu2 = new Programa("00:02","01:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaJu3 = new Programa("01:00","02:00","Testimonio de oídas","Música nueva en voz de sus creadores","http://www.radio.unam.mx/wp-content/uploads/2017/05/TestimonioOidas-1.jpg","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaJu4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaJu5 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaJu6 = new Programa("06:06","06:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaJu7 = new Programa("06:30","06:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaJu8 = new Programa("06:40","06:55","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaJu9 = new Programa("06:55","07:00","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaJu10 = new Programa("07:00","10:00","Primer movimiento","El mundo desde la Universidad.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_Primermovimiento.jpg","http://www.radio.unam.mx/album/primermovimiento/");
	var programaJu11 = new Programa("10:00","10:30","Voces desde la raíz","Diferentes lenguas, diferentes visiones, un sólo corazón.","http://www.radio.unam.mx/wp-content/uploads/2020/06/voces_raiz_slider.jpg","http://www.radio.unam.mx/programa_unam/voces-la-raiz/");
	var programaJu12 = new Programa("10:30","11:50","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaJu13 = new Programa("11:50","11:55","Cartelera musical","Actividades de Música UNAM","http://www.radio.unam.mx/wp-content/uploads/2017/05/CarteleraMusical.jpg","");
	var programaJu14 = new Programa("11:55","13:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaJu15 = new Programa("13:00","15:00","Prisma RU","Noticiario radiofónico universitario.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PrismaRU.jpg","http://www.radio.unam.mx/album/prismaru/");
	var programaJu16 = new Programa("15:00","15:15","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaJu17 = new Programa("15:15","16:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaJu18 = new Programa("16:00","16:05","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaJu19 = new Programa("16:05","16:15","Revista de la Universidad de México","","http://www.radio.unam.mx/wp-content/uploads/2018/08/RevistadelaUniversidad2_600.jpg","http://www.radio.unam.mx/programa_unam/revista-la-universidad/");
	var programaJu20 = new Programa("16:15","17:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaJu21 = new Programa("17:00","17:30","Ensayo sobre la ceguera","","http://www.radio.unam.mx/wp-content/uploads/2020/06/ensayo_ceguera_slider.jpg","http://www.radio.unam.mx/programa_unam/ensayo-la-ceguera/");
	var programaJu22 = new Programa("17:30","17:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaJu23 = new Programa("17:40","18:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaJu24 = new Programa("18:00","19:00","Al compás de la letra","Revista literaria donde la palabra marca la ruta","http://www.radio.unam.mx/wp-content/uploads/2017/05/Compasletra.jpg","http://www.radio.unam.mx/programa_unam/al-compas-la-letra/");
	var programaJu25 = new Programa("19:00","20:00","Panorama del jazz","El jazz es su especialidad","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PanoramadeJazz.jpg","http://www.radio.unam.mx/programa_unam/panorama-del-jazz/");
	var programaJu26 = new Programa("20:00","23:00","Resistencia modulada","Revista radiofónica hecha por y para jóvenes","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_ResistenciaModulada.jpg","http://www.radio.unam.mx/album/resistencia/");
	var programaJu27 = new Programa("23:00","24:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");

	var listaProgramasJu = [programaJu1,programaJu2,programaJu3,programaJu4,programaJu5,programaJu6,programaJu7,programaJu8,programaJu9,programaJu10,programaJu11,programaJu12,programaJu13,programaJu14,programaJu15,programaJu16,programaJu17,programaJu18,programaJu19,programaJu20,programaJu21,programaJu22,programaJu23,programaJu24,programaJu25,programaJu26,programaJu27];


	/*LISTA DE LOS PROGRAMAS DEL VIERNES FM*/
	var programaVi1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaVi2 = new Programa("00:02","01:00","Carpe noctem","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CarpeNoctem.jpg","http://www.radio.unam.mx/");
	var programaVi3 = new Programa("01:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaVi4 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaVi5 = new Programa("06:06","06:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaVi6 = new Programa("06:30","06:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaVi7 = new Programa("06:40","06:55","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaVi8 = new Programa("06:55","07:00","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaVi9 = new Programa("07:00","10:00","Primer movimiento","El mundo desde la Universidad.","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_Primermovimiento.jpg","http://www.radio.unam.mx/album/primermovimiento/");
	var programaVi10 = new Programa("10:00","11:00","La ciencia que somos","","http://www.radio.unam.mx/wp-content/uploads/2018/06/LaCienciaqueSomos.jpg","http://www.radio.unam.mx/programa_unam/la-ciencia-que-somos/");
	var programaVi11 = new Programa("11:00","12:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaVi12 = new Programa("12:00","12:05","Cartelera musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CarteleraMusical.jpg","");
	var programaVi13 = new Programa("12:05","13:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaVi14 = new Programa("13:00","15:00","Prisma RU","Noticiario radiofónico universitario","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PrismaRU.jpg","http://www.radio.unam.mx/album/prismaru/");
	var programaVi15 = new Programa("15:00","15:15","Viento de bronce","","http://www.radio.unam.mx/wp-content/uploads/2019/05/Viento_Bronce_600.jpg","http://www.radio.unam.mx/programa_unam/viento-de-bronce/");
	var programaVi16 = new Programa("15:15","16:00","Escaparate 961","","http://www.radio.unam.mx/wp-content/uploads/2017/08/Escaparate-1.jpg","http://www.radio.unam.mx/programa_unam/escaparate/");
	var programaVi17 = new Programa("16:00","16:05","Corte informativo","","http://www.radio.unam.mx/wp-content/uploads/2017/05/CorteInformativo_1.jpg","");
	var programaVi18 = new Programa("16:05","16:30","Vida cotidiana","Sociedad en movimiento","http://www.radio.unam.mx/wp-content/uploads/2018/02/VidaCotidiana.jpg","http://www.radio.unam.mx/programa_unam/vida-cotidiana/");
	var programaVi19 = new Programa("16:30","17:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaVi20 = new Programa("17:00","17:30","Ensayo sobre la ceguera","","http://www.radio.unam.mx/wp-content/uploads/2020/06/ensayo_ceguera_slider.jpg","http://www.radio.unam.mx/programa_unam/ensayo-la-ceguera/");
	var programaVi21 = new Programa("17:30","17:40","Entre hombres","¿La perspectiva de género solamente puede existir desde el feminismo?","http://www.radio.unam.mx/wp-content/uploads/2019/02/EntreHombres600px.jpg","http://www.radio.unam.mx/programa_unam/entre-hombres/");
	var programaVi22 = new Programa("17:40","18:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaVi23 = new Programa("18:00","18:12","Las esquinas del azar","Diálogos con Óscar de la Borbolla","http://www.radio.unam.mx/wp-content/uploads/2020/02/esquinas_del_azar_slider.png","http://www.radio.unam.mx/programa_unam/las-esquinas-del-azar-dialogos-oscar-la-borbolla/");
	var programaVi24 = new Programa("18:12","18:45","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaVi25 = new Programa("18:45","19:00","Cuando el rock dominaba al mundo","","http://www.radio.unam.mx/wp-content/uploads/2017/09/Cuando_elrock.jpg","http://www.radio.unam.mx/programa_unam/cuando-el-rock-dominaba-al-mundo/");
	var programaVi26 = new Programa("19:00","20:00","Panorama del jazz","El jazz es su especialidad","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_PanoramadeJazz.jpg","http://www.radio.unam.mx/programa_unam/panorama-del-jazz/");
	var programaVi27 = new Programa("20:00","21:00","Resistencia modulada","Revista radiofónica hecha por y para jóvenes","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_ResistenciaModulada.jpg","http://www.radio.unam.mx/album/resistencia/");
	var programaVi28 = new Programa("21:00","22:00","Festival Intersecciones","Conciertos de música fusión desde la Sala Julián Carrillo","http://www.radio.unam.mx/wp-content/uploads/2017/06/FestivalIntersecciones.jpg","http://www.radio.unam.mx/musica/");
	var programaVi29 = new Programa("22:00","23:00","Resistencia modulada","Revista radiofónica hecha por y para jóvenes","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_ResistenciaModulada.jpg","http://www.radio.unam.mx/album/resistencia/");
	var programaVi30 = new Programa("23:00","24:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");

	var listaProgramasVi = [programaVi1,programaVi2,programaVi3,programaVi4,programaVi5,programaVi6,programaVi7,programaVi8,programaVi9,programaVi10,programaVi11,programaVi12,programaVi13,programaVi14,programaVi15,programaVi16,programaVi17,programaVi18,programaVi19,programaVi20,programaVi21,programaVi22,programaVi23,programaVi24,programaVi25,programaVi26,programaVi27,programaVi28,programaVi29,programaVi30];


	/*LISTA DE LOS PROGRAMAS DEL SABADO FM*/
	var programaSa1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaSa2 = new Programa("00:02","01:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaSa3 = new Programa("01:00","02:00","Testimonio de oídas","Música nueva en voz de sus creadores","http://www.radio.unam.mx/wp-content/uploads/2017/05/TestimonioOidas-1.jpg","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaSa4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaSa5 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaSa6 = new Programa("06:06","10:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaSa7 = new Programa("10:00","11:00","Jocus Pocus","Radiorevista para los más pequeños","http://www.radio.unam.mx/wp-content/uploads/2017/05/FocusPocus.jpg","http://www.radio.unam.mx/album/jocuspocus/");
	var programaSa8 = new Programa("11:00","11:50","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaSa9 = new Programa("11:50","11:55","Cartelera musical","Actividades de Música UNAM","http://www.radio.unam.mx/wp-content/uploads/2017/05/CarteleraMusical.jpg","");
	var programaSa10 = new Programa("11:55","13:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaSa11 = new Programa("13:00","13:30","La araña patona","Divulgación científica de diversos temas","http://www.radio.unam.mx/wp-content/uploads/2017/05/AranaPatona.jpg","");
	var programaSa12 = new Programa("13:30","16:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaSa13 = new Programa("16:00","17:00","Aria de Divertimento","Revista de música culta con un enfoque cómico","http://www.radio.unam.mx/wp-content/uploads/2020/05/Aria_de_Divertimento.jpg","http://www.radio.unam.mx/programa_unam/aria-de-divertimento/");
	var programaSa14 = new Programa("17:00","19:00","Mundofonías","Música del mundo","http://www.radiounam.unam.mx/wp-content/uploads/2017/05/Mundofonias.jpg","http://www.radio.unam.mx/programa_unam/mundofonias/");
	var programaSa15 = new Programa("19:00","19:50","Islas resonantes","Pensar el mundo a través del sonido","http://www.radio.unam.mx/wp-content/uploads/2019/02/IslasResonantes600px.jpg","http://www.radio.unam.mx/programa_unam/islas-resonantes/");
	var programaSa16 = new Programa("19:50","20:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaSa17 = new Programa("20:00","20:30","Homenaje Oscar Chávez","","http://www.radio.unam.mx/wp-content/uploads/2020/06/homenaje_o_chavez_slider.jpg","http://www.radio.unam.mx/");
	var programaSa18 = new Programa("20:30","24:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");

	var listaProgramasSa = [programaSa1,programaSa2,programaSa3,programaSa4,programaSa5,programaSa6,programaSa7,programaSa8,programaSa9,programaSa10,programaSa11,programaSa12,programaSa13,programaSa14,programaSa15,programaSa16,programaSa17,programaSa18];


	/*LISTA DE LOS PROGRAMAS DEL DOMINGO FM*/
	var programaDo1 = new Programa("00:00","00:02","Himno Nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/04/SliderHome_HimnoNacional.jpg","http://www.radio.unam.mx/");
	var programaDo2 = new Programa("00:02","01:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaDo3 = new Programa("01:00","02:00","Testimonio de oídas","Música nueva en voz de sus creadores","http://www.radio.unam.mx/wp-content/uploads/2017/05/TestimonioOidas-1.jpg","http://www.radio.unam.mx/album/testimoniooidas/");
	var programaDo4 = new Programa("02:00","06:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaDo5 = new Programa("06:00","06:06","Himno Nacional y rúbrica","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HimnoNacional_1.jpg","http://www.radio.unam.mx/");
	var programaDo6 = new Programa("06:06","12:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaDo7 = new Programa("12:00","13:30","OFUNAM","Transmisión diferida de los conciertos de la OFUNAM","http://www.radio.unam.mx/wp-content/uploads/2017/05/OFUNAM.jpg","");
	var programaDo8 = new Programa("13:30","14:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaDo9 = new Programa("14:30","14:45","Gabinete de curiosidades","Colección de sonidos extraños y antiguos","http://www.radio.unam.mx/wp-content/uploads/2017/05/gabineteCuriosidades.jpg","http://www.radio.unam.mx/album/gabinetecuriosidades/");
	var programaDo10 = new Programa("14:45","15:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");
	var programaDo11 = new Programa("15:30","16:00","Voces desde la raíz","Diferentes lenguas, diferentes visiones, un sólo corazón.","http://www.radio.unam.mx/wp-content/uploads/2020/06/voces_raiz_slider.jpg","http://www.radio.unam.mx/programa_unam/voces-la-raiz/");
	var programaDo12 = new Programa("16:00","17:30","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_4.jpg","http://www.radio.unam.mx/");
	var programaDo13 = new Programa("17:30","18:00","Los compositores interpretan","Un compositor ejecuta su obra","http://www.radio.unam.mx/wp-content/uploads/2017/05/CompositoresInterpretan.jpg","http://www.radio.unam.mx/programa_unam/los-compositores-interpretan/");
	var programaDo14 = new Programa("18:00","22:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_2.jpg","http://www.radio.unam.mx/");
	var programaDo15 = new Programa("22:00","23:00","La hora nacional","","http://www.radio.unam.mx/wp-content/uploads/2017/05/HoraNacional.jpg","http://www.radio.unam.mx/");
	var programaDo16 = new Programa("23:00","24:00","Programación musical","","http://www.radio.unam.mx/wp-content/uploads/2017/05/programacionMusical_3.jpg","http://www.radio.unam.mx/");

	var listaProgramasDo = [programaDo1,programaDo2,programaDo3,programaDo4,programaDo5,programaDo6,programaDo7,programaDo8,programaDo9,programaDo10,programaDo11,programaDo12,programaDo13,programaDo14,programaDo15,programaDo16];


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
