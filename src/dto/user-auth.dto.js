import { verifyEmailSchema } from "#Schemas/email.schema.js";

export async function userAuthDTO(req, res, next) {
  const { email, password } = req.body;

  verifyEmailSchema(email).then((check) => {
    if (check === false)
      return res.status(409).json({
        message: "Conflict",
      });
    next();
  });
}
