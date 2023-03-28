export const notFound = (res, text) => {
  return res.status(404).json({
    message: `${text} not found`,
  });
};
