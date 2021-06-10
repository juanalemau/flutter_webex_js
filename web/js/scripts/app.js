var webex;


// environment.
let redirect_uri;

// OAuth section
redirect_uri = `${window.location.protocol}//${window.location.host}`;

if (window.location.pathname) {
   redirect_uri += window.location.pathname;
}

console.log(redirect_uri);

webex = window.webex = Webex.init({
  config: {
    credentials: {
      client_id: 'C2e6d84595dbb7580fe92dfe73f88585f8b457251c3ecd852d2b01b8a00f8e1b2',
      redirect_uri: 'http://127.0.0.1:8080/',
      scope: 'spark:all spark:kms'
    }
  }
});

function login(){
     webex.authorization.initiateLogin();
}




