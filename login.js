//Login and authentication features using firebase

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');

//Login event
btnLogin.addEventListener('click', e => {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});

//Signup event
btnSignup.addEventListener('click',e => {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});

//Logout event
btnLogout.addEventListener('click',e => {
    firebase.auth().signOut();
})

//Realtime authentication listener letting us view when login changes occur
//firebaseUser == null if no one is logged in
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    }
    else {
        console.log("Not logged in");
    }
});

