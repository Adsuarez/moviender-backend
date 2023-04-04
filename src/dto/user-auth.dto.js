import { verifyEmailSchema } from "#Schemas/email.schema.js";
import { verifyPasswordSchema } from "#Schemas/password.schema.js";

export async function userAuthDTO(req, res, next) {
  const { email, password } = req.body;

  const conflictError = () => {
    return res.status(401).json({
      message: "wrong credentials",
    });
  };

  verifyEmailSchema(email)
    .then((check) => {
      if (check === false) return conflictError();
    })
    .catch((error) => {
      console.log("From email catch");
      next(error);
    });

  verifyPasswordSchema(password)
    .then((check) => {
      if (check === false) return conflictError();
      return next();
    })
    .catch((error) => {
      console.log("From password catch");
      next(error);
    });
}
