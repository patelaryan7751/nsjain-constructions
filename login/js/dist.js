(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
        e.preventDefault();
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);


taluk();
var inittaluk="no";
var initjun="no";
var initarea="no";
function taluk(){
   var talukref= firebase.database().ref("TALUK");
    talukref.orderByChild("taluk").on("child_added", function(data){
       console.log(data.val());
        document.getElementById("taluk").style.display="block";
        var newVoke=data.val();
         var html = "";
          html +=`<option value="${newVoke.taluk}">${newVoke.taluk}</option>`;
        
      document.getElementById("taluk").innerHTML += html;  
    });
   var myvar=setInterval(function(){
    if(document.getElementById("taluk").style.display=="block"){
        junction();
        function junction(){
            if(inittaluk!=document.getElementById("taluk").value){
                inittaluk=document.getElementById("taluk").value;
           console.log(document.getElementById("taluk").value);
                sessionStorage.setItem("taluk",document.getElementById("taluk").value);
                jcall();
                function jcall(){
                    
                    if(document.getElementById("taluk").value!="Select Taluk"){
                        document.getElementById("junction").innerHTML ="";
                        document.getElementById("junction").innerHTML ="<option>Select Junction</option>";
            var junref= firebase.database().ref(`TALUK/${document.getElementById("taluk").value}/JUNCTION`);
    junref.orderByChild("junction").on("child_added", function(data){
       console.log(data.val());
        document.getElementById("junction").style.display="block";
        var newVoke=data.val();
         var html = "";
          html +=`<option value="${newVoke.junction}">${newVoke.junction}</option>`;
        
      document.getElementById("junction").innerHTML += html;  
    }); 
                }
                }
                var myvar2=setInterval(function(){
                    area();
                    function area(){
                                    if(initjun!=document.getElementById("junction").value){
                initjun=document.getElementById("junction").value;
           console.log(document.getElementById("junction").value);
                                                        sessionStorage.setItem("junction",document.getElementById("junction").value);
                acall();
                    function acall(){
                        if(document.getElementById("junction").value!="Select Junction"){
                            document.getElementById("area").innerHTML ="";
                            document.getElementById("area").innerHTML ="<option>Select Area</option>";
            var junref= firebase.database().ref(`TALUK/${document.getElementById("taluk").value}/JUNCTION/${document.getElementById("junction").value}/AREA`);
    junref.orderByChild("area").on("child_added", function(data){
       console.log(data.val());
        document.getElementById("area").style.display="block";
        var newVoke=data.val();
         var html = "";
          html +=`<option value="${newVoke.area}">${newVoke.area}</option>`;
        
      document.getElementById("area").innerHTML += html;  
    }); 
                }
                    var myvar3=setInterval(function(){
                        price();
                        function price(){
                            if(initarea!=document.getElementById("area").value){
                                initarea=document.getElementById("area").value;
           console.log(document.getElementById("area").value);
        sessionStorage.setItem("area",document.getElementById("area").value);
        pcall();
            function pcall(){
                
                if(document.getElementById("area").value!="Select Area"){
                     document.getElementById("price").innerHTML ="";
            var arearef= firebase.database().ref(`TALUK/${document.getElementById("taluk").value}/JUNCTION/${document.getElementById("junction").value}/AREA/`);
    arearef.orderByChild("area").equalTo(`${document.getElementById("area").value}`).on("child_added", function(data){
       console.log(data.val());
        
        document.getElementById("price").style.display="block";
        var newVoke=data.val();
        sessionStorage.setItem("price",newVoke.price);
         var html = "";
          html +=`<center><h3 class="txt1">Price: ${newVoke.price}</h3></center>`;
        
      document.getElementById("price").innerHTML += html;  
    }); 
                
            }
                                
                        }
                        }
                        }
                        
                    },700);     
                        
                        
                    }
                    }
                    }
                    
                    },700);
                
            
    }
    }
    }
    },700);
}


document.querySelector('#btn-login').onclick = function(){
    

			
    var taluk = document.querySelector('#taluk').value;
    var junction = document.querySelector('#junction').value;
    var area = document.querySelector('#area').value;
       //var address2 = document.querySelector("#adress2").value;
   // var pincode=document.querySelector("#pin").value;
    if(taluk!="Select Taluk" && junction!="Select Junction" && area!="Select Area"){
    var pq=document.getElementById("loadar");
    pq.style.display="block";
      //  var hjcordiref= firebase.database().ref(`crimecredential`);
    // hjcordiref.orderByChild("email").equalTo(`${sessionStorage.getItem("vemkey")}`).on("child_added", function(data){
         // var newVoke = data.val();
        // console.log(data.val());
        // sessionStorage.setItem("name",newVoke.name);
        // sessionStorage.setItem("email",newVoke.email);
        // sessionStorage.setItem("phone",newVoke.phone);
         
         
         store();
        // open();
         function store(){
         console.log(taluk);
             open();
         //sessionStorage.setItem("adress1",address1);
        // sessionStorage.setItem("adress2",address2);
        // sessionStorage.setItem("pincode",pincode);
         }
         
         function open(){
          window.open(`https://pages.razorpay.com/pl_GQsaUWO7QSjzqs/view?amount=${sessionStorage.getItem("price")}&&email=${sessionStorage.getItem("vemkey")}&&phone=${sessionStorage.getItem("phone")}&&name=${sessionStorage.getItem("name")}&&taluk=${sessionStorage.getItem("taluk")}&&junction=${sessionStorage.getItem("junction")}&&area=${sessionStorage.getItem("area")}`,'_self');

         }
}
}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(!user){
var pq=document.getElementById("loadar");
    pq.style.display="none";
       window.open('index.html','_self');
   } 
    else{
        
   
    
         var user = firebase.auth().currentUser;
       console.log(user.email);
       sessionStorage.setItem("vemkey",user.email);

    
    


        
    }
    
});