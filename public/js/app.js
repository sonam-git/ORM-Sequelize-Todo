const $username = document.getElementById("username");
const $password = document.getElementById("password");
const $submitButton = document.getElementById("submitBtn");
const $userList = document.querySelector(".userList");
const $logOutBtn = document.getElementById('logout');


// add user 
$submitButton?.addEventListener('click', async (event) => {
  event.preventDefault();
  const username = $username.value;
  const password = $password.value;

  if (!username || !password) {

    return alert("username and password must be provided");
  }

  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password}),
    });

    const data = await response.json();
   
    // location.href = `/users/${data.id}`;

    const $li = document.createElement("li");
    const $a = document.createElement("a");
    $a.setAttribute('href',`/users/${data.id}`);
    $a.textContent = data.username;
    const $p = document.createElement("p");
    $p.textContent = data.password;
    $li.appendChild($a);
    $li.appendChild($p);
    $userList.appendChild($li);
    $username.value = '';
    $password.value = '';
  } catch (error) {
    alert(error);
  }
});

$logOutBtn?.addEventListener('click' , async()=> {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
    });
    const data = await response.json();
    location.reload()
  } catch (error) {
    alert(error)
  }
});

