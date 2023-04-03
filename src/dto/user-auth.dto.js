import { verifyEmailSchema } from "#Schemas/email.schema.js";
import { verifyPasswordSchema } from "#Schemas/password.schema.js";

export async function userAuthDTO(req, res, next) {
  const { email, password } = req.body;

  /*  const conflictError = () => {
    return res.status(409).json({
      message: "Conflict",
    });
  };*/

  verifyEmailSchema(email)
    .then((check) => {
      if (check === false) return res.status(409).json({ message: "Conflict" });
    })
    .catch((error) => {
      console.log("From email catch");
      next(error);
    });

  verifyPasswordSchema(password)
    .then((check) => {
      if (check === false) return res.status(409).json({ message: "Conflict" });
      return next();
    })
    .catch((error) => {
      console.log("From password catch");
      next(error);
    });

  //return res.status(400).json({ message: "wrong credentials" });
}
