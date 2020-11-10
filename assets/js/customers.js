let canvas;
/**@type {CanvasRenderingContext2D} */
let ctx;
let syncCounter = 0;
let back1;
let back2;
let logo;
let back1Loaded = false;
let back2Loaded = false;
let logoLoaded = false;
let textColor = "white";
let adNumber = 1;
function onload(){
    canvas = document.getElementById("adCanvas");
    ctx = canvas.getContext("2d");
    back1 = new Image (500, 330);
    back2 = new Image (500, 330);
    logo = new Image (60 , 60);
    back1.src = "/assets/images/costumers/ecowet/back1.jpg";
    back2.src = "/assets/images/costumers/ecowet/back2.jpg";
    logo.src = "/assets/images/costumers/ecowet/logo.png";

    back1.onload = () =>{
        back1Loaded = true;
        ctx.drawImage (back1,-500,0);
        console.log(back1Loaded);
        if (back2Loaded & logoLoaded)
            setInterval (animate, 50);
    }
    back2.onload = () =>{
        back2Loaded = true;
        ctx.drawImage (back2,-500,0);
        if (back1Loaded & logoLoaded)
            setInterval (animate, 20);
    }
    logo.onload = () =>{
        logoLoaded = true;
        ctx.drawImage (logo,-500,0);
        if (back1Loaded & back2Loaded)
            setInterval (animate, 20);
    }

}

function animate(){
    ctx.font = "bold 40px Arial";
    ctx.fillStyle = textColor;
    ctx.clearRect (0, 0, 500, 350);
    if (syncCounter++ == 500){
        syncCounter = 0;
        if (adNumber == 1){
            adNumber = 2;
            textColor = "yellow";
        }
        else {
            adNumber = 1;
            textColor = "white";
        }   
    }
    if (adNumber == 1){
        ctx.fillStyle = textColor;
        if (syncCounter < 50 ) {
            ctx.drawImage (back1, 0, 0);
            ctx.drawImage (back2, -500 + syncCounter * 10, 0)
        }
        else if (syncCounter >= 50 && syncCounter < 110){
            ctx.drawImage (back2, 0, 0);
            ctx.fillText("Professional", -1000 + syncCounter * 10 , 50);
        }
        else if (syncCounter >= 110 && syncCounter < 165){
            ctx.drawImage (back2, 0, 0);
            ctx.fillText("Professional", 100 , 50);
            ctx.fillText("Wet & Dry", -1500 + syncCounter * 10 , 100);
        }
        else if (syncCounter >= 165 && syncCounter < 215){
            ctx.drawImage (back2, 0, 0);
            ctx.fillText("Professional", 100 , 50);
            ctx.fillText("Wet & Dry", 135 , 100);
            ctx.fillText("Cleaning", -2000 + syncCounter * 10 , 150);
        }
        else if (syncCounter >= 215 && syncCounter < 265){
            if (syncCounter%20 == 0 ){
                if (textColor == "white")
                textColor = "red";
                else    
                textColor = "white";
            }
            ctx.drawImage (back2, 0, 0);
            ctx.drawImage (logo,2850 - syncCounter * 10 ,200);
            ctx.fillText("Professional", 100 , 50);
            ctx.fillText("Wet & Dry", 135 , 100);
            ctx.fillText("Cleaning",150, 150);
        }
        else if (syncCounter >= 265 && syncCounter < 500){
            if (syncCounter%20 == 0 ){
                if (textColor == "white")
                    textColor = "red";
                else    
                    textColor = "white";
            }
            ctx.drawImage (back2, 0, 0);
            ctx.drawImage (logo,180 ,200);
            ctx.fillText("Professional", 100 , 50);
            ctx.fillText("Wet & Dry", 135 , 100);
            ctx.fillText("Cleaning",150, 150);
        }
    }
    else{
        ctx.font = "bold 70 arial";
        if (syncCounter < 50 ) {
            ctx.drawImage (back2, 0, 0);
            ctx.drawImage (back1, -500 + syncCounter * 10, 0);
        }
        else if (syncCounter >= 50 && syncCounter < 110){
            ctx.drawImage (back1, 0, 0);
            ctx.fillText("TOO FAR?!", -1000 + syncCounter * 10 , 100);
        }
        else if (syncCounter >= 110 && syncCounter < 165){
            ctx.drawImage (back1, 0, 0);
            ctx.fillText("TOO FAR?!", 150 , 100);
            ctx.fillText("Call for Free Pick Up", -1700 + syncCounter * 10 , 170);
        }
        else if (syncCounter >= 165 && syncCounter < 215){
            ctx.drawImage (back1, 0, 0);
            ctx.fillText("TOO FAR?!", 150 , 100);
            ctx.fillText("Call for Free Pick Up", 50 , 170);
            ctx.fillText("(604) 882-2776", -2100 + syncCounter * 10 , 250);
        }
        else if (syncCounter >= 215 && syncCounter < 500){
            if (syncCounter%20 == 0 ){
                if (textColor == "yellow")
                    textColor = "darkblue";
                else    
                    textColor = "yellow";
            }
            ctx.drawImage (back1, 0, 0);
            ctx.fillText("TOO FAR?!", 150 , 100);
            ctx.fillText("Call for Free Pick Up", 50 , 170);
            ctx.fillText("(604) 882-2776",100, 250);
        }
    }
}
