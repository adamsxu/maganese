function make_base_auth(user,pass){
	var tok = user + ':' + pass;
	var hash = Base64.encode(tok);
	return "Basic " + hash;
}

var	doit_username = localStorage.username;
var doit_password = localStorage.password;
var auth = make_base_auth(doit_username, doit_password);
var url = 'https://api.doit.im/v1/settings';

$(document).ready(function() {
	if (localStorage.length==0) {$("#userinfo").append('<p>Loading user information...</p>')} else{
$.ajax({
	url: url,
	method: 'GET',
	beforeSend: function(req){
		req.setRequestHeader('Authorization', auth);
	},
	dataType: "json",
	success: function(data){
		$('#userinfo').append("<p>You've logged in as:"+data.username+'<br /><button type="button" id="clear">Clear</button></p>' );
	},
	error: function(){
		$('#userinfo').append('<p>Username or password wrong</p>');
	}
});
};
});

$(document).ready(function() {
	$('#clear').click(localStorage.clear());
});
