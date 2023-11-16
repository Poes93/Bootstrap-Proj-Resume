function sendMail(contactForm) {
    emailjs.send("gmail", "service_e6pfzhk", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Your message was not sent, please try again!");
        }
    );
}