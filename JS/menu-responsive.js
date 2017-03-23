var contador = 1;
$(document).ready(main);
  function main(){
   $('.menu_bar').click(function(event){
     event.preventDefault()
     // $('nav').toggle();
     if(contador == 1){
       $('#menu').animate({
         left: '0'
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
