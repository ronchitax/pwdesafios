var Estudiante = function (nombre, edad){
	this.nombre=nombre;
	this.edad=edad;
	this.conocimientos=[];
}

var Clase = function(lista){
	this.lista=lista;
}

var Docente = function(nombre){
	this.nombre=nombre;
	this.clases=[];
	this.asignarClase=function(clase){
		this.clases.push(clase);
	}
	this.ensenarConocimiento=function(conocimiento, estudiante){
		estudiante.conocimientos.push(conocimiento);
	}
}

var unEstudiante = new Estudiante ("raul", 16);
var otroEstudiante = new Estudiante ("pedro", 22);
var unaClase = new Clase([unEstudiante, otroEstudiante]);
var unDocente =new Docente("ester");

unDocente.asignarClase(unaClase);
unDocente.ensenarConocimiento("sumar", unEstudiante);
unDocente.ensenarConocimiento("restar",otroEstudiante);
