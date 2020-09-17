

//Login Button Click
var login = document.getElementById("login");
login && login.addEventListener("click", function (e) {
    closeMenu(e);
    openLogin(e);
});

// Start message
var messageBtn = document.getElementById("start-message");
messageBtn && messageBtn.addEventListener("click", function(e){
    openMobileForm(e);
})

var mobileSubmitBtn = document.getElementById("mobile-submit");
mobileSubmitBtn  && mobileSubmitBtn.addEventListener("click", function(e){
    closeMobile(e);
    openVerifyPage(e);
})


// var verifyBtn = document.getElementById("verify-submit");
// verifyBtn  && verifyBtn.addEventListener("click", function(e){
//     closeVerifyPage(e);
// })



var loginDesktop = document.getElementById("login-desktop");
loginDesktop && loginDesktop.addEventListener("click", function (e) {
    openLogin(e);
});

// Mobile close

var xMobile = document.getElementById("x-mobile");
xMobile && xMobile.addEventListener("click", function (e) {
    closeMobile(e);
});

// Verify Close
var xVerify = document.getElementById("x-verify");
xVerify && xVerify.addEventListener("click", function (e) {
    closeVerifyPage(e);
});

//Login close
var x = document.getElementById("x");
x && x.addEventListener("click", function (e) {
    closeLogin(e);
});

//signup close
var xSignup = document.getElementById("x-signup");
xSignup && xSignup.addEventListener("click", function (e) {
    closeSignup(e);
});

//Signup Button Click
var signup = document.getElementById("signup");
signup && signup.addEventListener("click", function (e) {
    closeMenu(e);
    openSignup(e);
});
const callToAction = document.getElementById("signup-desktop");
callToAction && callToAction.addEventListener("click", function (e) {
    openSignup(e);
});

var signupMain = document.getElementById("signup-main");
signupMain && signupMain.addEventListener("click", function (e) {
    openSignup(e);
});
// Toggle Menu
var ham = document.getElementById("ham");
ham && ham.addEventListener("click", function (e) {
    openMenu(e);
});

var xMenu = document.getElementById("x-menu");
xMenu && xMenu.addEventListener("click", function (e) {
    closeMenu(e);
});


var mobileCover = document.getElementById("mobile-cover");
mobileCover && mobileCover.addEventListener("click", function (e) {
    closeMenu(e);
});

//Open signup
var signupLink = document.getElementById("signup-link");
signupLink && signupLink.addEventListener("click", function (e) {
    closeLogin(e);
    openSignup(e);
})

var loginLink = document.getElementById("login-link");
loginLink && loginLink.addEventListener("click", function (e) {
    closeSignup(e);
    openLogin(e);
})


// Functions
function openMobileForm(e){
    e.preventDefault();
    document.getElementById("mobile-page").classList.add("show");
    document.getElementById("x-mobile").style.display = "block";
}

function openVerifyPage(e){
    e.preventDefault();
    document.getElementById("verify-page").classList.add("show");
    document.getElementById("x-verify").style.display ="block";
}

function openSignup(e) {
    e.preventDefault();
    document.getElementById("signup-page").classList.add('show');
    document.getElementById("x-signup").style.display = "block";
}

function openLogin(e) {
    e.preventDefault();
    document.getElementById("login-page").classList.add('show');
    document.getElementById("x").style.display = "block";
}

function openMenu(e) {
    e.preventDefault();
    document.getElementById("mobile-cover").classList.add('show');
    document.getElementById("mobile-menu").classList.add('show');
    document.getElementById("x-menu").style.display = "block";
}

function closeSignup(e) {
    e.preventDefault();
    document.getElementById("signup-page").classList.remove('show');
    document.getElementById("x-signup").style.display = "none";
}

function closeLogin(e) {
    e.preventDefault();
    document.getElementById("login-page").classList.remove('show');
    document.getElementById("x").style.display = "none";
}
function closeMenu(e) {
    e.preventDefault();
    document.getElementById("mobile-cover").classList.remove('show');
    document.getElementById("mobile-menu").classList.remove('show');
    document.getElementById("x-menu").style.display = "none";
}

function closeMobile(e) {
    e.preventDefault();
    document.getElementById("mobile-page").classList.remove('show');
    document.getElementById("x-mobile").style.display = "none";
}

function closeVerifyPage(e){
    e.preventDefault();
    document.getElementById("verify-page").classList.remove("show");
    document.getElementById("x-verify").style.display ="none";
}