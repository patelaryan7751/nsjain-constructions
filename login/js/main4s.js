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

var hjcordiref= firebase.database().ref(`${sessionStorage.getItem("uids")}`);
     hjcordiref.orderByChild('roomname').on("child_added", function(data){
          var newVoke = data.val();
         console.log(data.val());
         var html = "";
          html +=`<div class="col-lg-4 col-sm-12 mt-4" >
      
      <div class="card-body"  style="background-color: aliceblue">
<div class="row">
<div class="col-5">
        <h5 class="card-field card-title" style="font-weight:700;">${newVoke.roomname}</h5>
</div>
<div class="col-7" style="margin-left=90%">
       <img src="images/assigno.png" class="img-fluid" width="100px" height="25px"> 
</div>
       </div> 
          


<a  style="display: inline-block" href="${newVoke.link}" class="mt-2 btn btn-success">Open</a>
      </div>
    </div>`
          document.getElementById("classe").innerHTML += html;
        
     });

var us=document.getElementById("user");
us.textContent=sessionStorage.getItem("emails");
document.getElementById("join").addEventListener("click",joinf);
function joinf(){
    
     window.open('joinclass.html','_self');

}

document.getElementById("log").addEventListener("click",logo);
function logo(){
    
     firebase.auth().signOut();

}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(!user){

       window.open('index1.html','_self');
   } 
   
    
});
