class poligono {
	constructor(altura, ancho) {
		this.altura = altura
		this.ancho = ancho
		this.nombre = "Poligono"
	}

	devuelveNombre() {
		return this.nombre
	}
}

class Cuadrado extends poligono {
	constructor(lado) {
		super(lado, lado);
		this.nombre = "Cuadrado";
	}

	calculoArea() {
		return this.ancho * this.altura;
	}
}

function ejerc2() {
	let pol = new poligono(100, 200);

	console.log(pol.devuelveNombre());

	document.write("Anchura: " + pol.ancho + "// Altura: " + pol.altura+"<br/>");

	var cua = new Cuadrado(20);

	document.write("Area: " +cua.calculoArea());

	document.write("// Anchura: " + cua.ancho + "// Altura: " + cua.altura);
}