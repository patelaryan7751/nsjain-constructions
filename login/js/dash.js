
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
document.querySelector('#btn-login').onclick = function(){
    

			
    var address1 = document.querySelector('#adress1').value;
       var address2 = document.querySelector("#adress2").value;
    var pincode=document.querySelector("#pin").value;
    if(address1!=null && address2!=null && pincode!=null && address1!="" && address2!="" && pincode!="" &&  address1!=" " && address2!=" " && pincode!=" " ){
    var pq=document.getElementById("loadar");
    pq.style.display="block";
        var hjcordiref= firebase.database().ref(`crimecredential`);
     hjcordiref.orderByChild("email").equalTo(`${sessionStorage.getItem("vemkey")}`).on("child_added", function(data){
          var newVoke = data.val();
         console.log(data.val());
         sessionStorage.setItem("name",newVoke.name);
         sessionStorage.setItem("email",newVoke.email);
         sessionStorage.setItem("phone",newVoke.phone);
         
         
         store();
         open();
         function store(){
         
         sessionStorage.setItem("adress1",address1);
         sessionStorage.setItem("adress2",address2);
         sessionStorage.setItem("pincode",pincode);
         }
         
         function open(){
          window.open('dist.html','_self');

         }
}
)}
};

document.querySelector('#btn-logout').onclick = function(){
    
     firebase.auth().signOut();


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