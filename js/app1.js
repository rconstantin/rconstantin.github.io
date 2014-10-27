$(document).ready(function() {
      $('#m1').hover(function(){
            $('#m1').attr({
                  'src': 'images/macro1.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m1_out').removeClass('hidden');

            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            // in custom.less used media screen to set the appropriate background color: lightblue: md, beige sm & white xs 
            // only md size accomodates 3 pics per row
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') { // lightblue == 'rgb(173, 216, 230)'
                  $('#m2').css({'opacity':'0.3'});
                  $('#m4').css({'opacity':'0.3'});
            }
            else {  // for the smaller screen sizes each row contains 2 images in the project.html page
                  $('#m2').css({'opacity':'0.3'});
                  $('#m3').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':even').css('backgroundColor','yellow');
      }, function(){
            $('#m1').attr({
                  'src': 'images/macro1.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m2').css({'opacity':'1'});
                  $('#m4').css({'opacity':'1'});
            }
            else {  // for the smaller screen sizes each row contains 2 images in the project.html page
                  $('#m2').css({'opacity':'1'});
                  $('#m3').css({'opacity':'1'});
            }
            $('#m1_out').addClass('hidden');
            $('#desc p').filter(':even').css('backgroundColor','none');
      }); // end of  hover

      $('#m2').hover(function(){
            $('#m2').attr({
                  'src': 'images/macro2.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m2_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m1').css({'opacity':'0.3'});
                  $('#m3').css({'opacity':'0.3'});
                  $('#m5').css({'opacity':'0.3'});
            }
            else {
                  $('#m1').css({'opacity':'0.3'});
                  $('#m4').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':odd').css('backgroundColor','yellow');
      }, function(){
            $('#m2').attr({
                  'src': 'images/macro2.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m1').css({'opacity':'1'});
                  $('#m3').css({'opacity':'1'});
                  $('#m5').css({'opacity':'1'});
            }
            else {
                  $('#m1').css({'opacity':'1'});
                  $('#m4').css({'opacity':'1'});
            }

            $('#m2_out').addClass('hidden');
            $('#desc p').filter(':odd').css('backgroundColor','none');
      }); // end of  hover

      $('#m3').hover(function(){
            $('#m3').attr({
                  'src': 'images/macro3.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m3_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m2').css({'opacity':'0.3'});
                  $('#m6').css({'opacity':'0.3'});
            }
            else {
                  $('#m1').css({'opacity':'0.3'});
                  $('#m4').css({'opacity':'0.3'});
                  $('#m5').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':even').css('backgroundColor','yellow');
      }, function(){
            $('#m3').attr({
                  'src': 'images/macro3.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m2').css({'opacity':'1'});
                  $('#m6').css({'opacity':'1'});
            }
            else {
                  $('#m1').css({'opacity':'1'});
                  $('#m4').css({'opacity':'1'});
                  $('#m5').css({'opacity':'1'});

            }
            $('#m3_out').addClass('hidden');
            $('#desc p').filter(':even').css('backgroundColor','none');
      }); // end of  hover

      $('#m4').hover(function(){
            $('#m4').attr({
                  'src': 'images/macro4.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m4_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m1').css({'opacity':'0.3'});
                  $('#m5').css({'opacity':'0.3'});
                  $('#m7').css({'opacity':'0.3'});
            }
            else {
                  $('#m2').css({'opacity':'0.3'});
                  $('#m3').css({'opacity':'0.3'});
                  $('#m6').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':odd').css('backgroundColor','yellow');
      }, function(){
            $('#m4').attr({
                  'src': 'images/macro4.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m1').css({'opacity':'1'});
                  $('#m5').css({'opacity':'1'});
                  $('#m7').css({'opacity':'1'});
            }
            else {
                 $('#m2').css({'opacity':'1'});
                  $('#m3').css({'opacity':'1'});
                  $('#m6').css({'opacity':'1'});
            }
            $('#m4_out').addClass('hidden');
            $('#desc p').filter(':odd').css('backgroundColor','none');
      }); // end of  hover

      $('#m5').hover(function(){
            $('#m5').attr({
                  'src': 'images/macro5.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m5_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m2').css({'opacity':'0.3'});
                  $('#m4').css({'opacity':'0.3'});
                  $('#m6').css({'opacity':'0.3'});
                  $('#m8').css({'opacity':'0.3'});
            }
            else {
                  $('#m3').css({'opacity':'0.3'});
                  $('#m6').css({'opacity':'0.3'});
                  $('#m7').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':even').css('backgroundColor','yellow');
      }, function(){
            $('#m5').attr({
                  'src': 'images/macro5.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m2').css({'opacity':'1'});
                  $('#m4').css({'opacity':'1'});
                  $('#m6').css({'opacity':'1'});
                  $('#m8').css({'opacity':'1'});
            }
            else {
                 $('#m3').css({'opacity':'1'});
                  $('#m6').css({'opacity':'1'});
                  $('#m7').css({'opacity':'1'});
            }
            $('#m5_out').addClass('hidden');
            $('#desc p').filter(':even').css('backgroundColor','none');
      }); // end of  hover

     $('#m6').hover(function(){
            $('#m6').attr({
                  'src': 'images/macro6.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m6_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m3').css({'opacity':'0.3'});
                  $('#m5').css({'opacity':'0.3'});
                  $('#m9').css({'opacity':'0.3'});
            }
            else {
                  $('#m4').css({'opacity':'0.3'});
                  $('#m5').css({'opacity':'0.3'});
                  $('#m8').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':odd').css('backgroundColor','yellow');
      }, function(){
            $('#m6').attr({
                  'src': 'images/macro6.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m3').css({'opacity':'1'});
                  $('#m5').css({'opacity':'1'});
                  $('#m9').css({'opacity':'1'});
            }
            else {
                  $('#m4').css({'opacity':'1'});
                  $('#m5').css({'opacity':'1'});
                  $('#m8').css({'opacity':'1'});

            }
            $('#m6_out').addClass('hidden');
            $('#desc p').filter(':odd').css('backgroundColor','none');
      }); // end of  hover

     $('#m7').hover(function(){
            $('#m7').attr({
                  'src': 'images/macro7.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m7_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m4').css({'opacity':'0.3'});
                  $('#m8').css({'opacity':'0.3'});
            }
            else {
                  $('#m5').css({'opacity':'0.3'});
                  $('#m8').css({'opacity':'0.3'});
                  $('#m9').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':even').css('backgroundColor','yellow');
      }, function(){
            $('#m7').attr({
                  'src': 'images/macro7.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m4').css({'opacity':'1'});
                  $('#m8').css({'opacity':'1'});
            }
            else {
                  $('#m5').css({'opacity':'1'});
                  $('#m8').css({'opacity':'1'});
                  $('#m9').css({'opacity':'1'});
            }
            $('#m7_out').addClass('hidden');
            $('#desc p').filter(':even').css('backgroundColor','none');
      }); // end of  hover

     $('#m8').hover(function(){
            $('#m8').attr({
                  'src': 'images/macro8.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m8_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m5').css({'opacity':'0.3'});
                  $('#m7').css({'opacity':'0.3'});
                  $('#m9').css({'opacity':'0.3'});
            }
            else {
                  $('#m6').css({'opacity':'0.3'});
                  $('#m7').css({'opacity':'0.3'});
            }
            $('#desc p').filter(':odd').css('backgroundColor','yellow');
      }, function(){
            $('#m8').attr({
                  'src': 'images/macro8.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m5').css({'opacity':'1'});
                  $('#m7').css({'opacity':'1'});
                  $('#m9').css({'opacity':'1'});
            }
            else {
                  $('#m6').css({'opacity':'1'});
                  $('#m7').css({'opacity':'1'});
            }
            $('#m8_out').addClass('hidden');
            $('#desc p').filter(':odd').css('backgroundColor','none');
      }); // end of  hover

     $('#m9').hover(function(){
            $('#m9').attr({
                  'src': 'images/macro9.jpg',
                  'class': 'img-responsive img-circle img-thumbnail',
            }); //end of apple img attr
            $('#m9_out').removeClass('hidden');
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m6').css({'opacity':'0.3'});
                  $('#m8').css({'opacity':'0.3'});
            }
            else {
                   $('#m7').css({'opacity':'0.3'});               
            }
            $('#desc p').filter(':even').css('backgroundColor','yellow');
      }, function(){
            $('#m9').attr({
                  'src': 'images/macro9.jpg',
                  'class': 'img-responsive  img-rounded img-thumbnail'
            }); //end of apple img attr
            // the following if condition succeed for medium size screen where each row consists of 3 images in the project.html page
            if ($('.container').css('backgroundColor') == 'rgb(173, 216, 230)') {
                  $('#m6').css({'opacity':'1'});
                  $('#m8').css({'opacity':'1'});
            }
            else {
                   $('#m7').css({'opacity':'1'});
            }
            $('#m9_out').addClass('hidden');
            $('#desc p').filter(':even').css('backgroundColor','none');
      }); // end of  hover

}); // end doc ready

