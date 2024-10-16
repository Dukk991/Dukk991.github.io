function mysteryButton() {
    alert("This button does nothing");
}

async function fetchMonInfo(){

    try{
        const monName = document.getElementById("monName").value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${monName}`);

        if(!res.ok){
            throw new Error("Could not fetch");
        }

        const data = await res.json();
        
        const monSprite = data.sprites.front_default;
        const img = document.getElementById("monSprite");

        img.src = monSprite;
        img.style.display = "block";
        img.style.width = "500px";
        img.style.border = "2px solid black";
        img.style.background = "white";


    }
    catch(error){
        console.error(error);
        const img = document.getElementById("monSprite");
        img.src = "error-803716_1280.webp";
        img.style.display = "block";
        img.style.width = "300px";
        alert("Error: not a real pokemon name");
    }
}

function clockUpdate() {
    
    const time = new Date();

    const hours = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);

    const digitalClock = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = digitalClock;
}

clockUpdate();
setInterval(clockUpdate, 1000);