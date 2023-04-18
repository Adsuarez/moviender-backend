const REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

export const passwordSchema = {
  require: true,
  type: "string",
  format: REGEX,
  unique: false,
};

async function verifyFormat(password) {
  return REGEX.test(password);
}

export async function verifyPasswordSchema(password) {
  console.log("start verify: ", { password });
  if (!password) return false;
  console.log("password exist");
  if (typeof password !== passwordSchema.type) return false;
  console.log("password type is ok");
  const isCorrectFormat = await verifyFormat(password);
  //const isCorrectFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password);
  if (isCorrectFormat !== true) return false;
  console.log("password format is ok");
  return true;
}
