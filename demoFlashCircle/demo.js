window.onload = function(){
    var box = document.getElementById('box-0');
    for(var i =1; i<=200; i++){
        var cloneBox = box.cloneNode(true);
        cloneBox.setAttribute('id','box-'+i);
        box.parentNode.appendChild(cloneBox);
        cloneBox.style.top =Math.floor(Math.random(10,200)*320)+"px";
        cloneBox.style.left =Math.floor(Math.random(10,250)*750)+"px";
        cloneBox.style.animationDuration=Math.floor(Math.random(0.1,30)*15)+"s";
        cloneBox.style.backgroundColor="#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
        cloneBox.style.transform="scale("+Math.ceil(Math.random()*4)+")";    
    }
}