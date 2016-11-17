define(function(require,exports,module){
	var home = require('../view/home.js');
	var Index = {
		init: function(){
      $('#test1').html( home );
      this.event();
      this.show();
      this.data1();
      this.data2();

      var $imgs = $('.showImg>img');
      var $pointer = $('.showImg .slidePointer span');
      var $Apointer = $('span.pointer');
      var curIndex = 0;
      
      var inter = setInterval(function(){
          runLoop();
      },3500);

      function runLoop(){
        curIndex++;
        if ( curIndex == $imgs.length) {
          curIndex = 0;
        }
        $imgs.eq( curIndex ).stop(true,true).fadeIn().siblings('img').fadeOut();
        $pointer.eq( curIndex ).addClass('active').siblings().removeClass('active');
      }

      $pointer.on('click',function(e){
        clearInterval( inter );
        var _index = $pointer.index($(e.target));
        curIndex = _index;
        
        $imgs.eq( curIndex ).stop(true,true).fadeIn().siblings('img').fadeOut();
        $pointer.eq( curIndex ).addClass('active').siblings().removeClass('active');
        
        inter = setInterval(function(){
          runLoop();
        },3500);
      });

      $Apointer.on('click',function(e){
        clearInterval( inter );
        if(  $Apointer.index($(e.target)) == 1 ){
                runLoop();
        }else{
            curIndex--;
            if (curIndex == -1 ) {
                curIndex = $imgs.length - 1;
            }
            $imgs.eq( curIndex ).stop(true, true).fadeIn().siblings('img').fadeOut();
            $pointer.eq( curIndex ).addClass('active').siblings().removeClass('active');
        }
        inter = setInterval(function() {
            runLoop();
        },3500);
      });
		},
    event: function(){
       var $endToTop = $('.toTop');
       $(window).scroll(function(){
          if ($(window).scrollTop() > 100 ) {
              $endToTop.show();
          }else{
              $endToTop.hide();
          }
       });
       $endToTop.on('click',function(){
           if ($('html').scrollTop()) {  
               $('html').animate({ scrollTop: 0 }, 1000);  
           }else{
               $('body').animate({ scrollTop: 0 }, 1000);  
           }  
       });
    },
    show: function(){
      $('ul.tabs li').on("mouseenter",function(){
          var index = $(this).index();
          console.log(index);
          $(this).addClass('active').siblings().removeClass('active');
          $('div.route .module').eq(index).show().siblings('.module').hide();
          $('div.summary .info').eq(index).show().siblings().hide();
      });
    },
    data1: function(){
      $.ajax({
        type: 'get',
        url: '../json/home.json',
        success: function(res){
           var home1 = require('../view/home-1.js');
           $('#test1-1').html( home1({
               hot:res
           }) );

        }
      });
    },
    data2: function(){
      $.ajax({
        type: 'get',
        url: '../json/note.json',
        success: function(res){
           var home2 = require('../view/home-2.js');
           $('#test1-2').html( home2({
               note:res
           }) );

        }
      });
    }
	}
	module.exports = Index;
})