function guardar(){
    let numero = document.getElementsByName('tuNumero')[0].value;
    
    document.write("El 30% de "+numero +" es "+numero*0.3)
}

function evaluar(form){
    let edad = form.tuEdad.value;
    let altura = form.tuAltura.value;
    let sexo = form.tuSexo.value;
    var resultado ;
    if(sexo==0){
		resultado = eval(50+((altura-150)/4)*3 + (edad - 20)/4);
	}
	else if(sexo==1){
		resultado = eval((50+((altura-150)/4)*3 + (edad - 20)/4)*0.9)
	}
	
    
    
    form.resultadoTuOperacion.value = resultado
	
	
}
