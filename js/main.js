let boxes = document.getElementsByClassName('box');
let box = boxes[0];
let leftPosition = 0;
let topPosition = 0;
window.addEventListener('keydown' , function(e){
    
    if(e.keyCode==39){
        leftPosition+=5;
        box.style.left = leftPosition + 'px';
    }
    else if(e.keyCode==37){
        leftPosition-=5;
        box.style.left = leftPosition + 'px'
    }
    else if(e.keyCode==38){
        topPosition-=5;
        box.style.top = topPosition + 'px';
    }
    else if(e.keyCode==40){
       
        topPosition+=5;
        box.style.top = topPosition + 'px';
    }
})

window.addEventListener('keydown' , function(e){
    if(e.keyCode==13){
        const miniDiv = document.createElement('div');
        let container = document.querySelector(".container");
        miniDiv.classList.add("miniCircle");
        var leftMiniPosition =box.style.left.slice(0,box.style.left.length-2);
        let topMiniPosition = box.style.top.slice(0,box.style.top.length-2);
        miniDiv.style.left=Number(leftMiniPosition) + 50 + "px";
        miniDiv.style.top=Number(topMiniPosition) + 50 +"px";
        container.append(miniDiv);
    }
})