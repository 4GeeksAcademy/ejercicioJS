import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    
    let randomNumber= Math.random()*10;
    document.querySelector("#the-excuse").innerHTML= generateExcuse()
    console.log("Hello Rigo from the console!")
      
}    
  
let generateExcuse=() =>{

    let pronoun=["A"];
    let subject=["Slow Merchant","two headed"," Loneley jogger kicked","Loneley comedian burned"];
    let action=["Threw my","pinecone yelled at","My sandwich","my car in"];
    let posestion=["computer on","my sandwich in","on the","front of"];
    let where=["the street","my house","street","the office"];

    let proIndex= Math.floor(Math.random() * pronoun.length);
    let subjIndex= Math.floor(Math.random() * subject.length);
    let actionIndex= Math.floor(Math.random() * action.length);
    let posestionIndex= Math.floor(Math.random() * posestion.length);
    let whereIndex= Math.floor(Math.random() * where.length);

    return pronoun[proIndex] + ' ' + subject[subjIndex] + ' ' + action[actionIndex] + ' ' + posestion[posestionIndex] + ' ' + where[whereIndex];

}