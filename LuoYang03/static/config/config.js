define(function(require,exports,module){
    var all = require('../js/global.js');
	var home = require('../js/home.js');
	var login = require('../js/login.js');
    var guide = require('../js/guide.js');
    var Index = {
        init:function(){
            all.init();
            home.init();
            login.init();
            guide.init();
        }
    }
    module.exports = Index;
})
