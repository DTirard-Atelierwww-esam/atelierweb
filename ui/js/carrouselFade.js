jQuery('document').ready(function(){
   var compteur = 0;
   var nbIma = $('li').length;
   const temps = 400;

   $('li').css('opacity','0');
   $('li').eq(0).css('opacity','1');

   $('li').on('click', function() {
      $('li').eq(compteur).animate({'opacity':'0'},temps);
      if(compteur < nbIma-1) {
         compteur++;
      } else {
         compteur = 0;
      }
      $('li').eq(compteur).animate({'opacity':'1'},temps);
   })
})
