$(document).ready(function() {
    $("[type='submit']").click(function(e) {
        e.preventDefault();
        $('.needs-validation').addClass('was-validated');
        if ($('.needs-validation')[0].checkValidity()) {
        	localStorage.setItem("email", document.getElementById("emailId").value);
        	document.getElementById("emailId").value = "";
          $('.needs-validation').submit();
        }
    });
});