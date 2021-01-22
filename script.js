$(function(){


  $(window).scroll(function(){
    $('.fadeIn').each(function(){
      var $brouse= $(window).height();
      var $scrolltop= $(window).scrollTop();
      var $object= $(this).offset().top;
      if($scrolltop >= $object - $brouse + 100){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    })
  })

  $(window).on('load resize',(function(){
    if($(this).innerWidth() >= 768){
      $('.imageBig').fadeIn(2000);
      $('.imageBig-m').hide();

    }
    if($(this).innerWidth() <= 767){
      $('.imageBig-m').fadeIn(2000);
      $('.imageBig').hide();
    }
  }));

  $('.barBtn').click(function(){
    $('.global-nav').fadeIn();  
  });

  $('.hideBtn').click(function(){
    $('.global-nav').hide();
  });

});
