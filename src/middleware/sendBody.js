export const sendBody = (req, res, next) => {
  res.send(res.body)
  next()
}
