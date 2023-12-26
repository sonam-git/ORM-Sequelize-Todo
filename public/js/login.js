// FOR LOGIN
const $loginUsername = document.getElementById("loginUsername");
const $loginPassword = document.getElementById("loginPassword");
const $loginBtn = document.getElementById("loginBtn");

$loginBtn?.addEventListener("click", async (event) => {
  event.preventDefault();
  const loginUsername = $loginUsername?.value.trim();
  const loginPassword = $loginPassword?.value.trim();

  if (!loginUsername || !loginPassword) {
    return alert("Username and password must be provided");
  }

  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginUsername: loginUsername,
        loginPassword: loginPassword,
       }),
    });
  
      const data = await response.json();
      console.log(data);
      location.href = `/users/${data.id}`
     

  } catch (error) {
    alert("Invalid credentials");
  }
});
