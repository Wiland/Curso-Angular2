"use strict";
// ----------------------------------------------------------------------------
// Decoradores
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var Villano = (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
// ----------------------------------------------------------------------------
// Clases
// class Avenger{
//   nombre:string;
//   equipo:string;
//   nombreReal:string;
//
//   puedePelear:boolean;
//   peleasGanadas:number;
//
//   constructor(nombre:string, equipo:string, nombreReal:string){
//     this.nombre = nombre;
//     this.equipo = equipo;
//     this.nombreReal = nombreReal;
//     this.puedePelear = false;
//     this.peleasGanadas = 1;
//   }
// }
//
// let antman:Avenger = new Avenger("Antman","CAP","Scott Lang");
//
// console.log(antman);
// ----------------------------------------------------------------------------
// Interfaces
// interface XMen {
//   nombre:string,
//   poder:string
// }
//
// function enviarMision(xmen:XMen){
//   console.log("Enviando a " + xmen.nombre);
// }
//
// function enviarCuartel(xmen:XMen){
//   console.log("Enviando al cuartel a " + xmen.nombre);
// }
//
// let wolverine:XMen = {
//   nombre: "Wolverine",
//   poder: "Regeneración"
// }
//
// enviarMision(wolverine);
// enviarCuartel(wolverine);
// ----------------------------------------------------------------------------
// Promesas
// let prom = new Promise(function(resolve, reject){
//   setTimeout( () => {
//     console.log("Promesa terminada");
//     // SI todo sale bien
//     // resolve();
//
//     //SI todo sale mal
//     reject();
//   }, 1000)
// });
//
// console.log("Paso1");
//
// prom.then( () => {
//   console.log("Salió bien");
// }, () => {
//   console.error("Salió mal");
// })
// ----------------------------------------------------------------------------
// Destructuración de arreglos
// let avengers:string[] = ["Thor","Hulk","IronMan"];
//
// let [thor, bruce, tony] = avengers;
// let [,, tony2] = avengers;
// console.log(thor, bruce, tony);
// console.log(tony);
// ----------------------------------------------------------------------------
// Destructuración de objetos
// let avenger = {
//   nombre: "Tony Stark",
//   clave: "Iron Man",
//   poder: "Traje inteligente"
// }
//
// let {nombre, clave, poder} = avenger;
//
// console.log(nombre, clave, poder);
// ----------------------------------------------------------------------------
// Funciones de flecha
// let superman = {
//   nombre: "Clark",
//   toString(){
//     console.log("El nombre de superman es " + this.nombre);
//   },
//   toStringLentoF(){
//     setTimeout(()=>console.log("El nombre de superman es " + this.nombre),1000)
//   },
//   toStringLento(){
//     setTimeout(function(){
//       console.log("El nombre de superman es " + this.nombre);
//     }, 1000)
//   }
// }
//
// superman.toString();
// superman.toStringLento();
// superman.toStringLentoF();
//
// let funcion = function(a){
//   return a;
// }
//
// let funcionF = a => a;
//
// console.log(funcion("normal"));
// console.log(funcionF("flecha"));
//
// let funcion2 = function(a:number, b:number){
//   return a + b;
// }
//
// let funcion2F = (a:number,b:number)=>a+b;
//
// console.log(funcion2(1,4));
// console.log(funcion2F(6,8));
//
// let funcion3F = (nombre:string) => {
//   nombre = nombre.toUpperCase();
//   return nombre;
// }
//
// console.log(funcion3F("Wilmer"));
// ----------------------------------------------------------------------------
// Parámetros obligatorios
// function activar( quien:string, objeto:string = "alarma", momento?:string){
//   let mensaje:string;
//   if (momento) {
//     console.log(`${quien} activó la ${objeto} en la ${momento}`);
//   } else {
//     console.log(`${quien} activó la ${objeto}`);
//   }
// }
//
// activar("Andrés", "alarma", "noche");
// ----------------------------------------------------------------------------
// Literales
// let nombre = "Wilmer";
// let apellido = "Córdoba";
// let edad =  32;
//
// let texto = `Hola ${nombre} ${apellido} (${edad})`;
//
// console.log(texto);
// ----------------------------------------------------------------------------
// Primera sesión Introductoria Typescript
// function saludar( nombre:string ){
//   console.log("Hola " + nombre.toUpperCase());
// }
//
// var wolverine = {
//   nombre: "Logan"
// };
//
// saludar(wolverine.nombre);
