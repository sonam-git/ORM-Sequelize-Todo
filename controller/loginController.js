
// checks if the user is already logged in, and if so, redirects the user to the dashboard
const loginDisplay = (req, res) => {
   // If the user is not logged in, the route renders a template named "login".
    res.render('login');
  };

module.exports = {loginDisplay}