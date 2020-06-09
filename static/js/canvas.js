let bodyCanvas = document.querySelector("canvas");
let ctx = bodyCanvas.getContext('2d');


let mouse = {
    'x':undefined,
    'y':undefined
}




window.addEventListener('click', (event)=>{
    mouse.x = event.x;
    mouse.y = event.y


    for(let i=0;i<bodyContainer.length;i++) { // check whether:
        if(mouse.x > bodyContainer[i][0]            // mouse x between x and x + width
        && mouse.x < bodyContainer[i][0] + bodyContainer[i][2]
        && mouse.y > bodyContainer[i][1]            // mouse y between y and y + height
        && mouse.y < bodyContainer[i][1] + bodyContainer[i][3]) {
            console.log(i + 'clicked')

        }
    }

})

let bodyPos = {
    'x':80,
    'y':200,
    'dx':220,
    'dy':380
}


//let lacImage = document.querySelector('#laci-head');
let bodyImage = document.querySelector('#boi').onload;
ctx.drawImage(bodyImage, bodyPos.x, bodyPos.y, bodyPos.dx, bodyPos.dy);
//const bodyImage = new Image();
//bodyImage.src = "/static/images/body/golden-necklace3-builder.png";

function drawThings(image, props) {
    let posX = props.x;
    let posY = props.y;
    let posDx = props.dx;
    let posDy = props.dy;
    ctx.drawImage(image,posX,posY,posDx,posDy);
}



let headPos = {
    'x':150,
    'y':130,
    'dx':70,
    'dy':90
}




setTimeout(()=>drawThings(bodyImage, bodyPos), 5);
//setTimeout(()=>drawThings(lacImage, headPos), 5);

let bodyArray = [bodyPos.x,bodyPos.y,bodyPos.dx,bodyPos.dy]
//let headArray = [headPos.x,headPos.y,headPos.dx,headPos.dy]

let bodyContainer = [bodyArray];