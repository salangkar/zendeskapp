(function() {

  return {
    events: {
      'app.activated'       : 'displayloginform',
      'click #login'        : 'loginrequest',
      'userAuthenticateRequest.done': 'loginSuccess',
  	  'userAuthenticateRequest.fail': 'loginFailed',
    },

    requests: {
      userAuthenticateRequest: function() {
        return {
          url: 'http://stage.fusemachines.com/csr/oauth/generate-token',
          type: 'POST',
          accept: 'application/json',
          content_type : 'application/x-www-form-urlencoded',
          data: {grant_type:'password',username: 'csr@test.com', password: 'csr@test.com'},
     		cors: true
        };
      }
    },

    displayloginform: function(event){
    	this.switchTo('loginpage');
    },
    loginrequest: function(){
    	this.ajax('userAuthenticateRequest');
    },
    loginSuccess: function(){
    	alert('login request sent');
    },
    loginFailed: function(){
    	alert('login failed');
    }
  };

}());
