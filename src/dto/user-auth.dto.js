import { verifyEmailSchema } from "#Schemas/email.schema.js";
import { verifyPasswordSchema } from "#Schemas/password.schema.js";
import { unauthorized } from "#Helpers/errors.js";

export async function userAuthDTO(req, res, next) {
  const { body } = req;
  const AMOUNT_OF_VALUES = 2;

  if (Object.keys(body).length > AMOUNT_OF_VALUES) return unauthorized(res);

  const { email, password } = body;

  verifyEmailSchema(email)
    .then((check) => {
      if (check === false) return unauthorized(res);
    })
    .catch((error) => {
      console.log("From email catch");
      next(error);
    });

  verifyPasswordSchema(password)
    .then((check) => {
      if (check === false) return unauthorized(res);
      return next();
    })
    .catch((error) => {
      console.log("From password catch");
      next(error);
    });
}
