
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;


    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("images/404.png")
        }else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other.home.front_default;
        pokeImage(pokeImg)
        printPokeFeatures(data);

    })
}


const pokeName = document.getElementById("poke-name");
const pokeID = document.getElementById("poke-id");
const pokeType = document.getElementById("poke-type");

const printPokeFeatures = (data) => {

    pokeType.innerText = "";

    for(let i = 0; i < data.types.length; i ++) {
        const type = document.createElement("span");
        type.classList.add("pokemon__type");
        pokeType.appendChild(type);

        type.innerText = data.types[i].type.name;
    }
    
    pokeName.innerText = data.name;
    pokeID.innerText = data.id;
}


//Obtener imagen:
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}
