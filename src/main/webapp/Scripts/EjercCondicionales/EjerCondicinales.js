function Ejerc1(){
	let seguir = true
	while(seguir){
		let edad = prompt("Cual es la edad 1-100")
		if(edad>1&&edad<100){
			seguir=false
			if(edad>18){
			alert("Tienes permiso")
			}
			else{
				alert("No tienes permiso")
			}
		}
		else{
			alert("Fuera de rango")
		}
		
	}
	
}

function Ejerc2(){
	let categoria=prompt("Cual es la categoria del producto")
	let precio = prompt("Cual es el precio")
	let descuento
	
	switch(categoria){
		case "Camisetas":
			descuento=precio*0.05
			break;
		case "Pantalones":
			descuento=precio*0.1
			break;
		case "Ropa Interior":
			descuento=0
			break;
		case "Chaquetones":
			descuento=precio*0.5
			break;
		default:
			descuento=precio*0.02
			break;
	}
	alert(precio-descuento)
}
