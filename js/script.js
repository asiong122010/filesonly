function goToOtherPage() {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const date = document.getElementById("date").value;

  if (name && password && date) {
    
    window.location.href = "Profile.html"; 
  } else {
    alert("Please fill in all fields!");
  }
}