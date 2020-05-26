<!--index-->



('.quickview__icon').click(function (){
    ('footer').css('display', 'none');
    ('.popup-item').css({'opacity': '1', 'visibility': 'visible'});
  });
  
  //Popup close
  ('#closeIcon').click(function() {
    ('.popup-item').css({
      'opacity': '0',
      'visibility': 'hidden'});
  })