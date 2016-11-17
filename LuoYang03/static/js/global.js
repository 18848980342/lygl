define(function(require,exports,module){
    require('home.js');
    require('guide.js');
    require('login.js');
    var Index = {
        init:function(){
            setInterval(function(){
                if( $(document).scrollTop() >= 100 ){
                    $('#header').removeClass('rel').addClass('fix');
                }else{
                    $('#header').removeClass('fix').addClass('rel');
                } 
            },1);


            $('nav ul li').on('click',function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
            

            var count = 0;
            $('.icon-like').on('click',function(){
                count++;
                if (count%2 == 0) {
                    $(this).addClass('active');
                }else{
                    $(this).removeClass('active');
                }
            });
        }
    }
    module.exports = Index;
})
