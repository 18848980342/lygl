define(function(require,exports,module){
	var login = require('../view/login.js');
	var Index = {
		init: function(){
			$('#test2').html( login );
			this.event();

			$('.footer-group').on('click',function(){
				$('.login-box').fadeOut();
				$('.register-box').fadeIn();
			})
		},
		event: function(){
			// 登录页面用户名，密码验证
			$('div.login-box .btn-group').on('click',function(){
				var $val1 = $('input.input-user').val();
				var $val2 = $('input.input-pass').val();
				if ($val1 == "" && $val2 == "") {
					$('.err-tip').show();
				}
				else if($val1 == "" && $val2 != ""){
					$('.err-tip-user').show();
					$('.err-tip-pass').hide();
				}
				else if($val1 != "" && $val2 == ""){
					$('.err-tip-pass').show();
					$('.err-tip-user').hide();
				}
				else if ($val1 != "" && $val2 != "") {
					$('.err-tip').hide();
				}
				else{
					$('.err-tip-user').hide();
					$('.err-tip-pass').hide();
				}

			});

			$('div.register-box .btn-group').on('click',function(){
				// 注册页面
				var $val3 = $('input.input-tel').val();
				var $val4 = $('input.verify-input').val();
				var $val5 = $('input.input-pass').val();
				var $val6 = $('span.verify-num').text();
				// 手机号验证
				if($val3 == ""){
					$('.err-tip-phone1').show();
					$('.err-tip-phone2').hide();
				}else if( $val3 != "" && !(/^(1[^012][0-9]{9})$/.test($val3)) ){
					$('.err-tip-phone2').show();
					$('.err-tip-phone1').hide();
				}else{
					$('.err-tip-phone1').hide();
					$('.err-tip-phone2').hide();
				}

				// 验证码
				if ($val4 != $val6) {
					$('.err-tip-verify').show();
				}else{
					$('.err-tip-verify').hide();
				}

				// 密码验证
				if(!($val5.length >= 6 && $val5.length <= 14) && $val5!=""){
                      $('.err-tip-pass').show();
                      $(this).focus();
				}else{
					$('.err-tip-pass').hide();
				}
			});

			// 验证码
			$('.verify-callback').on('click',function(){
				var str = '';
				for (var i = 0; i < 4; i++) {
					var num = Math.floor(Math.random()*10);
					str += num;
				}					
				$('.verify-num').text(str);
			});
		}
	}
	module.exports = Index;
})