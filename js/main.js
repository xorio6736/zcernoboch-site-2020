/*jslint devel: true*/
/* JavaScript */
/* Contact Us Page */
/* Function that validates E-mail */
function validateEmail(mail) {
    "use strict";
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

function validate() {
    "use strict";
    var name = document.forms.myForm.fname.value,
        surname = document.forms.myForm.lname.value,
        mail = document.forms.myForm.email.value,
        textarea = document.forms.myForm.comments.value;
    
    /* Checks if they're empty */
    if ((name === "") || (surname === "") || (textarea === "") || (mail === "")) {
        alert("Please fill in all required(*) fields");
        return false;
    }
    /* If mail not like function */
    if (!validateEmail(mail)) {
        alert(mail + " is in incorrect e-mail format");
        return false;
    }
    /* If they're all filled in properly */
    if ((name) && (surname) && (textarea) && (mail)) {
        return true;
    }
}

/* Hamburger Menu */
function toggleMenu() {
    "use strict";
    let menu = document.querySelector(".iconMenu"); /* Finds class .iconMenu */
    menu.classList.toggle("toggleCls"); /* Adds class .toggleCls to it */
}