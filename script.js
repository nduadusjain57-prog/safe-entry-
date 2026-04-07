function scrollToBooking() {
  document.getElementById("services").scrollIntoView();
}

function bookSlot() {
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  document.getElementById("confirmation").innerText =
    "✅ Booking Confirmed for " + service + " on " + date + " at " + time;
}

function triggerSOS() {
  alert("🚨 SOS ALERT SENT TO ADMIN & SECURITY!");
}

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(email === "admin" && password === "1234"){
    document.getElementById("loginStatus").innerText = "✅ Login Successful";
  } else {
    document.getElementById("loginStatus").innerText = "❌ Invalid Credentials";
  }
}