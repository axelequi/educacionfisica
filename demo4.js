
function demo4(){
	
	var p1= document.preguntas.p1.value; 
	var p2= document.preguntas.p2.value;
	var p3= document.preguntas.p3.value; 
	var p4= document.preguntas.p4.value;

	
	 
	var contador=0;
	var porcentaje;
 
	 
	if(p1 == 'A')
	{
		contador++;
	}
	if(p2 == 'C')
	{
		contador++;
	}
	if(p3 == 'F')
	{
		contador++;
	}
	if(p4 == 'G')
	{
		contador++;
	}
	

	

 
	porcentaje = contador *100/4;
	
	return porcentaje;
	
}