export const decodeUriParams = (req, res, next) => {
  Object.entries(req.params).forEach(([key, value]) => {
    req.params[key] = decodeURIComponent(value)
  })
  next()
}
