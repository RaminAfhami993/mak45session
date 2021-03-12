const url = require('url');
const generalTools = {};

generalTools.sessionChecker = function(req, res, next) {
  if (req.cookies.user_sid && req.session.user) {
    return res.redirect('/api/user/dashboard')
  };

  return next()
};

generalTools.loginChecker = function(req, res, next) {
    if (!req.session.user) {
        return res.redirect(url.format({
            pathname:"/api/auth/loginPage",
            query: {
               "msg": 'Please Login :('
             }
        }));
    };
  
    return next()
  };
  


module.exports = generalTools;