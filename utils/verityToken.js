const jwt = require("jsonwebtoken");
const { createError } = require("./error");

exports.verifyToken = (req, res, next) => {
  //console.log(req.headers.cookie.split("=")[1]);
  console.log("fine1")
  req.headers.authorization.split('Bearer ')[1];
  console.log(req.headers)
  console.log("fine2")
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT_SEKRETE, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

exports.verifPartner = (req, res, next) => {
  if (req.user.role === "partner") {
    next();
  } else {
    return next(createError(403, "You are not authorized!"));
  }
};

// exports.verifyAdmin = (req, res, next) => {
//   if (req.user.admin) {
//     return next();
//   } else {
//     return next(createError(401, "You are not authorized!"));
//   }
// };
