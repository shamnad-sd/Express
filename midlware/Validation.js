function validation(req, res, next) {
    if (req.token) {
      console.log("Token Approved");
      next();
    }
  }
  module.exports = validation;