// const $username = document.getElementById("username");
// const $password = document.getElementById("password");
// const $submitButton = document.getElementById("submitBtn");
// const $logOutBtn = document.getElementById('logout');

// // add user 
// $submitButton?.addEventListener('click', async (event) => {
//   event.preventDefault();
//   const username = $username?.value;
//   const password = $password?.value;

//   if (!username || !password) {

//     return alert("username and password must be provided");
//   }

//   try {
//     const response = await fetch('/api/users/signup', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({username, password}),
//     });
//     const data = await response.json();
//     location.href = `/users/${data.id}`;

//   } catch (error) {
//     alert(error);
//   }
// });

// $logOutBtn?.addEventListener('click' , async()=> {
//   try {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//     });
//     const data = await response.json();
//     location.reload()
//   } catch (error) {
//     alert(error)
//   }
// });

const $signupUsername = document.getElementById("signupUsername");
const $signupPassword = document.getElementById("signupPassword");
const $signupBtn = document.getElementById("signupBtn");

const $loginUsername = document.getElementById("loginUsername");
const $loginPassword = document.getElementById("loginPassword");
const $loginBtn = document.getElementById("loginBtn");

const $logoutBtn = document.getElementById("logout");

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
    location.href = `/users/${data.id}`;
  } catch (error) {
    alert(error);
  }
});

$loginBtn?.addEventListener("click", async (event) => {
  event.preventDefault();
  const loginUsername = $loginUsername?.value.trim();
  const loginPassword = $loginPassword?.value.trim;

  if (!loginUsername || !loginPassword) {
    return alert("Username and password must be provided");
  }

  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loginUsername, loginPassword }),
    });
    const data = await response.json();
    location.href = `/users/${data.id}`;
  } catch (error) {
    alert("Invalid credentials");
  }
});

$logoutBtn?.addEventListener("click", async () => {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    const data = await response.json();
    location.reload();
  } catch (error) {
    alert(error);
  }
});


