const jwt = require("jsonwebtoken");
const {jwtSignature} =  require('./variables')
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
