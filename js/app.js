$(document).ready(function() {
      $('#logo-btn').click(function(){
            $('#family-img').attr({
                  'src': 'images/family1.jpg',
                  'class': 'img-responsive img-thumbnail img-rounded'
            }); //end of family img attr
            $('#logo-btn').addClass('hidden');
            $('#logo').addClass('panel img-thumbnail hidden-xs');
            $('#logo-img').replaceWith('<p> <span class="label label-success">You have clicked Me! </span></p><p> <span>Background: this photo was taken in the spring of 2012 by a very talented photographer at our local community beach.</span></p>');

      }); // end of logo-btn click
}); // end doc ready