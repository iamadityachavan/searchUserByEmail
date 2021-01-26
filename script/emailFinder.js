var email = localStorage.getItem("email");
var userData = [{
    name: "John Smith",
    age: "35",
    email: "loremipsum@dolorsit.com",
    relative1: "Jane Smith",
    relative2: "John Smith Jr"
}, {
    name: "Aditya Chavan",
    age: "26",
    email: "chavanaditya1994@gmail.com",
    relative1: "Dattaram Chavan",
    relative2: "Supriya Chavan"
}, {
    name: "John Cena",
    age: "45",
    email: "johncena@dolorsit.com",
    relative1: "Jane Cena",
    relative2: "John Cena Jr"
}, {
    name: "Tom Cruise",
    age: "50",
    email: "tomcruise@dolorsit.com",
    relative1: "Jane Cruise",
    relative2: "Tom Cruise Jr"
}];

function dataFinder() {
    var results = [];
    var userFound = false;
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].email == email) {
            results.push(userData[i]);
            userFound = true;
        }
    }
    if (userFound) {
        $(".empty-result").hide();
        $(".result-container").show();
        $("#userName").text(results[0].name);
        $("#userAge").text(results[0].age);
        $("#userEmailId").text(results[0].email);
        $("#relative1").text(results[0].relative1);
        $("#relative2").text(results[0].relative2);
    } else {
        $(".empty-result").show();
        $(".result-container").hide();
    }

}

$(document).ready(function() {
    dataFinder();
    $("[type='submit']").click(function(e) {
        e.preventDefault();
        $('.needs-validation').addClass('was-validated');
        if ($('.needs-validation')[0].checkValidity()) {
        	$('.needs-validation').removeClass('was-validated');
            email = document.getElementById("emailId").value;
            document.getElementById("emailId").value = "";
            dataFinder();
        }
    });
});