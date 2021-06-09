var webex;

webex = window.webex = Webex.init({
  config: {
    credentials: {
      client_id: 'C7c3f1143a552d88d40b2afff87600c366c830850231597fb6c1c1e28a5110a4f',
      redirect_uri: 'https://www.webexhcdeloitte.com',
      scope: 'spark:all spark:kms'
    }
  }
});

function login(){
     webex.authorization.initiateLogin();
}