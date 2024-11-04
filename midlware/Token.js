function Token(req, res, next) {
    console.log("Creating Token......");
    setInterval(() => {
      const TOKEN = "123";
      req.token = TOKEN;
      next();
    }, 3000);
  }
  module.exports = Token;