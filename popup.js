
function popId(id)

{
       let selec = id;
  
       document.getElementById("pop").style.display="block";
       document.getElementById("pop1").src=document.getElementById(selec).src;
       document.getElementById("pop1").style.transition = "opacity 1s ease";
       setTimeout(() => {
           document.getElementById("pop1").style.opacity = "1";
       }, 15);
  
  
       var sombra = document.getElementById('back');
       sombra.style.display="block";
  
   return selec;
}
 

function popClose(selec)
{
  
        var selec = 0;
  
        var sombra = document.getElementById('back');
        sombra.style.display="none";
  
        document.getElementById("pop").style.display="none";
        document.getElementById("pop1").style.opacity="0";
        document.getElementById("pop1").style.transition = "opacity 0s ease";
        setTimeout(() => {
             document.getElementById("pop1").src = "";
        }, 100);  
  
  
    return sombra;
}
