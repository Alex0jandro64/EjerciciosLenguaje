class distancias{
	constructor(puntoA,puntoB){
		this.puntoA=puntoA
		this.puntoB=puntoB
	}
	
	calculoDistancia(){
		return this.puntoB-this.puntoA
	}
}

function ejerc1(){
	let ejemplo = new distancias(prompt("Di el punto a"),prompt("Di el punto b"))
	document.write(ejemplo.calculoDistancia())
}