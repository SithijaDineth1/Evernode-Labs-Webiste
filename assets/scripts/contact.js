// ============ Gmail SMTP service ============== //

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputTopic = document.getElementById("topic");
const inputMessage = document.getElementById("message");
const form = document.getElementById("form");
const errorEmail = document.getElementById("errorEmail");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  //togglePopup();
});

function validateForm() {
  const customerEmail = inputEmail.value.trim();
  const customerMessage = inputMessage.value.trim();

  if (customerEmail === "" || customerMessage === "" || !isEmail(customerEmail) || customerMessage === "") {
    if (customerEmail === "") {
      errorEmail.innerText = "Please Enter your Email";
    } else if (!isEmail(customerEmail)) {
      errorEmail.innerText = "Invalid Email Address";
    } else {
      errorEmail.innerText = "";  
    }

    if (customerMessage === "") {
      errorMessage.innerText = "Please Enter your Message";
    } else if (customerMessage.length > 750) {
      errorMessage.innerText = `Charactor Limit 750 Exceeded: ${customerMessage.length}/750`;
    } else {
      errorMessage.innerText = "";
    }
  } 
  else {
    console.log("good");
    errorEmail.innerText = "";
    errorMessage.innerText = "";
    sendmessage();
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function sendmessage() {

  Email.send({
    SecureToken: "1566cad4-8fc9-4ea8-9d65-212dd108bb5c",
    To: "evernodelabs@gmail.com",
    From: "evernodelabs@gmail.com",
    Subject: `Que: ${inputTopic.value}`,
    Body: `
      <h1>Customer Contact Message</h1>
      <br><br>
      <p>
      Customer Name : ${inputName.value}<br>
      Customer E-Mail : ${inputEmail.value}<br>
      Customer Topic : ${inputTopic.value}<br>
      Customer Message : ${inputMessage.value}<br>
      </p>
    `,
  }).then((data) => {
    togglePopup();    
  });

}


// ============ Popup Dialog ============== //

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
  form.reset();
}