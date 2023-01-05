import { test } from '../../services/db2/test/test.js'

export const testController = async (req, res, next) => {
  try {
    const results = await test(req.params.sku)
    res.body = results
    next()
  } catch (e) {
    console.log(e)
  }
}
