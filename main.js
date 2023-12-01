
let img=document.querySelector('#img')
let front = document.querySelector('.front');
let min=1;
let max=1000;
var array = []; 
let randomNum=Math.floor(Math.random()*(max - min + 1) + min);  
for (var i=0; i<randomNum; i++) {
    array.push(Math.floor(Math.random() * (max - min) + min));
}
async function change() {
    const reponse = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${array.push(randomNum)}`);
    console.log(reponse);
    const carte = await reponse.json();
    // console.log(carte);
    // cartes.forEach(carte => {
     
        front.innerHTML=
        `  <div class="carte">
        <div class="front">
        <div class="front">
            <div class="vignette">⭐⭐⭐</div>
            <div class="deplacer">
            <img id="img" src=${carte.sprites.regular} alt="logo">
            <h1>${carte.name.fr}</h1>
            <p>"pokedexId": ${carte.pokedexId}"<br> "generation":${carte.generation} <br>"category":${carte.category} </p>
            </div> 
        </div> 
        </div>      
    </div>  
    ` 
}


// let button=document.querySelector('.button');
front.addEventListener('click',change);
  
    





    // img.addEventListener('mouseover',function(){
    //     img.innerHTML=`"https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/756/shiny.png"`
  