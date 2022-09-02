module.exports = { // exports an object that has a function (aka a method)
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) { // passport strategy to see if user is logged in/authenticated
        return next() // move on to next thing if authenticated; middleware will hang if this isn't in place
      } else {
        res.redirect('/') // if user is not logged in, send back to main page
      }
    }
  }
// function to check if user is authenticated (logged in); redirect to main page if not