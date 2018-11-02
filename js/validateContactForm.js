$(function () {
  $('.validateContactForm').click(function (event) {
    var name =  document.getElementById('contact-name').value;
    if (name == "") {
        document.getElementById('contact-status').innerHTML = "<span style='color:red'>Please enter your name</span>";
        return false;
    }
    var email =  document.getElementById('contact-email').value;
    if (email == "") {
        document.getElementById('contact-status').innerHTML = "<span style='color:red'>Please enter your email</span>";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('contact-status').innerHTML = "<span style='color:red'> Email format invalid </span>";
            return false;
        }
    }
    var affiliation =  document.getElementById('contact-message').value;
    if (affiliation == "") {
        document.getElementById('contact-status').innerHTML = "<span style='color:red'>Please enter your message</span>";
        return false;
    }
    if (document.getElementById('contact-ok').checked != true) {
        document.getElementById('contact-status').innerHTML = "<span style='color:red'>Please agree to the data policy</span>";
        return false;
    }
    document.getElementById('contact-status').innerHTML = "Sending...";
    document.getElementById('contact-form').setAttribute('action', 'https://formspree.io/' + 'gagt2019' + '@' + 'gmail' + '.' + 'com');
    document.getElementById('contact-form').submit();
  });
});
