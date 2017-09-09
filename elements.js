 $(window).scroll(function() {
     $('#perfil').each(function() {
         var imagePos = $(this).offset().top;
         var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 400) {
             $(this).addClass("stretchRight");
         }
     });
 });
 $(window).scroll(function() {
     $('#correo').each(function() {
         var imagePos = $(this).offset().top;
         var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 400) {
             $(this).addClass("stretchRight");
         }
     });
 });
 $(window).scroll(function() {
     $('#formacion').each(function() {
         var imagePos = $(this).offset().top;
         var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 400) {
             $(this).addClass("stretchRight");
         }
     });
 });
 $(window).scroll(function() {
     $('#habilidad').each(function() {
         var imagePos = $(this).offset().top;
         var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 400) {
             $(this).addClass("stretchRight");
         }
     });
 });

 $(window).scroll(function() {
     $('#idioma').each(function() {
         var imagePos = $(this).offset().top;
         var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow + 500) {
             $(this).addClass("stretchRight");
         }
     });
 });