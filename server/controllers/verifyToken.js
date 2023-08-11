import jwt from 'jsonwebtoken'


export const verifyToken = (req, res, next) => {
  // GET the token from the request headers
  const authHeader = req.headers.token;
  // if there is a header means user is authenticated
  if (authHeader) {
    // get the token from the header (header ex: "Bearer ssdgdsfsdfhjoph")
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      // see if the token is valid
      if (err) res.status(403).json("Token is not valid!");
      // if the token is valid then make a new key in the req object assigned to the user 
      // user is the info you putted in the token when you created it while logging in which is {_id, isAdmin}
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

// if it is the current user who is making the request or the admin
export const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Sorry, you are neither an admin nor an authenticated user");
    }
  });
};

// if only the current user is an admin
export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Sorry, you are not an admin!");
    }
  });
};
