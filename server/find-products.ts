import {Products} from '../collections/products.ts';


export function findProducts(id) {

 var pro = Products.find({"category":id});
 	/*
 perro = new obj;
 
 for (var i=0; i< pro.length; i++){
  perro.name = pro[i].name;
  perro.price = pro[i].price;
  perro.tumama = pro[i].tumama;
 }
 //Leer el json y asignarlo a un objeto llamado como chingados quieras - peRro

 return peRro;
*/
 
};
