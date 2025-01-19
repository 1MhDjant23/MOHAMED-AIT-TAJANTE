
  (function(){
     emailjs.init("ZpLa3gYmNska02rpx");
  })();

  document.getElementById("contact-form").addEventListener("submit", function(event){
      event.preventDefault();
      
      emailjs.sendForm("service_g0ez80i", "template_6au3c5i", this)
        .then(function(response) {
           alert("Message Sent Successfully!");
        }, function(error) {
           alert("Failed to send message. Please try again.");
        });
  });
