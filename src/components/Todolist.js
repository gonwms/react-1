import React, {Component} from 'react';
import '../index.sass';
import Todo from './Todo'
/*
Opción componenete Función
*/
// function Tareas() {
// 	return (<h1>HOLA EDUARS</h1>)
// 	;
// }

/* 
Opción componenete Clase
*/
class Tareas extends Component{
	render(){
		return( 
		 <h1>HOLA VULVA</h1>
		 )
	}
}



function HelloWorld(props){
	return <h1>Hello {props.mensaje}</h1>
} 

function Container(){
	return (
		<div>
			Este es un mensaje para el mundo: <HelloWorld mensaje='wachines'/>
		</div>
	)
}



export {
	Tareas,
	Container
}