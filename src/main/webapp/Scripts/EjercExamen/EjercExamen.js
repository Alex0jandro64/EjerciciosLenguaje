class matriculaAlumno{
	constructor(idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil){
		this.idAlumno=idAlumno
		this.nombre=nombre
		this.apellidos=apellidos
		this.telefono=telefono
		this.marca=marca
		this.modelo=modelo
		this.idPortatil=idPortatil
	}
	
	
}
let matriculas=[]
function crearMatricula(){
	let nombre=prompt("Cual es el nombre del alumno")
	let apellidos=prompt("Cual es el apellido del alumno")
	let telefono=prompt("Cual es el telefono del alumno")
	let marca=prompt("Cual es la marca del portatil")
	let modelo=prompt("Cual es el modelo del portatil")
	let idAlumno=nombre.substring(0,3)+apellidos.substring(0,3)
	let idPortatil=marca.substring(0,3)+"-"+modelo.substring(0,3)
	
	let matricula= new matriculaAlumno(idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil)
	
	matriculas.push(matricula)
	
	return matriculas
}

function verMatriculas(){
	

	matriculas.forEach(
		matriculaAlumno=>document.write("Id Alumno: "+matriculaAlumno.idAlumno+"<br/>Nombre: "+matriculaAlumno.nombre+"<br/>Apellidos: "+matriculaAlumno.apellidos+"<br/>Telefono: "+matriculaAlumno.telefono+"<br/>Id Portatil: "+matriculaAlumno.idPortatil+"<br/>Marca: "+matriculaAlumno.marca+"<br/>Modelo: "+matriculaAlumno.modelo+"<hr/>")
	)  
	document.write("<br/><br/><button onclick=\"crearMatricula()\">Crear Matricula nueva</button>")
	document.write("<button onclick=\"eliminarMatricula()\">EliminarMatricula</button>")
	document.write("<button onclick=\"verMatriculas()\">Ver Matriculas</button>")
	
}
function eliminarMatricula(){
	let matriculaeliminar= prompt("Cual es el identificador de la matricula a eliminar")
	let contador=0
	let encontrado=false
		matriculas.forEach(function(matriculaAlumno){
			if(matriculaAlumno.idAlumno==matriculaeliminar){
				return encontrado=true
			}else{
				contador++
			}
		})
		
	matriculas.splice(contador-1,1)
		
		 
	
}