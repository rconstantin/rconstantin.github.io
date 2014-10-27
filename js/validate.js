 $(document).ready(function() {
      var maxChar = 128; // limit of char for text area
      $('input[name="first_name"]').click(function() {
          //var label = $(this).next();
          //var msg = "Min Length: 1 char, max 12.";
         // console.log('first_name', $(this), 'label', label);
          $('#outputFirst').attr({'class':'visible'});
          $('#outputLast').attr({'class':'hidden'});
          $('#outputEmail').attr({'class':'hidden'});
          $('#outputNote').attr({'class':'hidden'});
          //$('#outputFirst').html(msg);
          //$('#outputLast').html(); // reset
          //$('#outputEmail').html(); // reset
      }); // end click first name function

      $('input[name="last_name"]').click(function() {
          //var label = $(this).next();
         // var msg = "Last Name: Min Length 3, max 12.";
          //$('#outputLast').html(msg);
          $('#outputLast').attr({'class':'visible'});
          $('#outputFirst').attr({'class':'hidden'});
          $('#outputEmail').attr({'class':'hidden'});
          $('#outputNote').attr({'class':'hidden'});
      });

      $('input[name="email"]').click(function() {
          //var label = $(this).next();
          //var msg = "Email: will be used for future reference.";
          //$('#outputEmail').html(msg);
          $('#outputLast').attr({'class':'hidden'});
          $('#outputFirst').attr({'class':'hidden'});
          $('#outputEmail').attr({'class':'visible'});
          $('#outputNote').attr({'class':'hidden'});

      });

      $('textarea[name="note"]').click(function() {
          //var label = $(this).next();
          //var msg = "Please leave us a few kind words!";
          $('#outputLast').attr({'class':'hidden'});
          $('#outputFirst').attr({'class':'hidden'});
          $('#outputEmail').attr({'class':'hidden'});
          $('#outputNote').attr({'class':'visible'});
          $('#outputNote').html('<span class="label label-warning">Max length ' + maxChar + '!</span>');
      });
      // use keyup to count remaining allowed characters to add in text area.
      $('#inputNote').keyup(function(){
            if($('#inputNote').val().length > maxChar) {
                  // do not exceed the maxChar: using the javascript substr() 
                  // will truncate displayed text not to exceed max set
                  $('#inputNote').val($('#inputNote').val().substr(0, maxChar));
            }
            var remaining = maxChar -  $('#inputNote').val().length;
            if (remaining > 20) {
                  $('#outputNote').html('<span class="label label-success"> You have <strong>'+  remaining +'</strong> characters remaining</span>');
            }
            else if (remaining > 10) {
                  $('#outputNote').html('<span class="label label-warning"> You have <strong>'+  remaining +'</strong> characters remaining</span>');
            }
            else {
                  $('#outputNote').html('<span class="label label-danger"> You have <strong>'+  remaining +'</strong> characters remaining</span>');
            }
      }); // end of inputNode keyup

     $('input[name="checkbox"]').click(function() {
          $('#outputLast').attr({'class':'hidden'});
          $('#outputFirst').attr({'class':'hidden'});
          $('#outputEmail').attr({'class':'hidden'});
          $('#outputNote').attr({'class':'hidden'});
      });
      // FORM INPUT RANGE VALIDATION USING PLUGIN: validation.min.js
      $(function() {

        var form  = $('form');
      //  var submit  = $('#submit');
      //  var alert = $('.alert');

        // validate form
        form.validate({
          // validation rules
          rules: {
            // first name field (required , minimum length 1, max 12)
            first_name: {
              required: true,
              minlength: 1,
              maxlength: 12,
            },
            // last_name field (required , minimum length 3, max 12)
            last_name: {
              required: true,
              minlength: 3,
              maxlength: 12,
            },
            // password field (required , minimum length 6, max 12)
            password: {
              required: true,
              minlength: 6,
              maxlength: 12
            },
            // email field only required
            email: {
              required: true,
            }
          },
          ignore: ":hidden"
        });
      });

}); // end of document ready
