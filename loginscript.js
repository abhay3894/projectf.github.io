function signUp(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    alert("registered successfully");
}



function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
      
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    alert("login successfully");
    
}


function signOut(){
    
    auth.signOut();
    alert("LogOut successfully");
    
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var email = user.email;
        if (window.location.href.indexOf("index.html") == -1) {
            window.location.href = "index.html";
        }
    } else {
        
        if (window.location.href.indexOf("login.html") == -1) {
            window.location.href = "login.html";
        }
    }
})





