import React from "react";
export default function Fruitlist() {
const fruits = [ 'mango','Apple',"Banna","grapes","potatto"] 

  return <div>
    <h2>list of fruits</h2>
     {
        fruits.map((fruit)=> <li key={Math.random()}> {fruit}</li>)
     }
    </div>;
}
