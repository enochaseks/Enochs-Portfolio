(function() {
    emailjs.init("tzQVB-3H_M_0YJ7ig"); // Replace with your actual Public Key
})();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {  // Change 'quoteForm' to 'contact-form'
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const description = document.getElementById('description').value;

        const templateParams = {
            Enoch: "Enoch", 
            from_name: name,
            name: name,
            email: email,
            mobile: mobile,
            description: description,
        };

        emailjs.send('service_irv9dvd', 'template_gflidne', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('confirmationMessage').innerText = `Thank you, ${name}! Your request has been submitted.`;
        }).catch(function(error) {  // Add this line
            console.error('EmailJS Error:', error);
            alert('Failed to send email. Please check your configuration.');
        });
    

        // Reset the form
        this.reset();
    });
});
