function make_base_auth(user,password){
	var tok = user + ':' + pass;
	var hash = Base64.encode(tok);
	return "Basic " + hash;
}

var auth = make_base_auth('manganese2010@qq.com','choutishiwo');
var url = 'https://api.doit.im/v1/tasks';

$.getJSON({url, 
	beforeSend : function(req){
		req.setRequestHeader('Authorization', auth);
	}
});