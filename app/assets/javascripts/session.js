$(function() {
  $('#toggle-password-field').on('click', function(evt) {
    if ($(this).hasClass('btn-danger')) {
      $(this).html('Hide Password');
      
      $(this).removeClass('btn-danger');
      $(this).addClass('btn-success');
      
      $('#password').attr('type','text');
    } else {
      $(this).html('Show Password');
      
      $(this).removeClass('btn-success');
      $(this).addClass('btn-danger');
      
      $('#password').attr('type','password');
    }
    
    return false;
  });
});
