var config = {
  apiKey: "AIzaSyBMCLAKs1db3MVLIejvnvoCnefZU__Vfx8",
    authDomain: "ns-jain-web.firebaseapp.com",
    databaseURL: "https://ns-jain-web-default-rtdb.firebaseio.com",
    projectId: "ns-jain-web",
    storageBucket: "ns-jain-web.appspot.com",
    messagingSenderId: "879442465206",
    appId: "1:879442465206:web:5cca413eee80c65833f117",
    measurementId: "G-ZJVW3LM975"
  };
     firebase.initializeApp(config);
    console.log(firebase);
firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(user){
       var user = firebase.auth().currentUser;
       console.log(user);
       if(user.emailVerified!=true)
           {
       user.sendEmailVerification().then(function() {
            
   var emailVerified = user.emailVerified;

        
        window.open('verify-email.html','_self');
           
    
}).catch(function(error) {
  // An error happened.
});
           }
           var cliref = firebase.database().ref('crimecredential/');
       cliref.orderByChild("email").equalTo(user.email).on("value", function(data){
          
           if(data.val()){
               window.open('dash.html','_self');
}
           else{
               window.open('database.html','_self');
           }

   } );
   }
    else{
    window.open('index1.html','_self');
    }
});