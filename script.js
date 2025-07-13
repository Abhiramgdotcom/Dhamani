function showForm(type) {
  document.getElementById("donorForm").style.display = type === "donor" ? "block" : "none";
  document.getElementById("recipientForm").style.display = type === "recipient" ? "block" : "none";
}

function login(type) {
  const email = document.getElementById(`${type}Email`).value;
  const password = document.getElementById(`${type}Password`).value;

  fetch(`http://your-backend-url.com/api/${type}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Login successful!");
      // Redirect to dashboard
      window.location.href = `${type}_dashboard.html`;
    } else {
      alert("Login failed: " + data.message);
    }
  })
  .catch(err => alert("Error connecting to server."));
}
