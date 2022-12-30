/**
  *   @author Didier Tirard
  *   @version 2.2
  */

var newPos = 0;
var largeur = 300; // dimension des images affichées
var cycle = 0;


jQuery('document').ready(function($) {
   var images = ['un.png','deux.png','trois.png','quatre.png','cinq.png'];
   var nbImages = images.length;
   var dimUl = largeur*nbImages;
   var ease = 'linear';
   var duration = 500;
   var index = 0;
   var avance;
   var imageMove = 0;
   var imageDroite;
   var init = false;




   // Init <ul><li></li></ul>
   for(let i=0; i<nbImages; i++) {
      $('.galerie ul').append(`<li><img src="imagesContenu/${images[i]}"></li>`);
   };

   // css
   $('img').css('width',largeur+'px');
   $('.fenetre').css('width',largeur+'px');
   $('.before').css('opacity',0);


   /*
      Avancer : flèche droite
      Déplacer la galerie et déplacer à droite l'image après affchage
   */
   $('.flecheAv').on('click',function() {
      if(avance === undefined) {avance = true;}

      if(!avance && index === 0) {cycle--;}
      if(avance === false) { index = imageMove; ++cycle;avance = true;}

      if ((index%nbImages % nbImages) === 0) {
         // console.log('augmenter');
         cycle++;
      }

      newPos -= largeur;

      $('.galerie ul').animate({'left':newPos+'px'},duration,ease,function() {

         $('li').eq(index).css('translate',dimUl*cycle+'px');
         imageDroite = index;
         if(index < nbImages-1) {
            index++;
         } else {
            index = 0;
         }
      });

   })

   $('.flecheArr').on('click',function() {
      if(avance === undefined || avance === true) {

         avance = false;

         if (index != 0) {
            index = nbImages-index;
            cycle--;
         } else {
            imageMove = (nbImages-1)-index;
         }



      }

      if (avance === false) {
         imageMove = (nbImages-1)-index;
      }


      if ((index%nbImages) === 0) {
         cycle--;
      }

      newPos += largeur;

      $('li').eq(imageMove).css('translate',dimUl*cycle+'px');

      $('.galerie ul').animate({'left':newPos+'px'},duration,ease,function() {
         // console.log('index : ',index);

         if(index < nbImages-1) {
            index++;
         } else {
            index = 0;
         }

      });


   })


})

// (function($) {
//     $.fn.debug = function() {
//         console.log('debug');
//     };
// })(jQuery);
