var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var v=this.innerHTML;
        makesound(v);
        vfx(v)
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    vfx(event.key);
})

function makesound(key)
{
   
   switch (key)
   {
    case "w":
        var pl=new Audio("sounds/kick-bass.mp3");
        pl.play();
        break;

        case "a":
            var pl=new Audio("sounds/snare.mp3");
            pl.play();
            break;

            case "s":
        var pl=new Audio("sounds/tom-1.mp3");
        pl.play();
        break;

        case "d":
        var pl=new Audio("sounds/tom-2.mp3");
        pl.play();
        break;

        case "j":
        var pl=new Audio("sounds/tom-3.mp3");
        pl.play();
        break;

        case "k":
        var pl=new Audio("sounds/tom-4.mp3");
        pl.play();
        break;

        case "l":
        var pl=new Audio("sounds/crash.mp3");
        pl.play();
        break;
   }

}

function vfx(x)
{
    key=document.querySelector("."+x);
    key.classList.add("pressed");
    setTimeout(function(){
key.classList.remove("pressed");
    },100)
}
