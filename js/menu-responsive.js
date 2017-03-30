var contador = 1;
$(document).ready(main);
  function main(){
   $('.menu-res').click(function(event){
     event.preventDefault()
    //  $('#menu').toggle();
     if(contador == 1){
       $('#menu').animate({
         left: '0%'
       });
       contador = 0;
     } else {
       contador = 1;
       $('#menu').animate({
         left: '-100%'
       });
     }
   });
  };
