$(function () {
  $('.validateRegForm').click(function (event) {
    var firstname =  document.getElementById('registration-firstname').value;
    if (firstname == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'>Please enter first name</span>";
        return false;
    }
    var lastname =  document.getElementById('registration-lastname').value;
    if (lastname == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'>Please enter last name</span>";
        return false;
    }
    var affiliation =  document.getElementById('registration-affiliation').value;
    if (affiliation == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'>Please enter affiliation</span>";
        return false;
    }
    var position =  document.getElementById('registration-position').value;
    if (position == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'>Please enter position</span>";
        return false;
    }
    var email =  document.getElementById('registration-email').value;
    if (email == "") {
        document.getElementById('registration-status').innerHTML = "<span style='color:red'>Please enter email</span>";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('registration-status').innerHTML = "<span style='color:red'> Email format invalid </span>";
            return false;
        }
    }
    document.getElementById('registration-status').innerHTML = "Sending...";
    document.getElementById('registration-form').setAttribute('action', 'https://formspree.io/' + 'gagt2019' + '@' + 'gmail' + '.' + 'com');
    document.getElementById('registration-form').submit();
  });
});