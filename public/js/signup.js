// variables declaration
const $signupUsername = document.getElementById("signupUsername");
const $signupPassword = document.getElementById("signupPassword");
const $signupBtn = document.getElementById("signupBtn");

const $logoutBtn = document.getElementById("logout");

// FOR SIGN UP
$signupBtn?.addEventListener("click", async (event) => {
  event.preventDefault();
  const username = $signupUsername?.value;
  const password = $signupPassword?.value;

  if (!username || !password) {
    return alert("Username and password must be provided");
  }

  try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data)
    // location.href = `/users/${data.id}`;
    window.location.href = "/users";

  } catch (error) {
    alert(error);
  }
});

// function to logout 
$logoutBtn?.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    const data = await response.json();
    window.location.href = "/";
  } catch (error) {
    alert(error);
  }
});

function goBack() {
  window.history.back();
}