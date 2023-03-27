class vehiculos{
	constructor(){
		this._marca="audi"
		this._modelo="A6"
		this._cilindrada=6
	}
	
	get marca(){
		return this._marca;
	}
	get modelo(){
		return this._modelo;
	}
	get cilindrada(){
		return this._cilindrada;
	}
}

class coche extends vehiculos{
	constructor(){
		super()
		this._numeroPuertas=5
		this.numeroOcupantes=5
	}
	
	get numeroPuertas(){
		return this._numeroPuertas;
	}
}

class moto extends vehiculos{
	constructor(){
		super()
		this._anyoDiseyo=2004
		this.carnet="nideaqponer"
	}
	get anyoDiseyo(){
		return this._anyoDiseyo;
	}
}
function pepito(){
	let pepe = new vehiculos();
	alert(pepe.marca)
	let pepito =  new moto()
	alert(pepito._anyoDiseyo)
	
}
