const jwt = require("jsonwebtoken");
let jwtSignature = process.env.JWT_SIGNATURE
let verificarToken = (
   req, 
   res, 
   next
) => {
   let token = req.get("Authorization");

   jwt.verify(
      token, 
      jwtSignature, 
      (
         err, 
      ) => {
         if (err) {
            return res.status(401).json({
               ok: false,
               err
            });
         }
         next();
      });
};
module.exports = {
   verificarToken
};
