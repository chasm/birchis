$(function() {
  var MIN_STRENGTH = 3;
  var BAR_TYPES = [
    '',
    'progress-danger',
    'progress-warning',
    'progress-info',
    'progress-success'
  ];
  
  var score = 0;
  
  var passwordsMatch = function() {
    return $('#admin_password').val() === $('#admin_password_confirmation').val();
  };
  
  var setMismatchDiv = function() {
    var div = $('#match-div');
    
    if (passwordsMatch()) {
      div.addClass('match');
      div.html('Match!');
    } else {
      div.removeClass('match');
      div.html('Mismatch!');
    }
  };
  
  var enableButton = function() {
    if (score >= MIN_STRENGTH) {
      $('#pw-quality').addClass('ok');
      $('#pw-quality').html('Password strength OK');

      if (passwordsMatch()) {
        $('#save-password').removeClass('disabled');
      } else {
        $('#save-password').addClass('disabled');
      }
      
      return true;
    } else {
      $('#save-password').addClass('disabled');
      $('#pw-quality').removeClass('ok');
      $('#pw-quality').html('Password too weak');
      return false;
    }
  };
  
  $('#admin_password').on('keyup', function(evt) {
    var strength = zxcvbn($(this).val());
    score = strength.score;
    
    setMismatchDiv();
    
    $('#pw-meter')
      .removeClass('progress-success')
      .removeClass('progress-info')
      .removeClass('progress-warning')
      .removeClass('progress-danger')
      .addClass(BAR_TYPES[score])
    
    $('#strength-meter')
      .removeClass('w-0')
      .removeClass('w-1')
      .removeClass('w-2')
      .removeClass('w-3')
      .removeClass('w-4')
      .addClass('w-' + score);
    
    $('#time-to-crack').html(strength.crack_time_display);
    
    $('#hidden-strength').val(score);
    
    enableButton();
  });
  
  $('#admin_password_confirmation').on('keyup', function(evt) {
    setMismatchDiv();
    enableButton();
  });
  
  $('#new_admin').on('submit', function() {
    console.log(enableButton());
    return enableButton();
  });
});
