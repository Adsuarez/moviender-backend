export const unauthorized = (res) => {
  return res.status(401).json({
    message: 'wrong credentials',
  })
}

export const notFound = (res, text) => {
  return res.status(404).json({
    message: `${text} not found`,
  })
}
