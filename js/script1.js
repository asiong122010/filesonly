function DelayRedirect(event) {
  event.preventDefault(); // stop default form submission if used on <a> or <form>

  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && name && password) {
    // Optional: show loading overlay or animation here

    setTimeout(() => {
      window.location.href = "Profile.html";
    }, 2000); // 2-second delay before redirect
  } else {
    alert("Please fill in all fields!");
  }
}