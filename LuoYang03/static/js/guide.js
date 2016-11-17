define(function(require,exports,module){
	var guide = require('../view/guide.js');
	var Index = {
		init: function(){
			$('#test3').html( guide );
		}
	}
	module.exports = Index;
})